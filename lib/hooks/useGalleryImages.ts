"use client";

import { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { GalleryImage } from '@/types/gallery';

export function useGalleryImages(imageLimit?: number) {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        const imagesRef = collection(db, 'gallery');
        const q = imageLimit
          ? query(imagesRef, orderBy('createdAt', 'desc'), limit(imageLimit))
          : query(imagesRef, orderBy('createdAt', 'desc'));
        
        const querySnapshot = await getDocs(q);
        const imagesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as GalleryImage[];

        setImages(imagesData);
      } catch (err) {
        console.error('Error fetching gallery images:', err);
        setError('Failed to load gallery images');
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [imageLimit]);

  return { images, isLoading, error };
}