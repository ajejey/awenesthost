'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Icon as LucideIcon, // Import Icon type for better typing
  Globe,
  Camera,
  DollarSign,
  Calendar,
  MessageCircle,
  Shield,
  Smartphone,
  Settings,
  Award,
  TrendingUp
} from 'lucide-react';

interface FloaterElement {
  icon: React.ElementType;
  text: string;
  position: string;
}

interface Feature {
  icon: React.ElementType;
  title: string;
  desc: string;
  imgSrc: string;
  imgAlt: string;
  floaters?: FloaterElement[];
}

const featuresData: Feature[] = [
  {
    icon: Globe,
    title: "Multi-Platform Presence",
    desc: "Maximize your property's visibility by listing on Airbnb, Booking.com, MakeMyTrip, Agoda, VRBO, TripAdvisor, and more. We ensure your property reaches a global audience.",
    // imgSrc: "https://images.unsplash.com/photo-1583054346111-3ceb09bbf9eb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgSrc: "/images/airbnb_tripadvisor_vrbo_bookingv2.jpg",
    imgAlt: "Globe showing interconnectedness",
    floaters: [
      { icon: Award, text: "Top Platforms", position: "top-4 -left-4" },
      { icon: TrendingUp, text: "Global Reach", position: "bottom-4 -right-4" }
    ]
  },
  {
    icon: Camera,
    title: "Professional Photography",
    desc: "High-quality, professionally shot images that showcase your property's best features. Compelling visuals are key to attracting more bookings and higher rates.",
    imgSrc: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    imgAlt: "Professionally photographed modern living room",
    floaters: [
      { icon: DollarSign, text: "Higher Bookings", position: "top-4 -right-4" },
    ]
  },
  {
    icon: DollarSign,
    title: "Dynamic Pricing Strategy",
    desc: "Utilize AI-powered pricing optimization that adjusts rates based on demand, seasonality, and local events, ensuring you always get the best possible return.",
    imgSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    imgAlt: "Graph showing upward trend in revenue",
    floaters: [
      { icon: TrendingUp, text: "Maximized Revenue", position: "bottom-4 -left-4" },
    ]
  },
  {
    icon: Calendar,
    title: "Smart Calendar Management",
    desc: "Seamless synchronization across all platforms with owner block-out dates and booking coordination. Never worry about double bookings again.",
    imgSrc: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    imgAlt: "Digital calendar interface showing bookings",
    floaters: [
        { icon: Calendar, text: "Seamless Sync", position: "top-4 -left-4" },
    ]
  },
  {
    icon: MessageCircle,
    title: "24/7 Guest Communication",
    desc: "Professional guest support from inquiry to post-stay follow-up in multiple languages. We ensure your guests feel valued and supported around the clock.",
    imgSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    imgAlt: "Customer support agent assisting a guest",
    floaters: [
        { icon: MessageCircle, text: "24/7 Support", position: "bottom-4 -right-4" },
    ]
  },
  {
    icon: Shield,
    title: "Complete Property Protection",
    desc: "Regular inspections, maintenance coordination, and comprehensive insurance coverage options. Your investment is safe and well-maintained with us.",
    imgSrc: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    imgAlt: "Well-maintained modern house exterior",
    floaters: [
        { icon: Shield, text: "Protected Property", position: "top-4 -left-4" },
    ]
  },
  {
    icon: Smartphone,
    title: "Real-Time Reporting",
    desc: "Access detailed analytics, performance metrics, and financial reports delivered to your inbox or through our owner portal. Stay informed, effortlessly.",
    imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    imgAlt: "Analytics dashboard on a smartphone screen",
    floaters: [
        { icon: Smartphone, text: "Real-Time Data", position: "bottom-4 -right-4" },
    ]
  },
  {
    icon: Settings,
    title: "Full-Service Management",
    desc: "Enjoy a complete hands-off experience. We handle everything from guest vetting to property upkeep, while you collect the profits and peace of mind.",
    imgSrc: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    imgAlt: "Person relaxing while their property is managed",
    floaters: [
        { icon: Settings, text: "Hands-Off Experience", position: "top-4 -right-4" },
    ]
  }
];

interface FeatureItemProps {
  feature: Feature;
  index: number;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ feature, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 my-20 lg:my-32 ${isEven ? '' : 'lg:flex-row-reverse'}`}
    >
      {/* Image Section */}
      <motion.div 
        className="w-full lg:w-1/2 relative group"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src={feature.imgSrc} 
          alt={feature.imgAlt} 
          className={`rounded-3xl shadow-2xl shadow-orange-500/30 w-full h-80 lg:h-96 border-4 border-white ${index === 0 ? 'object-contain' : 'object-cover'}`}
        />
        {/* Floating Elements */}
        {feature.floaters && feature.floaters.map((floater, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            animate={{ y: [0, -5, 0], x: [0, 3, 0] }}            
            // @ts-ignore - Framer Motion's 'transition' prop type can be tricky with 'repeat'
            customTransition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }} 
            className={`absolute ${floater.position} bg-white rounded-xl shadow-xl shadow-orange-500/20 p-3 border border-orange-100 z-10`}
          >
            <div className="flex items-center gap-2">
              <floater.icon className="w-5 h-5 text-orange-600" />
              <span className="font-semibold text-sm text-slate-700">{floater.text}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Text Content Section */}
      <div className="w-full lg:w-1/2">
        <motion.div 
          className="p-4"
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg">
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-800">
              {feature.title}
            </h3>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed">
            {feature.desc}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 lg:py-32 px-6 bg-gradient-to-br from-slate-50 via-orange-50/30 to-orange-50/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-slate-800">
            Unlock the Full Potential of <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Your Property</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We provide a comprehensive suite of services designed to maximize your earnings and minimize your effort. Discover how we make property management seamless and profitable.
          </p>
        </motion.div>

        <div>
          {featuresData.map((feature, index) => (
            <FeatureItem key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;