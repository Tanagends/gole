'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Cloud,
  Server,
  Shield,
  Zap,
  Globe,
  Lock,
  ChevronRight,
  BarChart3,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Activity,
  Award
} from 'lucide-react';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeService, setActiveService] = useState(0);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const services = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Enterprise-grade cloud infrastructure with 99.99% uptime guarantee",
      features: ["Auto-scaling", "Load Balancing", "CDN Integration"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Solutions",
      description: "Secure, scalable database management and analytics",
      features: ["Real-time Analytics", "Automated Backups", "Data Encryption"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Suite",
      description: "Military-grade security protocols and compliance",
      features: ["DDoS Protection", "SSL Certificates", "Threat Detection"]
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "DevOps Platform",
      description: "Streamlined CI/CD pipelines and deployment automation",
      features: ["Container Orchestration", "Git Integration", "Monitoring"]
    }
  ];

  const stats = [
    { value: "99.99%", label: "Uptime SLA", icon: <Activity /> },
    { value: "50+", label: "Global Data Centers", icon: <Globe /> },
    { value: "2M+", label: "Active Users", icon: <Users /> },
    { value: "50ms", label: "Avg Response Time", icon: <Zap /> }
  ];

  // Variants for staggered headline animation
  const headlineContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const headlineWordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // Loading Screen
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mb-8"
          >
            <Cloud className="w-24 h-24 text-white mx-auto" />
          </motion.div>
          <motion.h1
            className="text-4xl font-bold text-white mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            GOLE CLOUD PROTOTYPE!
          </motion.h1>
          <div className="flex gap-2 justify-center">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-blue-400 rounded-full"
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  repeat: Infinity
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"
        />
      </div>

      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-blue-100"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* --- NAVBAR REVAMPED --- */}
          <motion.div 
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Cloud className="w-10 h-10 text-blue-600" />
            <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
              GoleCloud
            </span>
          </motion.div>
          {/* --- END NAVBAR REVAMP --- */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Start Free Trial
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        style={{ opacity, scale }}
        className="min-h-screen flex items-center justify-center mb-6 px-6 pt-20"
      >
        <div className="container mx-auto">
          {/* --- HERO REVAMPED --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* New dynamic centerpiece */}
            <motion.div 
              className="relative w-48 h-48 md:w-60 md:h-60 mb-12 mx-auto flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
            >
              <motion.div
                className="absolute inset-0 bg-blue-400 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              >
                <Globe className="w-48 h-48 md:w-60 md:h-60 text-blue-200 opacity-70" />
              </motion.div>
              <motion.div>
                <div className="w-24 h-24 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-2xl">
                    <Cloud className="w-14 h-14 text-blue-600" />
                </div>
              </motion.div>
              {[
                  { icon: <Cpu className="w-6 h-6"/>, pos: "top-0 left-10" },
                  { icon: <Shield className="w-6 h-6"/>, pos: "top-24 -right-4" },
                  { icon: <Database className="w-6 h-6"/>, pos: "bottom-4 -left-4" },
                  { icon: <Zap className="w-6 h-6"/>, pos: "bottom-16 right-0" },
              ].map((item, index) => (
                  <motion.div
                      key={index}
                      className={`absolute p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg text-blue-600 ${item.pos}`}
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 3 + index, repeat: Infinity, ease: 'easeInOut' }}
                  >
                      {item.icon}
                  </motion.div>
              ))}
            </motion.div>

            {/* New animated headline */}
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold mb-6 text-slate-800"
              variants={headlineContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {"Cloud Excellence".split(" ").map((word, index) => (
                <motion.span key={index} variants={headlineWordVariants} className="inline-block mr-4">
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.span variants={headlineWordVariants} className="bg-gradient-to-r from-blue-600 via-purple-500 to-blue-700 bg-clip-text text-transparent">
                Redefined.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto"
            >
              Transform your infrastructure with enterprise-grade cloud solutions. 
              Secure, scalable, and surprisingly simple.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold text-lg shadow-xl flex items-center gap-2 group"
              >
                Deploy Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white border-2 border-blue-200 text-blue-700 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-50 transition-colors"
              >
                View Demo
              </motion.button>
            </motion.div>
          </motion.div>
          {/* --- END HERO REVAMP --- */}
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                {/* --- ACTIVE STATE ADDED --- */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  whileTap={{ scale: 1.05, rotate: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-4"
                >
                  <div className="text-white">{stat.icon}</div>
                </motion.div>
                <motion.div 
                  className="text-4xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Powerful Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-600">Built for scale, designed for simplicity</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
                }}
                /* --- ACTIVE STATE ADDED --- */
                whileTap={{ scale: 0.98, y: -5 }}
                onClick={() => setActiveService(index)}
                className={`p-8 rounded-3xl cursor-pointer transition-all ${
                  activeService === index 
                    ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl' 
                    : 'bg-white border border-blue-100 hover:border-blue-300'
                }`}
              >
                <motion.div
                  /* --- ACTIVE STATE ADDED --- */
                  whileHover={{ rotate: 360 }}
                  whileTap={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    activeService === index 
                      ? 'bg-white/20' 
                      : 'bg-gradient-to-br from-blue-50 to-blue-100'
                  }`}
                >
                  <div className={activeService === index ? 'text-white' : 'text-blue-600'}>
                    {service.icon}
                  </div>
                </motion.div>
                <h3 className="text-2xl font-bold text-black mb-3">{service.title}</h3>
                <p className={`mb-6 ${activeService === index ? 'text-blue-100' : 'text-slate-600'}`}>
                  {service.description}
                </p>
                <AnimatePresence>
                  {activeService === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2"
                    >
                      {service.features.map((feature, fIndex) => (
                        <motion.div
                          key={fIndex}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: fIndex * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className="w-5 h-5 text-green-300" />
                          <span className="text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      Enterprise Ready
                    </span>
                  </h2>
                  <p className="text-xl text-slate-600 mb-8">
                    Trusted by leading companies in South Africa and worldwide for mission-critical operations.
                  </p>
                </motion.div>

                <div className="space-y-4">
                  {[
                    { icon: <Award />, title: "ISO 27001 Certified", desc: "Industry-leading security standards" },
                    { icon: <Lock />, title: "End-to-End Encryption", desc: "Your data, always protected" },
                    { icon: <Zap />, title: "Lightning Fast", desc: "Sub-50ms response times globally" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      /* --- ACTIVE STATE ADDED --- */
                      whileHover={{ x: 10, backgroundColor: "#FFFFFF" }}
                      whileTap={{ scale: 0.98, x: 5 }}
                      className="flex gap-4 p-4 rounded-2xl hover:shadow-lg transition-all cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-slate-800">{item.title}</h3>
                        <p className="text-slate-600">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative z-10"
                >
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 shadow-2xl">
                    <div className="grid grid-cols-3 gap-4">
                      {[...Array(9)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ 
                            opacity: [0.3, 1, 0.3],
                            scale: [0.9, 1, 0.9]
                          }}
                          transition={{ 
                            duration: 2,
                            delay: i * 0.1,
                            repeat: Infinity
                          }}
                          className="w-20 h-20 bg-white/20 backdrop-blur rounded-xl"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl"
                >
                  <Sparkles className="w-12 h-12 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    x: [0, 100, 0],
                    y: [0, -100, 0]
                  }}
                  transition={{ 
                    duration: 10 + i * 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute w-96 h-96 border-4 border-white rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl font-bold text-white mb-6"
              >
                Ready to Transform Your Business?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
              >
                Join thousands of companies already leveraging our cloud infrastructure
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-white text-blue-700 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
              >
                Get Started Today
                <ChevronRight className="inline ml-2" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Cloud className="w-10 h-10 text-blue-400" />
            <span className="text-2xl font-bold">GoleCloud</span>
          </motion.div>
          <p className="text-slate-400 mb-4">© 2025 GoleCloud Solutions. All rights reserved.</p>
          <p className="text-sm text-slate-500">Building the future of cloud infrastructure</p>
        </div>
      </footer>
      
    </div>
  );
}
