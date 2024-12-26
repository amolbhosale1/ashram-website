"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img />
        <Image
          src="https://plus.unsplash.com/premium_photo-1661964338346-f6d8fd9e6b27?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Ashram Temple at Sunrise"
          className="w-full h-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      <div className="relative pt-32 pb-16 sm:pt-35p sm:pb-24">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Welcome to Babaji Ashram
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-200">
            A sacred space for spiritual growth, meditation, and inner peace
          </p>
        </div>
      </div>
    </div>
  );
}
