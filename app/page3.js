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
  Network,
  Menu,
  X,
  ChevronDown,
  Infinity,
  Atom,
  Brain,
  Code2
} from 'lucide-react';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeService, setActiveService] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef);

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);
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
      icon: <Cloud className="w-16 h-16" />,
      title: "Quantum Cloud Infrastructure",
      subtitle: "Next-Gen Architecture",
      description: "Revolutionary cloud infrastructure powered by quantum computing principles, delivering unprecedented performance and scalability.",
      features: ["Quantum-Speed Processing", "Infinite Scalability", "Zero-Latency Global Network", "AI-Powered Optimization"],
      metrics: { performance: "1000x", uptime: "99.999%", efficiency: "90%" },
      color: "from-blue-500 via-cyan-500 to-teal-500",
      pattern: "quantum"
    },
    {
      icon: <Brain className="w-16 h-16" />,
      title: "AI-Driven Analytics Engine",
      subtitle: "Intelligence Amplified",
      description: "Harness the power of advanced AI to transform raw data into strategic insights with real-time processing capabilities.",
      features: ["Neural Network Processing", "Predictive Intelligence", "Real-time Insights", "Automated Decision Making"],
      metrics: { accuracy: "99.8%", processing: "50TB/s", insights: "Real-time" },
      color: "from-purple-500 via-pink-500 to-rose-500",
      pattern: "neural"
    },
    {
      icon: <Shield className="w-16 h-16" />,
      title: "Fortress Security Protocol",
      subtitle: "Impenetrable Defense",
      description: "Military-grade security architecture with quantum encryption and AI-powered threat detection systems.",
      features: ["Quantum Encryption", "AI Threat Detection", "Zero-Trust Architecture", "Biometric Authentication"],
      metrics: { protection: "100%", response: "<1ms", compliance: "All Standards" },
      color: "from-emerald-500 via-green-500 to-lime-500",
      pattern: "fortress"
    },
    {
      icon: <Rocket className="w-16 h-16" />,
      title: "HyperSpeed DevOps Platform",
      subtitle: "Development Accelerated",
      description: "Revolutionary DevOps platform that accelerates development cycles with AI-assisted coding and deployment.",
      features: ["AI Code Generation", "Instant Deployment", "Smart Testing", "Performance Optimization"],
      metrics: { speed: "100x", deployment: "Instant", efficiency: "95%" },
      color: "from-orange-500 via-amber-500 to-yellow-500",
      pattern: "velocity"
    }
  ];

  const stats = [
    { 
      value: "∞", 
      label: "Scalability Potential", 
      icon: <Infinity className="w-8 h-8" />, 
      color: "from-blue-500 to-cyan-500",
      description: "Unlimited scaling capability"
    },
    { 
      value: "99.999%", 
      label: "Uptime Guarantee", 
      icon: <Activity className="w-8 h-8" />, 
      color: "from-green-500 to-emerald-500",
      description: "Enterprise-grade reliability"
    },
    { 
      value: "200+", 
      label: "Global Presence", 
      icon: <Globe className="w-8 h-8" />, 
      color: "from-purple-500 to-pink-500",
      description: "Worldwide infrastructure"
    },
    { 
      value: "<1ms", 
      label: "Response Time", 
      icon: <Zap className="w-8 h-8" />, 
      color: "from-yellow-500 to-orange-500",
      description: "Lightning-fast performance"
    }
  ];

  // Enhanced Loading Screen
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center relative overflow-hidden">
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{ 
                y: [null, -100],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 3,
                delay: Math.random() * 2,
                repeat: Infinity
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center z-10"
        >
          {/* Enhanced Logo Animation */}
          <motion.div
            className="mb-12 relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 10 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <motion.div
                className="w-40 h-40 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-2xl"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0.7)",
                    "0 0 0 40px rgba(59, 130, 246, 0)",
                    "0 0 0 0 rgba(59, 130, 246, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Cloud className="w-20 h-20 text-white" />
              </motion.div>
              
              {/* Orbiting Elements */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-6 h-6 bg-white rounded-full"
                  style={{
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px"
                  }}
                  animate={{
                    rotate: 360,
                    scale: [1, 1.5, 1]
                  }}
                  transition={{
                    rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, delay: i * 0.3 }
                  }}
                  transformOrigin="12px 80px"
                />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.h1 
              className="text-7xl font-bold mb-6"
              style={{
                background: "linear-gradient(45deg, #60a5fa, #34d399, #fbbf24, #f87171)",
                backgroundSize: "400% 400%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              WELCOME TO
            </motion.h1>

            <motion.h2 
              className="text-8xl font-bold text-white mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring", damping: 15 }}
            >
              GOLE CLOUD
            </motion.h2>

            <motion.p
              className="text-2xl text-blue-200 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              Revolutionary Cloud Solutions Proposal
            </motion.p>

            <motion.div
              className="text-blue-300 text-lg"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Preparing to showcase the future of enterprise infrastructure...
            </motion.div>
          </motion.div>

          {/* Loading Progress */}
          <motion.div
            className="w-96 h-1 bg-blue-900 rounded-full mx-auto mt-12 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-blue-400 to-cyan-400"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 2 }}
            />
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Enhanced Cursor Follower */}
      <motion.div
        className="fixed w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full pointer-events-none z-50 mix-blend-multiply opacity-70"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Background Elements */}
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

      {/* Modern Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-40 bg-white/95 backdrop-blur-xl border-b border-blue-100/50 shadow-lg"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Cloud className="w-10 h-10 text-blue-600" />
                </motion.div>
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  GOLE CLOUD
                </span>
                <div className="text-xs text-blue-500 font-medium">Next-Gen Solutions</div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {[
                { label: 'Solutions', href: '#services' },
                { label: 'Performance', href: '#stats' },
                { label: 'Enterprise', href: '#testimonials' },
                { label: 'Contact', href: '#cta' }
              ].map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ y: -2, color: '#2563eb' }}
                  className="text-slate-700 hover:text-blue-600 font-medium transition-all duration-300 relative group"
                >
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-blue-600 w-0 group-hover:w-full transition-all duration-300"
                  />
                </motion.a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Download className="w-4 h-4" />
                Get Proposal
              </motion.button>

              {/* Mobile Menu Toggle */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-slate-700"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 pb-4 border-t border-blue-100"
              >
                <div className="flex flex-col gap-4 pt-4">
                  {[
                    { label: 'Solutions', href: '#services' },
                    { label: 'Performance', href: '#stats' },
                    { label: 'Enterprise', href: '#testimonials' },
                    { label: 'Contact', href: '#cta' }
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-slate-700 hover:text-blue-600 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                  <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold shadow-lg w-fit">
                    <Download className="w-4 h-4" />
                    Get Proposal
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Revolutionary Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ opacity, scale, y }}
        className="min-h-screen flex items-center justify-center px-6 pt-24 relative overflow-hidden"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center relative z-10"
          >
            {/* Quantum Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", damping: 15 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 border border-blue-200 rounded-full mb-12 backdrop-blur-sm"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Atom className="w-6 h-6 text-blue-600" />
              </motion.div>
              <span className="text-blue-800 font-bold text-lg">Quantum-Powered Infrastructure</span>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-6 h-6 text-amber-500" />
              </motion.div>
            </motion.div>

            {/* Revolutionary Headline */}
            <motion.div className="mb-12">
              <motion.h1 
                className="text-8xl md:text-9xl font-black mb-6 leading-none"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <motion.span 
                  className="block"
                  style={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
                    backgroundSize: "400% 400%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                >
                  FUTURE
                </motion.span>
                <motion.span 
                  className="block text-slate-900"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, type: "spring", damping: 20 }}
                >
                  CLOUD
                </motion.span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, type: "spring", damping: 15 }}
                className="relative inline-block"
              >
                <h2 className="text-3xl md:text-4xl text-blue-600 font-bold mb-8">
                  Where Innovation Meets Infrastructure
                </h2>
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-2xl md:text-3xl text-slate-600 mb-16 max-w-5xl mx-auto leading-relaxed"
            >
              Experience the next evolution of cloud computing with 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-bold"> quantum-powered infrastructure</span>, 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold"> AI-driven analytics</span>, and 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 font-bold"> fortress-level security</span>.
            </motion.p>

            {/* Modern CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-6 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white rounded-2xl font-bold text-xl shadow-2xl overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative flex items-center gap-3">
                  <Rocket className="w-6 h-6" />
                  Launch Infrastructure
                  <motion.div
                    className="group-hover:translate-x-2 transition-transform"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-white/90 backdrop-blur-sm border-2 border-blue-200 text-blue-700 rounded-2xl font-bold text-xl shadow-xl hover:bg-blue-50 hover:border-blue-400 transition-all flex items-center gap-3"
              >
                <Play className="w-6 h-6" />
                Experience Demo
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-2xl font-bold text-xl shadow-xl flex items-center gap-3"
              >
                <Calendar className="w-6 h-6" />
                Book Consultation
              </motion.button>
            </motion.div>

            {/* Keep the impressive bouncing tech cards as requested */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="grid grid-cols-2 md:grid-cols-6 gap-6 max-w-6xl mx-auto"
            >
              {[
                { icon: Cpu, label: "AI Processing", metric: "Quantum Speed", color: "from-blue-500 to-cyan-500" },
                { icon: Database, label: "Data Centers", metric: "200+ Global", color: "from-purple-500 to-pink-500" },
                { icon: Server, label: "Uptime", metric: "99.999%", color: "from-green-500 to-emerald-500" },
                { icon: Shield, label: "Security", metric: "Quantum Safe", color: "from-red-500 to-orange-500" },
                { icon: Network, label: "Latency", metric: "<1ms Global", color: "from-amber-500 to-yellow-500" },
                { icon: Layers, label: "Scale", metric: "Infinite", color: "from-indigo-500 to-purple-500" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  animate={{ 
                    y: [0, -20, 0],
                    rotateY: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    delay: index * 0.3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  whileHover={{ 
                    scale: 1.15, 
                    rotateY: 15,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
                  }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-blue-100 hover:border-blue-300 transition-all relative overflow-hidden">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                    />
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all relative z-10`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="font-bold text-slate-800 mb-1 relative z-10">{item.label}</h3>
                    <p className="text-sm text-blue-600 font-semibold relative z-10">{item.metric}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Floating Elements */}
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-32 right-20 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full backdrop-blur-sm hidden lg:block"
        />
        <motion.div
          animate={{ 
            x: [0, -50, 0],
            y: [0, 50, 0],
            rotate: [360, 180, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-32 left-20 w-32 h-32 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full backdrop-blur-sm hidden lg:block"
        />
      </motion.section>

      {/* Enhanced Stats Section with Smoother Animations */}
      <section id="stats" className="py-32 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Smooth Background Animation */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 40% 40%, rgba(119, 198, 255, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="w-full h-full"
          />
        </div>
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", damping: 15, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-lg rounded-full mb-8"
            >
              <TrendingUp className="w-6 h-6 text-emerald-400" />
              <span className="text-white font-bold text-lg">Performance Metrics</span>
            </motion.div>
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-6">
              <motion.span
                style={{
                  background: "linear-gradient(135deg, #60a5fa 0%, #34d399 50%, #fbbf24 100%)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Excellence in Numbers
              </motion.span>
            </h2>
            <p className="text-2xl text-blue-200 max-w-3xl mx-auto">
              Industry-leading performance that speaks louder than words
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: index * 0.15,
                  duration: 0.8,
                  type: "spring",
                  damping: 15
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -15,
                  transition: { duration: 0.3 }
                }}
                className="text-center group"
              >
                <motion.div
                  className={`w-28 h-28 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:shadow-3xl transition-all relative overflow-hidden`}
                  whileHover={{ 
                    rotate: [0, 10, -10, 0],
                    transition: { duration: 0.6 }
                  }}
                >
                  {/* Glowing effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-3xl"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="text-white relative z-10">{stat.icon}</div>
                </motion.div>
                
                <motion.div 
                  className="text-5xl md:text-6xl font-black text-white mb-3"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    damping: 12,
                    delay: index * 0.15 + 0.4 
                  }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                
                <div className="text-blue-200 text-lg font-bold mb-2">{stat.label}</div>
                <div className="text-blue-300 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-6 border border-white/20">
              <div className="flex items-center gap-3">
                <motion.div 
                  className="w-4 h-4 bg-emerald-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-white font-bold text-lg">All Systems Operational</span>
              </div>
              <div className="w-px h-8 bg-white/30" />
              <div className="text-blue-200">
                Last incident: <span className="text-white font-bold">1,247 days ago</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Revolutionary Services Section */}
      <section id="services" className="py-32 px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", damping: 15 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mb-8 border border-blue-200"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Atom className="w-6 h-6 text-blue-600" />
              </motion.div>
              <span className="text-blue-800 font-bold text-lg">Next-Generation Solutions</span>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star className="w-6 h-6 text-amber-500" />
              </motion.div>
            </motion.div>

            <motion.h2 
              className="text-7xl md:text-8xl font-black mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
                  backgroundSize: "400% 400%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                REVOLUTIONARY
              </motion.span>
              <br />
              <span className="text-slate-900">SOLUTIONS</span>
            </motion.h2>
            
            <p className="text-2xl md:text-3xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Experience the future of cloud computing with our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-bold"> quantum-powered infrastructure</span>
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15,
                  transition: { duration: 0.4 }
                }}
                onClick={() => setActiveService(index)}
                className={`group relative p-10 rounded-3xl cursor-pointer transition-all duration-700 overflow-hidden ${
                  activeService === index 
                    ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white shadow-2xl scale-105' 
                    : 'bg-white border-2 border-blue-100 hover:border-blue-300 shadow-xl hover:shadow-2xl'
                }`}
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  {activeService === index && (
                    <motion.div
                      initial={{ scale: 0, rotate: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute top-0 right-0 w-96 h-96 border-4 border-white rounded-full -translate-y-48 translate-x-48"
                    />
                  )}
                  {activeService !== index && (
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full -translate-y-32 translate-x-32" />
                  )}
                </div>

                <div className="relative z-10">
                  {/* Service Icon */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360
                    }}
                    transition={{ duration: 0.8 }}
                    className={`w-24 h-24 rounded-3xl flex items-center justify-center mb-8 relative overflow-hidden ${
                      activeService === index 
                        ? 'bg-white/20 backdrop-blur-lg' 
                        : `bg-gradient-to-br ${service.color}`
                    }`}
                  >
                    <motion.div
                      className="absolute inset-0"
                      animate={activeService === index ? {
                        background: [
                          "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 100%)",
                          "linear-gradient(45deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%)"
                        ]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className={activeService === index ? 'text-white' : 'text-white'}>
                      {service.icon}
                    </div>
                  </motion.div>

                  {/* Service Content */}
                  <div className="mb-6">
                    <div className={`text-sm font-bold mb-2 ${
                      activeService === index ? 'text-blue-300' : 'text-blue-600'
                    }`}>
                      {service.subtitle}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black mb-4">{service.title}</h3>
                    <p className={`text-lg leading-relaxed ${
                      activeService === index ? 'text-blue-100' : 'text-slate-600'
                    }`}>
                      {service.description}
                    </p>
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(service.metrics).map(([key, value], mIndex) => (
                      <motion.div 
                        key={key}
                        className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: mIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className={`text-2xl md:text-3xl font-black mb-1 ${
                          activeService === index ? 'text-white' : 'text-blue-600'
                        }`}>
                          {value}
                        </div>
                        <div className={`text-sm capitalize font-medium ${
                          activeService === index ? 'text-blue-200' : 'text-slate-500'
                        }`}>
                          {key}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Features List */}
                  <AnimatePresence>
                    {activeService === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                      >
                        {service.features.map((feature, fIndex) => (
                          <motion.div
                            key={fIndex}
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: fIndex * 0.1 }}
                            className="flex items-center gap-4 p-3 rounded-xl bg-white/10 backdrop-blur-sm"
                          >
                            <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                            <span className="text-blue-100 font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Hover effect for non-active cards */}
                  {activeService !== index && (
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                    >
                      <div className="mt-6 text-blue-600 font-semibold">
                        Click to explore features →
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section with Better Mobile View */}
      <section id="cta" className="py-20 md:py-32 px-4 md:px-6">
        <motion.div
          initial={{ acity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            {/* Enhanced Background Animation */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    x: [0, 100, 0],
                    y: [0, -100, 0],
                    rotate: [0, 360],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{ 
                    duration: 15 + i * 3,
                    repeat: Infinity,
                    delay: i * 0.8
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
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", damping: 15 }}
                viewport={{ once: true }}
                className="w-24 h-24 md:w-32 md:h-32 bg-white/20 backdrop-blur rounded-3xl flex items-center justify-center mx-auto mb-8"
              >
                <Briefcase className="w-12 h-12 md:w-16 md:h-16 text-white" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
              >
                Ready to Transform Your Infrastructure?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed"
              >
                Join 500+ enterprise clients who trust Gole Cloud for their mission-critical operations
              </motion.p>

              {/* Mobile-Optimized Button Layout */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-white text-blue-700 rounded-xl md:rounded-2xl font-bold text-lg md:text-xl shadow-2xl hover:shadow-3xl transition-all flex items-center justify-center gap-3"
                >
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                  Request Full Proposal
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-emerald-500 text-white rounded-xl md:rounded-2xl font-bold text-lg md:text-xl shadow-2xl hover:shadow-3xl transition-all flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="hidden sm:inline">Call: </span>+1 (555) 123-CLOUD
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 text-blue-200 text-sm md:text-base"
              >
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 md:w-5 md:h-5" />
                  <span>24/7 Enterprise Support</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Quantum-Safe Security</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Guaranteed ROI</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Keep Footer as Requested */}
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
            <p className="text-slate-400">© 2024 Gole Cloud Solutions. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-slate-400">All systems operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
