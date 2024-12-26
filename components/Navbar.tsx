"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
import LanguageSwitch from "./LanguageSwitch";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState({ isHidden: false, isFirstImage: true });

  const router = useRouter();
  const { language } = useLanguage();

  const t = translations[language];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/");
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    const isFirstImage = latest <= 650;
    const isHidden = latest > prev! && latest > 650;

    setHidden((prevState) => ({
      ...prevState,
      isFirstImage,
      isHidden,
    }));
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: {
          y: "-100%",
        },
      }}
      animate={hidden.isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`${
        hidden.isFirstImage ? "bg-transparent" : "bg-saffron-50"
      } fixed w-full z-50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link
              href="#"
              className="flex-shrink-0 flex items-center"
              onClick={handleLogoClick}
            >
              <span className="text-2xl font-bold text-saffron-600">
                {language === "hi" ? "बाबाजी आश्रम" : "Babaji Ashram"}
              </span>
            </Link>
          </div>

          <div className=".isHidden md:flex items-center space-x-8">
            <Link
              href="#about"
              className={`${
                hidden.isFirstImage ? "text-white" : "text-gray-700"
              } hover:text-saffron-600`}
            >
              {t.nav.about}
            </Link>
            <Link
              href="#gallery"
              className={`${
                hidden.isFirstImage ? "text-white" : "text-gray-700"
              } hover:text-saffron-600`}
            >
              {t.nav.gallery}
            </Link>
            <Link
              href="#location"
              className={`${
                hidden.isFirstImage ? "text-white" : "text-gray-700"
              } hover:text-saffron-600`}
            >
              {t.nav.location}
            </Link>
            <LanguageSwitch />
          </div>

          <div className="md:hidden flex items-center">
            <LanguageSwitch />
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-saffron-600"
            >
              {t.nav.about}
            </Link>
            <Link
              href="#gallery"
              className="block px-3 py-2 text-gray-700 hover:text-saffron-600"
            >
              {t.nav.gallery}
            </Link>
            <Link
              href="#location"
              className="block px-3 py-2 text-gray-700 hover:text-saffron-600"
            >
              {t.nav.location}
            </Link>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
