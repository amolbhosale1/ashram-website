import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1545894468-1e0517b5922f",
    alt: "Main Temple at Sunrise",
  },
  {
    src: "https://images.unsplash.com/photo-1604881991720-f91add269bed",
    alt: "Meditation Hall",
  },
  {
    src: "https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb",
    alt: "Sacred Garden",
  },
  {
    src: "https://images.unsplash.com/photo-1593100126453-19b562a800c1",
    alt: "Yoga Session",
  },
  {
    src: "https://images.unsplash.com/photo-1577493340887-b7bfff550145",
    alt: "Prayer Ceremony",
  },
  {
    src: "https://images.unsplash.com/photo-1533669955142-6a73332af4db",
    alt: "Spiritual Art",
  },
  {
    src: "https://images.unsplash.com/photo-1532443603613-61fa154742cd",
    alt: "Morning Prayers",
  },
  {
    src: "https://images.unsplash.com/photo-1601123687447-d1e10f044914",
    alt: "Temple Architecture",
  },
  {
    src: "https://images.unsplash.com/photo-1595310233346-69c6d5558ee4",
    alt: "Sacred Rituals",
  }
];

interface GalleryGridProps {
  showAll?: boolean;
}

export default function GalleryGrid({ showAll = false }: GalleryGridProps) {
  const displayedImages = showAll ? images : images.slice(0, 6);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayedImages.map((image, index) => (
        <div 
          key={index} 
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