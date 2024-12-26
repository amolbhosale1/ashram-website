"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import GalleryGrid from "./GalleryGrid";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
export default function Gallery() {
  const { language } = useLanguage();

  const t = translations[language];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-saffron-800 mb-8 text-center">
        {t.gallery.title}
      </h2>
      <GalleryGrid />
      <div className="mt-12 text-center">
        <Link href="/gallery">
          <Button
            variant="outline"
            className="bg-white text-saffron-700 border-saffron-200 hover:bg-saffron-50 hover:text-saffron-800 group"
          >
            {t.gallery.button}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
