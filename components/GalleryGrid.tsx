"use client";

import Image from "next/image";
import { useGalleryImages } from "@/lib/hooks/useGalleryImages";

interface GalleryGridProps {
  showAll?: boolean;
}

export default function GalleryGrid({ showAll = false }: GalleryGridProps) {
  const { images, isLoading, error } = useGalleryImages(showAll ? undefined : 6);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="relative h-64 bg-gray-200 rounded-lg animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image) => (
        <div 
          key={image.id} 
          className="relative h-64 overflow-hidden rounded-sm shadow-sm group"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="absolute bottom-4 left-4 text-white font-medium">
              {image.alt}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}