"use client";

import { motion } from "framer-motion";
import { Battery, Zap, Home, Sun, Shield, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import SectionHeader from "../shared/SectionHeader";

const OffGridSolar = () => {
  const features = [
    {
      icon: Battery,
      title: "Energy Independence",
      description:
        "Complete freedom from grid dependency with battery backup systems",
    },
    {
      icon: Zap,
      title: "Reliable Power",
      description: "Uninterrupted power supply even in remote locations",
    },
    {
      icon: Home,
      title: "Perfect for Remote Areas",
      description: "Ideal solution for locations without grid connectivity",
    },
    {
      icon: Sun,
      title: "24/7 Power Supply",
      description: "Continuous power with advanced battery storage technology",
    },
    {
      icon: Shield,
      title: "Protection from Outages",
      description: "Never worry about power cuts or grid failures",
    },
    {
      icon: TrendingDown,
      title: "Lower Operating Cost",
      description: "Eliminate monthly electricity bills completely",
    },
  ];

  const benefits = [
    "Complete energy independence from the grid",
    "Zero electricity bills - produce your own power",
    "Perfect for remote locations and rural areas",
    "Backup power during grid failures",
    "Environmentally friendly clean energy",
    "Low maintenance and long-lasting systems",
    "Government subsidies and incentives available",
    "Scalable systems to meet growing power needs",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-linear-to-br from-[#fbbd23]/10 via-background to-[#3c83f6]/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center"
            >
              <Battery className="w-10 h-10 text-primary" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-linear-to-r from-primary via-[#fbbd23] to-[#3c83f6] bg-clip-text text-transparent">
              Off-Grid Solar Systems
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Complete energy independence with our advanced off-grid solar
              solutions. Perfect for remote locations and areas without reliable
              grid connectivity.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="shadow-glow">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Request Quote</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="What is Off-Grid Solar?"
            description="A complete solar power system that operates independently from the electrical grid"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-12"
          >
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-6">
                  Off-grid solar systems are standalone power systems that
                  generate and store electricity from solar panels without any
                  connection to the electrical grid. These systems include solar
                  panels, battery banks, charge controllers, and inverters to
                  provide complete energy independence.
                </p>
                <p className="text-lg leading-relaxed">
                  Perfect for remote locations, rural areas, vacation homes,
                  farms, and anywhere grid connectivity is unreliable or
                  unavailable. Our off-grid solutions ensure you have
                  continuous, reliable power 24/7.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-br from-[#3c83f6]/5 to-primary/5">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Key Features & Benefits"
            description="Why choose off-grid solar systems for your energy needs"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-glow transition-all duration-300 border-primary/10">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="System Components"
            description="Everything you need for complete energy independence"
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
            {[
              {
                title: "Solar Panels",
                description:
                  "High-efficiency photovoltaic panels that convert sunlight into electricity. Available in various capacities from 1kW to 100kW+.",
              },
              {
                title: "Battery Bank",
                description:
                  "Advanced lithium-ion or lead-acid batteries to store energy for nighttime and cloudy days. 24-48 hours backup capacity.",
              },
              {
                title: "Charge Controller",
                description:
                  "MPPT or PWM controllers that optimize battery charging and prevent overcharging, extending battery life.",
              },
              {
                title: "Inverter",
                description:
                  "Converts DC power from batteries to AC power for your appliances. Pure sine wave output for sensitive electronics.",
              },
            ].map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-[#fbbd23]/20 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-primary">
                      {component.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {component.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-br from-primary/5 to-[#3c83f6]/5">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Why Go Off-Grid?"
            description="The advantages of complete energy independence"
          />
          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-background/50 backdrop-blur"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-foreground">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-r from-primary via-[#fbbd23] to-[#3c83f6] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Ready to Go Off-Grid?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a customized off-grid solar solution designed for your specific
            needs and location.
          </p>
          <Button asChild size="lg" className="shadow-glow">
            <Link href="/contact">Get Your Free Quote Today</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default OffGridSolar;
