"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
export default function Navbar() {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState({ isHidden: false, isFirstImage: true });

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
            <a href="#" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-saffron-600">
                Babaji Ashram
              </span>
            </a>
          </div>

          <div className=".isHidden md:flex items-center space-x-8">
            <a
              href="#about"
              className={`${
                hidden.isFirstImage ? "text-white" : "text-gray-700"
              } hover:text-saffron-600`}
            >
              About
            </a>
            <a
              href="#gallery"
              className={`${
                hidden.isFirstImage ? "text-white" : "text-gray-700"
              } hover:text-saffron-600`}
            >
              Gallery
            </a>
            <a
              href="#location"
              className={`${
                hidden.isFirstImage ? "text-white" : "text-gray-700"
              } hover:text-saffron-600`}
            >
              Location
            </a>
          </div>

          <div className="md:hidden flex items-center">
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
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-saffron-600"
            >
              About
            </a>
            <a
              href="#gallery"
              className="block px-3 py-2 text-gray-700 hover:text-saffron-600"
            >
              Gallery
            </a>
            <a
              href="#location"
              className="block px-3 py-2 text-gray-700 hover:text-saffron-600"
            >
              Location
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
