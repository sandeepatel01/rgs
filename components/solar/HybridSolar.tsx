"use client";

import { motion } from "framer-motion";
import { Zap, Battery, Plug, Shield, Sun, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import SectionHeader from "../shared/SectionHeader";

const HybridSolar = () => {
  const features = [
    {
      icon: Zap,
      title: "Best of Both Worlds",
      description: "Combined benefits of on-grid and off-grid systems",
    },
    {
      icon: Shield,
      title: "Uninterrupted Power",
      description: "Backup power during grid failures and outages",
    },
    {
      icon: Battery,
      title: "Smart Battery Storage",
      description: "Store excess energy for use during peak hours or outages",
    },
    {
      icon: Plug,
      title: "Grid Connectivity",
      description: "Stay connected and benefit from net metering",
    },
    {
      icon: Sun,
      title: "Maximum Efficiency",
      description: "Optimize energy usage with intelligent power management",
    },
    {
      icon: TrendingUp,
      title: "Higher Savings",
      description: "Reduce demand charges and save more on electricity",
    },
  ];

  const comparison = [
    {
      feature: "Grid Connection",
      offGrid: "❌ Not Connected",
      onGrid: "✅ Connected",
      hybrid: "✅ Connected",
    },
    {
      feature: "Battery Backup",
      offGrid: "✅ Required",
      onGrid: "❌ No Backup",
      hybrid: "✅ Available",
    },
    {
      feature: "Power During Outages",
      offGrid: "✅ Yes",
      onGrid: "❌ No",
      hybrid: "✅ Yes",
    },
    {
      feature: "Net Metering",
      offGrid: "❌ Not Available",
      onGrid: "✅ Available",
      hybrid: "✅ Available",
    },
    {
      feature: "Initial Cost",
      offGrid: "High",
      onGrid: "Low",
      hybrid: "Medium",
    },
    {
      feature: "Best For",
      offGrid: "Remote Areas",
      onGrid: "Reliable Grid",
      hybrid: "All Locations",
    },
  ];

  const workingModes = [
    {
      title: "Normal Mode",
      description:
        "Solar powers your home during the day. Excess energy charges batteries or goes to the grid. Grid supplies power at night.",
      icon: Sun,
    },
    {
      title: "Backup Mode",
      description:
        "During grid failure, batteries automatically supply power to essential loads, ensuring uninterrupted operation.",
      icon: Battery,
    },
    {
      title: "Smart Mode",
      description:
        "Intelligent system optimizes power usage based on solar generation, battery status, and grid availability.",
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 md:py-32 bg-linear-to-br from-[#3c83f6]/10 via-background to-[#fbbd23]/10 overflow-hidden">
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
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#3c83f6]/20 flex items-center justify-center"
            >
              <Zap className="w-10 h-10 text-[#3c83f6]" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-linear-to-r from-[#3c83f6] via-[#fbbd23] to-primary bg-clip-text text-transparent">
              Hybrid Solar Systems
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The ultimate solar solution combining grid connectivity with
              battery backup. Never compromise between savings and reliability.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="shadow-glow">
                <Link href="/contact">Explore Hybrid Solutions</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get Custom Quote</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="What is Hybrid Solar?"
            description="The perfect balance of independence and connectivity"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-12"
          >
            <Card className="border-[#3c83f6]/20">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-6">
                  Hybrid solar systems combine the best features of both on-grid
                  and off-grid systems. They&apos;re connected to the utility
                  grid while also having battery storage for backup power. This
                  intelligent setup ensures you have continuous power supply
                  even during grid failures.
                </p>
                <p className="text-lg leading-relaxed">
                  During normal operation, solar panels power your home, charge
                  batteries, and export excess to the grid. When the grid fails,
                  the system automatically switches to battery power, keeping
                  your essential appliances running. It&apos;s the smartest
                  investment for areas with unreliable grid supply.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-br from-[#3c83f6]/5 to-[#fbbd23]/5">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Key Features & Benefits"
            description="Why hybrid solar systems are the ultimate choice"
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
                <Card className="h-full hover:shadow-glow transition-all duration-300 border-[#3c83f6]/10">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-lg bg-[#3c83f6]/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-7 h-7 text-[#3c83f6]" />
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
            title="How Hybrid Systems Work"
            description="Three intelligent modes for optimal performance"
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
            {workingModes.map((mode, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full border-[#fbbd23]/20 hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-linear-to-br from-[#3c83f6] to-[#fbbd23] flex items-center justify-center">
                      <mode.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{mode.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {mode.description}
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
            title="System Comparison"
            description="See how hybrid solar stacks up against other options"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto overflow-x-auto mt-12"
          >
            <Card className="border-[#3c83f6]/20">
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="p-4 text-left font-semibold">Feature</th>
                      <th className="p-4 text-center font-semibold">
                        Off-Grid
                      </th>
                      <th className="p-4 text-center font-semibold">On-Grid</th>
                      <th className="p-4 text-center font-semibold bg-[#3c83f6]/10">
                        Hybrid
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, index) => (
                      <tr
                        key={index}
                        className="border-b border-border last:border-0"
                      >
                        <td className="p-4 font-medium">{row.feature}</td>
                        <td className="p-4 text-center text-muted-foreground">
                          {row.offGrid}
                        </td>
                        <td className="p-4 text-center text-muted-foreground">
                          {row.onGrid}
                        </td>
                        <td className="p-4 text-center bg-[#3c83f6]/5 font-semibold text-[#3c83f6]">
                          {row.hybrid}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Ideal For"
            description="Who should choose hybrid solar systems?"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12">
            {[
              {
                title: "Homes",
                description: "Residential properties with frequent power cuts",
              },
              {
                title: "Businesses",
                description:
                  "Commercial establishments requiring uninterrupted power",
              },
              {
                title: "Hospitals",
                description: "Critical facilities needing 24/7 power backup",
              },
              {
                title: "Factories",
                description: "Industrial units with high power demands",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center border-[#fbbd23]/20 hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#fbbd23]">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-r from-[#3c83f6] via-[#fbbd23] to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Get the Best of Both Worlds
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience uninterrupted power with grid connectivity. Let us design
            a hybrid system perfect for your needs.
          </p>
          <Button asChild size="lg" className="shadow-glow">
            <Link href="/contact">Request Hybrid Solar Consultation</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default HybridSolar;
