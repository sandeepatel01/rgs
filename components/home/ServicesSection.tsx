"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import solarInstallation from "@/public/assets/solar-installation.jpg";
import dgSystem from "@/public/assets/dg-system.jpg";
import { Sun, CheckCircle2, ArrowRight, Zap, Wrench } from "lucide-react";
import { Button } from "../ui/button";
import SectionHeader from "../shared/SectionHeader";
import ServiceCard from "../shared/ServiceCard";
import Link from "next/link";

const services = [
  {
    icon: Sun,
    title: "Solar Panel Installation",
    description: "Complete solar energy solutions for homes and businesses",
    features: [
      "Residential & Commercial Systems",
      "High-Efficiency Panels",
      "Net Metering Setup",
      "25-Year Warranty",
    ],
  },
  {
    icon: Zap,
    title: "DG Power Solutions",
    description: "Reliable diesel generator installation and maintenance",
    features: [
      "Generator Installation",
      "AMC & Maintenance",
      "Rental Services",
      "24/7 Emergency Support",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Comprehensive maintenance services for optimal performance",
    features: [
      "Preventive Maintenance",
      "Performance Monitoring",
      "Quick Repairs",
      "System Upgrades",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Our Services"
          title="Comprehensive Energy Solutions"
          description="From solar installations to DG maintenance, we provide end-to-end energy solutions"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative h-[400px] overflow-hidden">
              <Image
                src={solarInstallation}
                alt="Solar Installation Services"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Sun className="w-6 h-6 text-[#fbbd23]" />
                <span className="   text-[#fbbd23] font-semibold">
                  Solar Energy
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-3">
                Solar Panel Installation
              </h3>
              <p className="text-white/90 mb-4">
                High-efficiency solar systems for residential, commercial, and
                industrial applications
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "25-Year Warranty",
                  "Up to 80% Bill Reduction",
                  "Net Metering Setup",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#fbbd23]" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="group-hover:translate-x-2 transition-transform bg-[#3c83f6] hover:bg-[#3c83f6]/90"
              >
                <Link href="/solar/off-grid">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative h-[400px] overflow-hidden">
              <Image
                src={dgSystem}
                alt="DG Solutions"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-6 h-6 text-[#fbbd23]" />
                <span className="text-[#fbbd23] font-semibold">
                  Power Solutions
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-3">DG Power Solutions</h3>
              <p className="text-white/90 mb-4">
                Reliable diesel generator installation, maintenance, and rental
                services
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "24/7 Emergency Support",
                  "AMC & Maintenance",
                  "Rental Services",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#fbbd23]" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="group-hover:translate-x-2 transition-transform bg-[#3c83f6] hover:bg-[#3c83f6]/90"
              >
                <Link href="/dg/installation">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
