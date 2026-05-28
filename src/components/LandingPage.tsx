import { useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  BarChart3,
  Calendar,
  FileText,
  Lock,
  Sparkles,
  Users,
  ArrowRight,
  Menu,
  X,
  Check,
  Star,
  ChevronDown,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignIn = () => {
    navigate({ to: "/login" });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-br from-blue-950/20 via-black to-teal-950/20" />
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="h-8 w-8 bg-linear-to-br from-blue-400 to-teal-400 rounded-lg flex items-center justify-center">
                <Activity className="h-5 w-5 text-black font-bold" />
              </div>
              <span className="text-xl font-bold bg-linear-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Pulse
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-gray-300 hover:text-white transition">
                Features
              </a>
              <a href="#pricing" className="text-sm text-gray-300 hover:text-white transition">
                Pricing
              </a>
              <a href="#faq" className="text-sm text-gray-300 hover:text-white transition">
                FAQ
              </a>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10"
                onClick={handleSignIn}
              >
                Sign In
              </Button>
              <Button
                onClick={handleSignIn}
                className="bg-linear-to-r from-blue-500 to-teal-500 text-white hover:shadow-lg hover:shadow-blue-500/50"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden pb-4 border-t border-white/10"
              >
                <div className="flex flex-col gap-4 pt-4">
                  <a href="#features" className="text-sm text-gray-300">
                    Features
                  </a>
                  <a href="#pricing" className="text-sm text-gray-300">
                    Pricing
                  </a>
                  <a href="#faq" className="text-sm text-gray-300">
                    FAQ
                  </a>
                  <Button
                    variant="ghost"
                    className="text-white hover:bg-white/10 justify-start"
                    onClick={handleSignIn}
                  >
                    Sign In
                  </Button>
                  <Button
                    onClick={handleSignIn}
                    className="bg-linear-to-r from-blue-500 to-teal-500 text-white"
                  >
                    Get Started
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-white/5 border border-white/20 rounded-full text-sm">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-teal-400">
                  ✨ Introducing Pulse 3.0
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                AI for{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-teal-400">
                  clinicians
                </span>
              </h1>

              <p className="text-xl text-gray-400">
                Healthcare operations, beautifully unified. The all-in-one workspace for modern clinics.
                Manage patients, appointments, prescriptions and revenue — all from one elegant dashboard
                your team will love.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleSignIn}
                  size="lg"
                  className="bg-linear-to-r from-blue-500 to-teal-500 text-white hover:shadow-lg hover:shadow-blue-500/50 h-12 text-base"
                >
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5 h-12 text-base"
                >
                  Watch Demo
                </Button>
              </div>

              <p className="text-sm text-gray-500">
                Free 14-day trial · No credit card required · HIPAA compliant
              </p>
            </div>
          </motion.div>

          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-white/20 bg-linear-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl overflow-hidden group">
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="relative z-10 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <h3 className="font-semibold">Dashboard</h3>
                  <div className="flex gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <div className="h-2 w-2 rounded-full bg-gray-600" />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition">
                    <p className="text-xs text-gray-400 mb-1">Total Patients</p>
                    <p className="text-2xl font-bold">12,847</p>
                    <p className="text-xs text-green-400 mt-2">+12.4% this month</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition">
                    <p className="text-xs text-gray-400 mb-1">Appointments</p>
                    <p className="text-2xl font-bold">284</p>
                    <p className="text-xs text-green-400 mt-2">+8.2% this month</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition">
                    <p className="text-xs text-gray-400 mb-1">Revenue</p>
                    <p className="text-2xl font-bold">$48.2K</p>
                    <p className="text-xs text-green-400 mt-2">+24.1% this month</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition">
                    <p className="text-xs text-gray-400 mb-1">Active Doctors</p>
                    <p className="text-2xl font-bold">32</p>
                    <p className="text-xs text-green-400 mt-2">+2 new</p>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 h-40 flex items-end gap-2">
                  {[40, 60, 45, 75, 55, 70, 65].map((height, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-linear-to-t from-blue-500 to-teal-400 rounded-t opacity-70 hover:opacity-100 transition"
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: i * 0.1, duration: 0.8 }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-10 -right-10 h-40 w-40 bg-blue-500/20 rounded-full blur-3xl"
              animate={{
                y: [0, 20, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-10 -left-10 h-40 w-40 bg-teal-500/20 rounded-full blur-3xl"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gray-400 text-sm mb-2">TRUSTED BY LEADING HEALTHCARE PROVIDERS</p>
            <h2 className="text-3xl font-bold">Trusted by 2,400+ clinics worldwide</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {["Mercy Health", "BlueCross", "MedCore", "Vitalink", "CarePlus", "Helix"].map(
              (company, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-center p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition group cursor-pointer"
                >
                  <span className="text-sm font-medium text-gray-400 group-hover:text-gray-200 transition">
                    {company}
                  </span>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-blue-400 text-sm font-semibold mb-2">EVERYTHING YOU NEED</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">One platform. Every workflow.</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Replace 7 tools with one. Pulse brings together everything your practice runs on.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Patient CRM",
                desc: "Complete patient records and history in one place",
              },
              {
                icon: Calendar,
                title: "Smart Scheduling",
                desc: "Drag-and-drop appointment management",
              },
              {
                icon: FileText,
                title: "E-Prescriptions",
                desc: "Digital prescriptions with pharmacy integration",
              },
              {
                icon: BarChart3,
                title: "Real-time Analytics",
                desc: "Revenue tracking and performance insights",
              },
              {
                icon: Lock,
                title: "HIPAA Compliant",
                desc: "Enterprise-grade security and compliance",
              },
              {
                icon: Sparkles,
                title: "AI Copilot",
                desc: "AI-powered summaries and insights",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-6 rounded-xl border border-white/10 bg-linear-to-br from-white/5 to-white/0 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 to-teal-500/0 group-hover:from-blue-500/10 group-hover:to-teal-500/10 transition-all" />
                <div className="relative z-10">
                  <feature.icon className="h-8 w-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Clinics Worldwide", value: "2,400+" },
              { label: "Patient Records", value: "18M+" },
              { label: "Uptime SLA", value: "99%" },
              { label: "Avg. Time Saved", value: "42%" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-teal-400">
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-blue-400 text-sm font-semibold mb-2">LOVED BY CLINICIANS</p>
            <h2 className="text-4xl font-bold">What teams say about Pulse</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Pulse cut our admin time in half. The team actually enjoys using it — which says everything.",
                author: "Dr. Sarah Chen",
                title: "Director, Bayview Clinic",
              },
              {
                quote:
                  "It feels like the software was built by people who've spent a day in a clinic. Every detail just makes sense.",
                author: "Dr. Marcus Adams",
                title: "Family Practice, Austin",
              },
              {
                quote: "The AI summaries alone are worth it. I finish notes before the patient has left the room.",
                author: "Dr. Priya Park",
                title: "Pediatrics Lead",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition backdrop-blur"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-semibold text-sm">{testimonial.author}</p>
                <p className="text-gray-400 text-xs">{testimonial.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-blue-400 text-sm font-semibold mb-2">SIMPLE PRICING</p>
            <h2 className="text-4xl font-bold mb-4">Plans that scale with your practice</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter",
                price: "$49",
                features: [
                  "Up to 500 patients",
                  "Appointments & scheduling",
                  "E-prescriptions",
                  "Email support",
                ],
                popular: false,
              },
              {
                name: "Growth",
                price: "$149",
                features: [
                  "Unlimited patients",
                  "Up to 15 doctors",
                  "Analytics suite",
                  "AI summaries",
                  "Priority support",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: [
                  "Unlimited everything",
                  "SSO & SCIM",
                  "Dedicated CSM",
                  "Custom integrations",
                  "On-prem option",
                ],
                popular: false,
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative p-8 rounded-xl border transition-all duration-300 ${
                  plan.popular
                    ? "border-blue-500 bg-linear-to-br from-blue-500/20 to-teal-500/10 ring-1 ring-blue-500/50"
                    : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-linear-to-r from-blue-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-4xl font-bold mb-1">
                  {plan.price}
                  {plan.price !== "Custom" && <span className="text-lg text-gray-400">/mo</span>}
                </p>
                <p className="text-gray-400 text-sm mb-6">Billed annually</p>

                <Button
                  onClick={handleSignIn}
                  className={`w-full mb-6 ${
                    plan.popular
                      ? "bg-linear-to-r from-blue-500 to-teal-500 text-white hover:shadow-lg hover:shadow-blue-500/50"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Get Started
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <Check className="h-4 w-4 text-green-400 shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "Is Pulse HIPAA compliant?",
                a: "Yes, Pulse is fully HIPAA compliant with enterprise-grade encryption and security measures.",
              },
              {
                q: "How long does setup take?",
                a: "Most clinics are up and running within 48 hours with our onboarding team's assistance.",
              },
              {
                q: "Can I import data from other EHRs?",
                a: "Yes, we support data import from most major EHR systems with our migration specialists.",
              },
              {
                q: "Do you offer onboarding support?",
                a: "Absolutely. All plans include onboarding support, and premium plans get dedicated account managers.",
              },
              {
                q: "What about mobile access?",
                a: "Pulse is fully mobile-responsive and includes native iOS and Android apps for on-the-go access.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-6 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <p className="font-semibold flex items-center gap-2">
                    <Zap className="h-5 w-5 text-blue-400 shrink-0" />
                    {item.q}
                  </p>
                  <ChevronDown className="h-5 w-5 text-gray-400 group-hover:text-gray-200 transition transform group-hover:rotate-180" />
                </div>
                <p className="mt-2 text-gray-400 text-sm ml-7">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-12 rounded-2xl border border-white/20 bg-linear-to-br from-blue-500/10 via-black to-teal-500/10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to modernize your clinic?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join thousands of clinicians using Pulse every day.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleSignIn}
                  size="lg"
                  className="bg-linear-to-r from-blue-500 to-teal-500 text-white hover:shadow-lg hover:shadow-blue-500/50 h-12 text-base px-8"
                >
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5 h-12 text-base px-8"
                >
                  Book Demo
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-black/50 py-12 px-4 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 bg-linear-to-br from-blue-400 to-teal-400 rounded-lg flex items-center justify-center">
                  <Activity className="h-5 w-5 text-black" />
                </div>
                <span className="font-bold text-lg">Pulse</span>
              </div>
              <p className="text-sm text-gray-400">AI-powered clinic management platform.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Security
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    HIPAA
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>© 2026 Pulse Health, Inc. All rights reserved.</p>
              <p>Made with care for clinicians everywhere.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
