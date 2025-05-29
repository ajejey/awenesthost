'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import { 
  Home, 
  Building2, 
  Heart, 
  Shield, 
  TrendingUp, 
  Users, 
  Star, 
  Mail, 
  Phone, 
  ArrowRight, 
  CheckCircle, 
  MapPin, 
  Calendar,
  Zap,
  Globe,
  Camera,
  MessageCircle,
  Award,
  Menu,
  X,
  Wifi,
  Coffee,
  Car,
  Clock,
  DollarSign,
  Eye,
  Smartphone,
  Settings,
  Target,
  Briefcase,
  Plus,
  ChevronDown
} from 'lucide-react';
import Features from "./components/Features";
import Footer from "./components/Footer";
import PlatformLogos from './components/PlatformLogos';

const AweNestHostLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const heroY = useTransform(scrollYProgress, [0, 0.3], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: Home,
      title: "Vacation Rental Management",
      subtitle: "Complete Short-Term Rental Solutions",
      features: [
        "Professional listings on 10+ platforms (Airbnb, Booking.com, MakeMyTrip, Agoda, VRBO)",
        "High-quality photography and compelling property descriptions",
        "Dynamic pricing strategy to maximize occupancy and revenue",
        "Calendar synchronization across all booking platforms",
        "Guest screening and seamless check-in/out coordination",
        "On-ground assistance and local support services"
      ],
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: Briefcase,
      title: "Corporate Stays",
      subtitle: "Premium Business Accommodation Solutions",
      features: [
        "Fully furnished accommodations tailored for business travelers",
        "Long-term stay options for extended professional assignments",
        "Corporate concierge services including housekeeping and transport",
        "Flexible booking terms with utility management included",
        "Responsive 24/7 guest support for business needs",
        "Professional workspace setup and high-speed internet"
      ],
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Heart,
      title: "Medical Tourism Accommodation",
      subtitle: "Comfortable Recovery & Treatment Support",
      features: [
        "Strategically located near hospitals and medical centers",
        "Short to long-term accommodations for patients and families",
        "Special amenities designed for patient comfort and recovery",
        "Transportation assistance to medical appointments",
        "Meal arrangements and dietary accommodation support",
        "Dedicated support for caregivers and family members"
      ],
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Settings,
      title: "Complete Property Management",
      subtitle: "End-to-End Property Care Solutions",
      features: [
        "Interior design consultation and professional setup",
        "Regular property inspections and preventive maintenance",
        "Comprehensive inventory management and restocking",
        "Move-in readiness and quality assurance checks",
        "Remote property supervision while owners are away",
        "Emergency response and immediate issue resolution"
      ],
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Users,
      title: "Guest & Booking Management",
      subtitle: "Premium Hospitality Experience",
      features: [
        "24/7 guest communication (pre-arrival to post-departure)",
        "Professional check-in/out management and key handover",
        "Proactive review management and reputation building",
        "Conflict resolution and immediate issue management",
        "Concierge-level local recommendations and support",
        "Multi-language guest support capabilities"
      ],
      color: "from-rose-500 to-pink-600"
    },
    {
      icon: Target,
      title: "Marketing & Revenue Optimization",
      subtitle: "Strategic Growth & Visibility Solutions",
      features: [
        "Multi-platform marketing campaigns and social media promotion",
        "SEO optimization with targeted keyword strategies",
        "Email remarketing and automated guest communication",
        "Performance analytics and revenue optimization reports",
        "Seasonal pricing adjustments and demand forecasting",
        "Professional brand building and online reputation management"
      ],
      color: "from-cyan-500 to-blue-600"
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Professional Onboarding",
      description: "We start with professional photography, compelling content creation, and optimized listings across all major booking platforms with SEO-focused descriptions.",
      icon: Camera,
      details: ["Professional photography session", "Compelling listing copy", "SEO optimization", "Multi-platform publishing"]
    },
    {
      step: "02",
      title: "Strategic Marketing Launch",
      description: "Launch comprehensive marketing campaigns including social media promotion, Google keyword optimization, and targeted email marketing to maximize visibility.",
      icon: Globe,
      details: ["Social media campaigns", "Google Ads optimization", "Email marketing setup", "Calendar synchronization"]
    },
    {
      step: "03",
      title: "Guest Experience Management",
      description: "Handle all guest interactions from booking approval to post-stay follow-up, including check-in coordination, housekeeping, and local support services.",
      icon: MessageCircle,
      details: ["Booking management", "Guest communication", "Check-in coordination", "Housekeeping services"]
    },
    {
      step: "04",
      title: "Property Care & Maintenance",
      description: "Conduct regular property inspections, inventory checks, cleanliness maintenance, and provide detailed reports to keep your property in perfect condition.",
      icon: Shield,
      details: ["Regular inspections", "Inventory management", "Maintenance coordination", "Owner reporting"]
    },
    {
      step: "05",
      title: "Revenue Optimization",
      description: "Continuously analyze performance data, adjust pricing based on demand trends, and provide detailed analytics to maximize your rental income potential.",
      icon: TrendingUp,
      details: ["Dynamic pricing", "Performance analytics", "Market analysis", "Revenue reporting"]
    }
  ];

  const testimonials = [
    { 
      name: "Mythreyi", 
      location: "Property Owner, Bangalore",
      text: "AweNestHost™ completely transformed my property investment. They helped me increase my rental income by 30% while I barely had to lift a finger. Their professional approach and attention to detail is outstanding.",
      rating: 5,
      revenue: "+30% Income"
    },
    { 
      name: "Ashok C Wali", 
      location: "Real Estate Investor, Mumbai",
      text: "The level of service and professionalism exceeded all my expectations. From the beautiful photography to managing difficult guests, they handle everything seamlessly. Truly exceptional service.",
      rating: 5,
      revenue: "5★ Reviews"
    },
    { 
      name: "Ramakrishna Rao", 
      location: "Corporate Property Owner, Hyderabad",
      text: "Their expertise in corporate stays is unmatched. They've consistently delivered high-quality experiences for our business travelers while maintaining excellent property standards throughout.",
      rating: 5,
      revenue: "100% Occupancy"
    }
  ];

  const stats = [
    { number: "500+", label: "Properties Managed", icon: Home },
    { number: "30%", label: "Average Income Increase", icon: TrendingUp },
    { number: "24/7", label: "Guest Support Available", icon: Clock },
    { number: "98%", label: "Guest Satisfaction Rating", icon: Star },
    { number: "10+", label: "Booking Platforms", icon: Globe },
    { number: "100%", label: "Owner Satisfaction", icon: Award }
  ];



  const contactInfo = [
    { icon: Mail, title: "Email", value: "contact@awenesthost.com" },
    { icon: Phone, title: "Phone", value: "+1 555-123-4567" },
    { icon: MapPin, title: "Address", value: "123 Main St, Anytown, USA" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/20 text-slate-800 overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-amber-200/50 shadow-lg shadow-amber-100/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                AweNestHost™
              </div>
              <div className="text-xs text-slate-500 -mt-1">Premium Property Management</div>
            </div>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {['Services', 'How It Works', 'About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                whileHover={{ scale: 1.05 }}
                className="text-slate-700 hover:text-amber-600 transition-colors cursor-pointer font-medium"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Get Started
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-amber-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-xl border-t border-amber-200/50"
            >
              <div className="px-6 py-4 space-y-4">
                {['Services', 'How It Works', 'About', 'Contact'].map((item) => (
                  <div key={item} className="block py-2 text-slate-700 hover:text-amber-600 transition-colors cursor-pointer font-medium">
                    {item}
                  </div>
                ))}
                <button className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full font-semibold mt-4">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            style={{ y: heroY, opacity: heroOpacity }}
            className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-3xl"
          />
          <motion.div 
            style={{ y: heroY, opacity: heroOpacity }}
            className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-orange-400/15 to-amber-500/15 rounded-full blur-3xl"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-amber-700 font-semibold mb-6"
            >
              <Award className="w-4 h-4" />
              Premium Property Management Services
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-slate-800">Unlock Your</span>
              <br />
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Property's Full
              </span>
              <br />
              <span className="text-slate-800">Potential</span>
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
              Transform your property into a thriving rental business with our comprehensive management services. We handle everything from professional photography to guest management, maximizing your income while you enjoy complete peace of mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full text-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                Start Earning More <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-amber-300 text-amber-700 rounded-full text-lg font-semibold hover:bg-amber-50 transition-all"
              >
                See How It Works
              </motion.button>
            </div>

            <div className="flex items-center gap-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>No Setup Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Guaranteed Results</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white rounded-3xl shadow-2xl shadow-amber-500/20 p-8 border border-amber-100"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800">Monthly Revenue</div>
                      <div className="text-sm text-slate-500">Property Income</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-green-600">+30%</div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {stats.slice(0, 3).map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl"
                    >
                      <stat.icon className="w-6 h-6 mx-auto mb-2 text-amber-600" />
                      <div className="text-2xl font-bold text-slate-800">{stat.number}</div>
                      <div className="text-xs text-slate-500">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl shadow-amber-500/20 p-4 border border-amber-100"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-semibold text-slate-800">4.9/5</span>
                </div>
                <div className="text-xs text-slate-500">Guest Rating</div>
              </motion.div>

              <motion.div
                animate={{ x: [0, -8, 0], y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl shadow-amber-500/20 p-4 border border-amber-100"
              >
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-500" />
                  <span className="font-semibold text-slate-800">10+</span>
                </div>
                <div className="text-xs text-slate-500">Platforms</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Logos */}
      <PlatformLogos /> 

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-slate-800">
              Complete Property Management
              <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From vacation rentals to corporate stays, we provide comprehensive services that maximize your property's potential while ensuring exceptional guest experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl shadow-xl shadow-orange-500/10 border border-orange-100 overflow-hidden hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500"
              >
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col items-start gap-6">
                    <div className="flex items-center gap-6 flex-shrink-0">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg`}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-slate-800 mb-1">
                          {service.title}
                        </h3>
                        <p className="text-sm text-slate-600">{service.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="flex-grow w-full">

                      <div className="grid grid-cols-1 gap-3 pt-4 border-t border-orange-100">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-600">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">Our Process</span>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-slate-800">
              How We Transform
              <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Your Property
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our proven 5-step process ensures your property reaches its maximum earning potential with minimal effort from you.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-300 to-orange-500 hidden lg:block"></div>
            
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-24 last:mb-0 relative"
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border-4 border-orange-500 z-10 hidden lg:block"></div>
                  
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <motion.div 
                      whileHover={{ scale: 1.03 }}
                      className="bg-white rounded-3xl shadow-xl p-8 border border-amber-100 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300"
                    >
                      <div className="flex items-start gap-6 mb-6">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          transition={{ duration: 0.3 }}
                          className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
                        >
                          <step.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <div>
                          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium mb-2">Step {index + 1}</span>
                          <h3 className="text-2xl font-bold text-slate-800 mb-2">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-lg text-slate-600 leading-relaxed">{step.description}</p>
                    </motion.div>
                  </div>
                  
                  <div className={`flex-1 hidden lg:block ${index % 2 === 0 ? 'lg:pl-16' : 'lg:pr-16'}`}>
                    {/* Empty space for alignment */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Background decorative elements */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -right-64 -bottom-64 w-96 h-96 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full opacity-20 blur-3xl"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -left-32 -top-32 w-64 h-64 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-20 blur-3xl"
        />
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-slate-800">
                What Our Clients Say
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Hear from our satisfied clients who have experienced the benefits of our property management services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl shadow-xl shadow-orange-500/10 border border-orange-100 p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    {/* <div className="flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full"
                      />
                    </div> */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">{testimonial.name}</h3>
                      {/* <p className="text-lg text-slate-600">{testimonial.title}</p> */}
                    </div>
                  </div>
                  <p className="text-lg text-slate-600">{testimonial.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<section className="py-24 bg-gradient-to-br from-orange-50 to-amber-50">
  <div className="max-w-7xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-slate-800">
        Our Impact By The Numbers
      </h2>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
        We transform properties into profitable investments with measurable results.
      </p>
    </motion.div>
    
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-lg shadow-orange-500/5 border border-orange-100 hover:shadow-orange-500/20 hover:border-orange-200 transition-all duration-300"
        >
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-orange-100 rounded-full text-orange-600">
              <stat.icon size={24} />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">{stat.number}</h3>
            <p className="text-sm text-slate-600">{stat.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* Features */}
<Features />


{/* Contact & Support */}
<section id="contact" className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-800">Contact & Support</h2>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto">
        We're here to help you with any questions or concerns about our services.
      </p>
    </motion.div>
    
    <div className="grid md:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-md p-8"
      >
        <h3 className="text-2xl font-bold mb-6 text-slate-800">Get in Touch</h3>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <Mail className="text-amber-600 mr-4 mt-1" size={24} />
            <div>
              <h4 className="font-semibold text-slate-800">Email</h4>
              <a href="mailto:info@awenesthost.com" className="text-amber-600 hover:underline">info@awenesthost.com</a>
            </div>
          </div>
          
          <div className="flex items-start">
            <Phone className="text-amber-600 mr-4 mt-1" size={24} />
            <div>
              <h4 className="font-semibold text-slate-800">Phone</h4>
              <a href="tel:+918919823564" className="text-amber-600 hover:underline">(+91) 891-982-3564</a>
            </div>
          </div>
          
          <div className="flex items-start">
            <Globe className="text-amber-600 mr-4 mt-1" size={24} />
            <div>
              <h4 className="font-semibold text-slate-800">Social Media</h4>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-slate-600 hover:text-amber-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="text-slate-600 hover:text-amber-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="text-slate-600 hover:text-amber-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-md p-8"
      >
        <h3 className="text-2xl font-bold mb-6 text-slate-800">Inquiry Form</h3>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
            <input type="text" id="subject" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
            <textarea id="message" rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"></textarea>
          </div>
          <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  </div>
</section>



      <Footer />
      </div>
    );
}

export default AweNestHostLanding;
