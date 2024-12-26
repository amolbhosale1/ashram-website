"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface BackgroundImageProps {
  src: string;
  alt: string;
}

export default function BackgroundImage({ src, alt }: BackgroundImageProps) {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
      }}
    >
      <Image src={src} alt={alt} className="w-full h-full object-cover" fill />
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </motion.div>
  );
}
