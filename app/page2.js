'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
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
  Award,
  Eye,
  TrendingUp,
  Rocket,
  Star,
  Play,
  Download,
  FileText,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Clock,
  Target,
  Briefcase,
  Building2,
  Settings,
  MonitorSpeaker,
  Network
} from 'lucide-react';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeService, setActiveService] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef);

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Enterprise Cloud Infrastructure",
      description: "Scalable, secure, and reliable cloud infrastructure that grows with your business",
      features: ["99.99% SLA Guarantee", "Global CDN Network", "Auto-scaling Capabilities", "24/7 Expert Support"],
      metrics: { uptime: "99.99%", speed: "15ms", savings: "65%" }
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Advanced Data Analytics",
      description: "Transform your data into actionable insights with our AI-powered analytics platform",
      features: ["Real-time Processing", "Machine Learning", "Custom Dashboards", "Predictive Analytics"],
      metrics: { processing: "10TB/hr", accuracy: "99.7%", insights: "500+" }
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Cybersecurity Suite",
      description: "Military-grade security protocols protecting your digital assets 24/7",
      features: ["Zero-trust Architecture", "AI Threat Detection", "Compliance Ready", "Incident Response"],
      metrics: { threats: "99.9%", compliance: "100%", response: "2min" }
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "DevOps Acceleration",
      description: "Streamline your development lifecycle with automated CI/CD pipelines",
      features: ["Container Orchestration", "Automated Testing", "Blue-Green Deployment", "Performance Monitoring"],
      metrics: { deployment: "85%", bugs: "92%", speed: "10x" }
    }
  ];

  const stats = [
    { value: "500+", label: "Enterprise Clients", icon: <Building2 className="w-8 h-8" />, color: "from-blue-500 to-cyan-500" },
    { value: "99.99%", label: "Uptime SLA", icon: <Activity className="w-8 h-8" />, color: "from-green-500 to-emerald-500" },
    { value: "150+", label: "Global Data Centers", icon: <Globe className="w-8 h-8" />, color: "from-purple-500 to-pink-500" },
    { value: "15ms", label: "Average Response", icon: <Zap className="w-8 h-8" />, color: "from-yellow-500 to-orange-500" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechCorp Global",
      company: "Fortune 500 Technology Company",
      quote: "Gole Cloud transformed our infrastructure. 40% cost reduction and 99.99% uptime.",
      rating: 5,
      savings: "$2M annually"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Operations",
      company: "International Banking Consortium",
      quote: "Their security compliance and performance exceeded our highest expectations.",
      rating: 5,
      savings: "Zero breaches in 3 years"
    }
  ];

  // Loading Screen with Advanced Animation
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full gap-4 p-8">
            {[...Array(144)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: (i * 0.01),
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 2
                }}
                className="border border-blue-400 rounded"
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center z-10"
        >
          {/* Animated Logo */}
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mb-8 relative"
          >
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 0 0 rgba(59, 130, 246, 0.7)",
                  "0 0 0 40px rgba(59, 130, 246, 0)",
                  "0 0 0 0 rgba(59, 130, 246, 0)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl"
            >
              <Cloud className="w-16 h-16 text-white" />
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-6xl font-bold text-white mb-4"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              background: "linear-gradient(90deg, #fff, #3b82f6, #fff)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            GOLE CLOUD
          </motion.h1>

          <motion.p
            className="text-blue-200 text-xl mb-8"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Initializing Cloud Excellence...
          </motion.p>

          {/* Loading Progress */}
          <div className="w-64 h-2 bg-blue-900 rounded-full mx-auto overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-400 to-cyan-400"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </div>

          <motion.div
            className="flex gap-3 justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-4 h-4 bg-blue-400 rounded-full"
                animate={{ 
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{ 
                  duration: 1,
                  delay: i * 0.2,
                  repeat: Infinity
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Cursor Follower */}
      <motion.div
        className="fixed w-6 h-6 bg-blue-500 rounded-full pointer-events-none z-50 mix-blend-multiply"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -150, 0],
            y: [0, 150, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-[32rem] h-[32rem] bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"
        />
      </div>

      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-xl border-b border-blue-100 shadow-lg"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Cloud className="w-12 h-12 text-blue-600" />
              </motion.div>
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div>
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                GOLE CLOUD
              </span>
              <div className="text-xs text-blue-500 font-medium">Enterprise Solutions</div>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {['Solutions', 'Enterprise', 'Security', 'Support'].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ y: -2 }}
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              Sign In
            </motion.button>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Proposal
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ opacity, scale, y }}
        className="min-h-screen flex items-center justify-center px-6 pt-24 relative"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center relative z-10"
          >
            {/* Award Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full mb-8"
            >
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800 font-semibold">Award-Winning Cloud Infrastructure</span>
              <Sparkles className="w-5 h-5 text-yellow-500" />
            </motion.div>

            <motion.h1 
              className="text-7xl md:text-8xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.span 
                className="block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: "200% 100%" }}
              >
                CLOUD
              </motion.span>
              <motion.span 
                className="block text-slate-800"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                EXCELLENCE
              </motion.span>
              <motion.span 
                className="block text-2xl md:text-3xl text-blue-600 font-normal mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Beyond Infrastructure. Beyond Limits.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Transform your enterprise with next-generation cloud solutions. 
              <span className="text-blue-600 font-semibold"> Trusted by Fortune 500 companies worldwide.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-6 justify-center flex-wrap mb-16"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold text-xl shadow-2xl flex items-center gap-3 group hover:shadow-blue-500/25"
              >
                <Rocket className="w-6 h-6" />
                Deploy Infrastructure
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white border-2 border-blue-200 text-blue-700 rounded-2xl font-bold text-xl shadow-xl hover:bg-blue-50 hover:border-blue-300 transition-all flex items-center gap-3"
              >
                <Play className="w-6 h-6" />
                Watch Demo
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl font-bold text-xl shadow-xl flex items-center gap-3"
              >
                <Calendar className="w-6 h-6" />
                Schedule Consultation
              </motion.button>
            </motion.div>

            {/* Interactive Tech Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-6 gap-6 max-w-4xl mx-auto"
            >
              {[
                { icon: Cpu, label: "AI Processing", metric: "10x Faster" },
                { icon: Database, label: "Data Centers", metric: "150+ Global" },
                { icon: Server, label: "Servers", metric: "99.99% Uptime" },
                { icon: Shield, label: "Security", metric: "Zero Breaches" },
                { icon: Network, label: "CDN", metric: "15ms Latency" },
                { icon: Layers, label: "Containers", metric: "Auto-Scale" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  animate={{ 
                    y: [0, -15, 0],
                    rotateY: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    delay: index * 0.2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  className="group"
                >
                  <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-blue-100 hover:border-blue-300 transition-all">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="font-bold text-slate-800 mb-1">{item.label}</h3>
                    <p className="text-sm text-blue-600 font-semibold">{item.metric}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-32 right-20 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-3xl backdrop-blur-sm hidden lg:block"
        />
        <motion.div
          animate={{ 
            x: [0, -30, 0],
            y: [0, 30, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-2xl backdrop-blur-sm hidden lg:block"
        />
      </motion.section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/400')] bg-cover bg-center opacity-10" />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-blue-100">Numbers that speak louder than words</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="text-center group"
              >
                <motion.div
                  className={`w-24 h-24 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-3xl transition-all`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="text-white">{stat.icon}</div>
                </motion.div>
                <motion.div 
                  className="text-5xl md:text-6xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-blue-100 text-lg font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white font-semibold">All Systems Operational</span>
              </div>
              <div className="w-px h-6 bg-white/30" />
              <div className="text-blue-100">Last incident: <span className="text-white font-semibold">847 days ago</span></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", damping: 15 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-100 rounded-full mb-6"
            >
              <Target className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800 font-semibold">Enterprise Solutions</span>
            </motion.div>
            <h2 className="text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Powerful Cloud Solutions
              </span>
            </h2>
            <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive cloud infrastructure designed for enterprise-scale operations
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.2)"
                }}
                onClick={() => setActiveService(index)}
                className={`p-8 rounded-3xl cursor-pointer transition-all duration-500 relative overflow-hidden ${
                  activeService === index 
                    ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl scale-105' 
                    : 'bg-white border-2 border-blue-100 hover:border-blue-300 shadow-lg'
                }`}
              >
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-6 ${
                      activeService === index 
                        ? 'bg-white/20 backdrop-blur' 
                        : 'bg-gradient-to-br from-blue-50 to-blue-100'
                    }`}
                  >
                    <div className={activeService === index ? 'text-white' : 'text-blue-600'}>
                      {service.icon}
                    </div>
                  </motion.div>

                  <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                  <p className={`text-lg mb-6 ${activeService === index ? 'text-blue-100' : 'text-slate-600'}`}>
                    {service.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(service.metrics).map(([key, value], mIndex) => (
                      <div key={key} className="text-center">
                        <div className={`text-2xl font-bold ${activeService === index ? 'text-white' : 'text-blue-600'}`}>
                          {value}
                        </div>
                        <div className={`text-sm capitalize ${activeService === index ? 'text-blue-200' : 'text-slate-500'}`}>
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  <AnimatePresence>
                    {activeService === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-3"
                      >
                        {service.features.map((feature, fIndex) => (
                          <motion.div
                            key={fIndex}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: fIndex * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                            <span className="text-blue-100">{feature}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Background Pattern */}
                {activeService === index && (
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Client Success Stories
              </span>
            </h2>
            <p className="text-xl text-slate-600">Real results from real enterprises</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500" />
                
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl text-slate-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-800">{testimonial.name}</div>
                    <div className="text-blue-600 font-medium">{testimonial.role}</div>
                    <div className="text-slate-500 text-sm">{testimonial.company}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{testimonial.savings}</div>
                    <div className="text-sm text-slate-500">Annual Impact</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-16 text-center relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    x: [0, 100, 0],
                    y: [0, -100, 0],
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 15 + i * 2,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                  className="absolute w-32 h-32 border-4 border-white rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", damping: 15 }}
                viewport={{ once: true }}
                className="w-32 h-32 bg-white/20 backdrop-blur rounded-3xl flex items-center justify-center mx-auto mb-8"
              >
                <Briefcase className="w-16 h-16 text-white" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-6xl font-bold text-white mb-6"
              >
                Ready to Transform Your Infrastructure?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto"
              >
                Join 500+ enterprise clients who trust Gole Cloud for their mission-critical operations
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="flex gap-6 justify-center flex-wrap"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 bg-white text-blue-700 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all flex items-center gap-3"
                >
                  <Mail className="w-6 h-6" />
                  Request Proposal
                  <ChevronRight className="w-6 h-6" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 bg-green-500 text-white rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all flex items-center gap-3"
                >
                  <Phone className="w-6 h-6" />
                  Call: +1 (555) 123-CLOUD
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-12 flex justify-center gap-8 flex-wrap text-blue-200"
              >
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>Guaranteed ROI</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-slate-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Cloud className="w-12 h-12 text-blue-400" />
                <div>
                  <span className="text-2xl font-bold">GOLE CLOUD</span>
                  <div className="text-blue-400 text-sm">Enterprise Solutions</div>
                </div>
              </div>
              <p className="text-slate-400 mb-6">
                Leading enterprise cloud infrastructure provider, trusted by Fortune 500 companies worldwide.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
              </div>
            </motion.div>

            <div>
              <h3 className="text-xl font-bold mb-6">Solutions</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="hover:text-white transition-colors cursor-pointer">Cloud Infrastructure</li>
                <li className="hover:text-white transition-colors cursor-pointer">Data Analytics</li>
                <li className="hover:text-white transition-colors cursor-pointer">Cybersecurity</li>
                <li className="hover:text-white transition-colors cursor-pointer">DevOps Platform</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Enterprise</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="hover:text-white transition-colors cursor-pointer">Compliance</li>
                <li className="hover:text-white transition-colors cursor-pointer">Security</li>
                <li className="hover:text-white transition-colors cursor-pointer">Support</li>
                <li className="hover:text-white transition-colors cursor-pointer">Training</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Contact</h3>
              <div className="space-y-3 text-slate-400">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Silicon Valley, CA</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+1 (555) 123-CLOUD</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>enterprise@golecloud.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex justify-between items-center">
            <p className="text-slate-400">© 2025 Gole Cloud Solutions. All rights reserved.</p>
            <div className="flex tems-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-slate-400">All systems operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
