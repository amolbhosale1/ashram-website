import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Address from "@/components/Address";
import Footer from "@/components/Footer";
import ServicesCarousel from "@/components/ServicesCarousel";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      
      <section id="about" className="py-16 bg-gradient-to-b from-saffron-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-saffron-800 mb-6">
                Welcome to Babaji Ashram
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Founded on the principles of spiritual enlightenment and inner peace, our ashram
                provides a sacred space for meditation, yoga, and spiritual growth.
              </p>
              <ServicesCarousel />
            </div>
            <div className="md:w-1/2">
              <iframe
                className="w-full aspect-video rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/y6XZf3qWm5I"
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

      <section id="location" className="py-16 bg-gradient-to-b from-white to-saffron-50">
        <Address />
      </section>

      <Footer />
    </main>
  );
}