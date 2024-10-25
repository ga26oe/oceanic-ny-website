import Image from "next/image";
import surfing2image from "/public/images/surfing2image.webp";
import oceaniamge from "/public/images/oceanimage.webp";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero Section Image Container */}
      <div className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
        {/* Background image container */}
        <div className="absolute inset-0">
          <Image
            src={surfing2image}
            alt="Surfer catching a wave"
            fill
            priority
            className="object-cover brightness-[0.65]"
            sizes="100vw"
            quality={85}
          />
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
        </div>
        {/* Container for Text and Buttons */}
        <div className="relative z-20 text-center pt-48 md:pt-56 px-4">
          <h1 className="text-2xl md:text-6xl mb-6 font-bold tracking-wide text-white/80 uppercase mix-blend-soft-light">
            Dream
            <span className="block mt-2 font-light">Bigger</span>
          </h1>
          <p className="text-lg md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto font-light tracking-wide">
            Discover amazing products and great deals
          </p>
          <div className="space-x-6">
            <Button
              variant="outline"
              className="bg-white/90 text-gray-900 hover:bg-white px-8 py-6 text-lg tracking-wide transition-all duration-300"
            >
              Learn More
            </Button>
            <Button className="bg-teal-600 hover:bg-teal-700 px-8 py-6 text-lg tracking-wide transition-all duration-300">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
      {/* Hero content */}
      <div className="max-w-6xl mx-auto px-4 py-24 relative">
        {/* Background decorative elements */}
        <div className="grid md:grid-cols-2 gap-16 items-center relative">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-wide">
              Our
              <span className="block mt-2 text-teal-600">Mission</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Created for a community of ocean lovers who strive to make a
              difference. Oceanic strives to produce quality clothing with
              designs that make you look and feel good.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Oceanic dreams of inspiring people to make a difference and to
              Dream Bigger. Together, Oceanic customers represent a community of
              dreamers and doers.
            </p>
            <Button className="bg-teal-600 hover:bg-teal-700 px-8 py-6 text-lg font-semibold tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl">
              Join Our Community
            </Button>
          </div>
          <div className="relative h-96 w-full">
            <div className="absolute inset-0 -m-4 bg-gradient-to-tr from-teal-100/30 to-transparent rounded-2xl" />
            <Image
              src={oceaniamge}
              alt="Surfing lifestyle"
              fill
              className="object-cover rounded-lg shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-teal-50 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gray-50 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
