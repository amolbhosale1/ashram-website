import { Metadata } from 'next';
import GalleryGrid from '@/components/GalleryGrid';

export const metadata: Metadata = {
  title: 'Photo Gallery - Babaji Ashram',
  description: 'Explore our collection of spiritual moments and sacred spaces at Babaji Ashram.',
};

export default function GalleryPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-saffron-800 mb-12 text-center">Photo Gallery</h1>
        <GalleryGrid showAll={true} />
      </div>
    </div>
  );
}