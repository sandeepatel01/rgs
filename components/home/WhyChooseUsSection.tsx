"use client";

import { motion } from "framer-motion";
import { Shield, TrendingUp, Users } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import solarFarm from "@/public/assets/solar-farm.jpg";
import commercialBuilding from "@/public/assets/commercial-building.jpg";
import maintenance from "@/public/assets/maintenance.jpg";
import Image from "next/image";

export default function WhyChooseUsSection() {
  const whyChooseUs = [
    {
      icon: Shield,
      title: "15+ Years Experience",
      description: "Trusted since 2005",
    },
    {
      icon: Users,
      title: "5000+ Happy Clients",
      description: "Pan-India presence",
    },
    {
      icon: TrendingUp,
      title: "Best ROI",
      description: "Quick payback period",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={solarFarm}
                  alt="Solar Farm"
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-xl overflow-hidden shadow-lg mt-8"
              >
                <Image
                  src={commercialBuilding}
                  alt="Commercial Building"
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="rounded-xl overflow-hidden shadow-lg col-span-2"
              >
                <Image
                  src={maintenance}
                  alt="Maintenance Service"
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            </div>
            <motion.div
              className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader
              subtitle="Why Choose RG Solars"
              title="Your Trusted Energy Partner"
              description="Experience, expertise, and excellence in every project"
              centered={false}
            />
            <div className="space-y-6 mt-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
