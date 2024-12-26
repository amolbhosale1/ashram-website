"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { db } from "@/lib/firebase";
import type { Service } from "@/types/service";
import moment from "moment";
export default function ServicesCarousel() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      try {
        const servicesRef = collection(db, "services-events");
        const q = query(servicesRef, orderBy("time", "asc"));
        const querySnapshot = await getDocs(q);

        const servicesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Service[];

        setServices(servicesData);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchServices();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full max-w-xl animate-pulse">
        <div className="h-48 bg-gray-200 rounded-lg"></div>
      </div>
    );
  }

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-xl"
    >
      <CarouselContent>
        {services.map((service) => (
          <CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/2">
            <Card className="border-saffron-100 hover:border-saffron-200 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-saffron-700 capitalize">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 capitalize">
                  {service.description}
                </p>
                <div className="space-y-1 text-sm">
                  <p className="text-saffron-600">
                    🕒{" "}
                    {moment
                      .unix(service.time.seconds)
                      .format("ddd, Do MMM YYYY, h:mm A")}
                  </p>
                  <p className="text-saffron-600 uppercase">
                    👤 {service.teacher}
                  </p>
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
