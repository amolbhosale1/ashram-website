"use client";

import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Address from "@/components/Address";
import Footer from "@/components/Footer";
import ServicesCarousel from "@/components/ServicesCarousel";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
export default function Home() {
  const { language } = useLanguage();

  const t = translations[language];
  return (
    <main className="bg-white">
      <Hero />

      <section
        id="about"
        className="py-16 bg-gradient-to-b from-saffron-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-saffron-800 mb-6">
                {t.services.welcome}
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                {t.services.subtitle}
              </p>
              <ServicesCarousel />
            </div>
            <div className="md:w-1/2">
              <iframe
                className="w-full aspect-video rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"
                title="Ashram Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 bg-white">
        <Gallery />
      </section>

      <section
        id="location"
        className="py-16 bg-gradient-to-b from-white to-saffron-50"
      >
        <Address />
      </section>

      <Footer />
    </main>
  );
}
