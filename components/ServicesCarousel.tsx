"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Meditation",
    description: "Daily guided meditation sessions for inner peace and spiritual growth",
    time: "6:00 AM - 7:30 AM",
    teacher: "Swami Prakash",
  },
  {
    title: "Yoga",
    description: "Traditional Hatha and Ashtanga yoga classes for all levels",
    time: "8:00 AM - 9:30 AM",
    teacher: "Guru Priya",
  },
  {
    title: "Pranayama",
    description: "Ancient breathing techniques for vitality and mental clarity",
    time: "5:00 PM - 6:00 PM",
    teacher: "Yogi Ramesh",
  },
  {
    title: "Bhajan",
    description: "Devotional singing and chanting sessions",
    time: "7:00 PM - 8:00 PM",
    teacher: "Sri Bhakti Das",
  }
];

export default function ServicesCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-xl"
    >
      <CarouselContent>
        {services.map((service, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
            <Card className="border-saffron-100 hover:border-saffron-200 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-saffron-700">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-1 text-sm">
                  <p className="text-saffron-600">🕒 {service.time}</p>
                  <p className="text-saffron-600">👤 {service.teacher}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-saffron-600 hover:text-saffron-700" />
      <CarouselNext className="text-saffron-600 hover:text-saffron-700" />
    </Carousel>
  );
}