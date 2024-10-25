import Image from "next/image";
import { motion } from "framer-motion";
import surfingimage from "/public/images/surfingimage.webp";
import surfing2image from "/public/images/surfing2image.webp";
import { ChevronDown } from "lucide-react";
const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero Section Image */}
      <div className="relative h-[75vh] w-full overflow-hidden">
        {/* Background image container */}
        <div className="absolute inset-0">
          <Image
            src={surfing2image}
            alt="Surfer catching a wave"
            fill
            priority
            className="object-cover brightness-75"
            sizes="100vw"
            quality={85}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
        </div>

        {/* Hero content */}

        {/* Scroll indicator */}

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Created for a community of ocean lovers who strive to make a
              difference. Oceanic strives to produce quality clothing with
              designs that make you look and feel good.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Oceanic dreams of inspiring people to make a difference and to
              Dream Bigger. Together, Oceanic customers represent a community of
              dreamers and doers.
            </p>
          </div>
          <div className="relative h-96 w-full">
            <Image
              src="/public/images/surfingimage.webp"
              alt="Surfing lifestyle"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Sustainability",
                description:
                  "Committed to protecting our oceans through eco-friendly practices and materials.",
              },
              {
                title: "Community",
                description:
                  "Building a global network of ocean enthusiasts and environmental advocates.",
              },
              {
                title: "Quality",
                description:
                  "Crafting durable, stylish clothing that stands up to your adventures.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
