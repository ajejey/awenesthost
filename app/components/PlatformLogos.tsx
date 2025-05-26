import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const platformData = [
  { name: "Airbnb", src: "/images/Airbnb-Logo.png", alt: "Airbnb Logo" },
  { name: "Booking.com", src: "/images/Booking.com-Logo.png", alt: "Booking.com Logo" },
  { name: "MakeMyTrip", src: "/images/Makemytrip_logo.svg.png", alt: "MakeMyTrip Logo" },
  { name: "Agoda", src: "/images/Agoda_logo_2019.svg.png", alt: "Agoda Logo" },
  { name: "VRBO", src: "/images/Vrbo.svg.png", alt: "VRBO Logo" },
  { name: "TripAdvisor", src: "/images/TripAdvisor_Logo.svg.png", alt: "TripAdvisor Logo" },
  { name: "Goibibo", src: "/images/Goibibo_logo.png", alt: "Goibibo Logo" },
//   { name: "Indian Tourism", src: "/images/IndianTourism_logo.png", alt: "Indian Tourism Logo" }
];

const PlatformLogos: React.FC = () => {
  const duplicatedLogos = [...platformData, ...platformData]; // Duplicate for seamless scroll

  const marqueeVariants = {
    animate: {
      x: [0, -1512], // Approximate width of one set of logos (7 logos * ~216px width including margin)
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop' as const,
          duration: 35, // Adjust duration for speed
          ease: 'linear' as const,
        },
      },
    },
  };

  return (
    <section className="py-12 md:py-16 bg-white border-y border-orange-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-sm font-medium tracking-wider text-slate-500 uppercase">
            Seamlessly Listed Across Major Platforms
          </h2>
        </motion.div>

        <div className="relative w-full">
          {/* Gradient Fades */}
          {/* <div className="absolute top-0 bottom-0 left-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10"></div> */}

          <motion.div
            className="flex"
            variants={marqueeVariants}
            animate="animate"
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`logo-${logo.name}-${index}`}
                className="flex-shrink-0 mx-6 md:mx-10 lg:mx-12 py-3 flex items-center justify-center"
                style={{ minWidth: '120px' }} // Ensure logos have some minimum space
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120} // Adjust as needed, ensure aspect ratio is maintained
                  height={40} // Adjust as needed
                  className="object-contain hover:filter-none transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-105"
                  unoptimized={logo.src.endsWith('.svg')} // For SVGs if not optimizing them via Next/Image
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlatformLogos;