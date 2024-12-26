"use client";
import BackgroundImage from "./hero/BackgroundImage";
import ScrollButton from "./hero/ScrollButton";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export default function Hero() {
  const { language } = useLanguage();

  const t = translations[language];
  return (
    <div className="relative min-h-screen">
      <BackgroundImage
        src="https://plus.unsplash.com/premium_photo-1661964338346-f6d8fd9e6b27?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Ashram Temple at Sunrise"
      />

      <motion.div
        className="relative pt-32 pb-16 sm:pt-35p sm:pb-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {t.hero.welcome}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl mx-auto text-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {t.hero.subtitle}
          </motion.p>
        </div>
      </motion.div>
      <ScrollButton />
    </div>
  );
}
