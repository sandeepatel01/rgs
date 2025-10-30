"use client";

import { motion } from "framer-motion";
import {
  Sun,
  Leaf,
  DollarSign,
  TrendingDown,
  Shield,
  Zap,
  Globe,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "./shared/SectionHeader";
import Link from "next/link";

const WhyChooseSolar = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Massive Savings",
      description:
        "Reduce electricity bills by 70-90% and achieve complete energy independence",
      stats: "Save ₹50,000-₹2,00,000 annually",
    },
    {
      icon: Leaf,
      title: "Environmental Impact",
      description:
        "Zero carbon emissions, reduce your carbon footprint significantly",
      stats: "Offset 1-4 tons of CO2 per year",
    },
    {
      icon: TrendingDown,
      title: "Quick ROI",
      description:
        "Recover your investment in 3-5 years, then enjoy free electricity",
      stats: "3-5 year payback period",
    },
    {
      icon: Shield,
      title: "Energy Independence",
      description: "Protect against rising electricity costs and power outages",
      stats: "25+ years of reliability",
    },
    {
      icon: Award,
      title: "Government Incentives",
      description:
        "Benefit from subsidies, tax benefits, and net metering policies",
      stats: "Up to 40% subsidy available",
    },
    {
      icon: Zap,
      title: "Low Maintenance",
      description:
        "Minimal maintenance required with long-lasting solar panels",
      stats: "25-30 year lifespan",
    },
  ];

  const solarVsDiesel = [
    {
      aspect: "Fuel Cost",
      solar: "₹0 (Sunlight is free)",
      diesel: "₹90-100 per liter",
      winner: "solar",
    },
    {
      aspect: "Operating Cost",
      solar: "Minimal maintenance",
      diesel: "High recurring costs",
      winner: "solar",
    },
    {
      aspect: "Environmental Impact",
      solar: "Zero emissions",
      diesel: "High pollution & CO2",
      winner: "solar",
    },
    {
      aspect: "Noise Level",
      solar: "Silent operation",
      diesel: "Loud & disruptive",
      winner: "solar",
    },
    {
      aspect: "Maintenance",
      solar: "Very low",
      diesel: "High & frequent",
      winner: "solar",
    },
    {
      aspect: "Lifespan",
      solar: "25-30 years",
      diesel: "10-15 years",
      winner: "solar",
    },
    {
      aspect: "Reliability",
      solar: "Consistent daily",
      diesel: "Fuel dependent",
      winner: "solar",
    },
    {
      aspect: "Initial Investment",
      solar: "Higher upfront",
      diesel: "Lower upfront",
      winner: "diesel",
    },
  ];

  const environmentalImpact = [
    {
      icon: Globe,
      title: "Reduce Carbon Footprint",
      value: "2-4 tons",
      description:
        "CO2 emissions reduced per year with a typical residential system",
    },
    {
      icon: Leaf,
      title: "Equivalent Trees Planted",
      value: "40-100",
      description: "Number of trees worth of carbon offset annually",
    },
    {
      icon: Sun,
      title: "Clean Energy Generated",
      value: "5,000+ kWh",
      description: "Annual renewable energy production from a 3kW system",
    },
  ];

  const financialBenefits = [
    "Reduce monthly electricity bills by 70-90%",
    "Government subsidies up to ₹78,000 for residential",
    "Tax benefits and accelerated depreciation for commercial",
    "Increase property value by 3-4%",
    "Net metering credits for excess power",
    "Protection from rising electricity tariffs",
    "Low-interest green energy loans available",
    "Corporate tax benefits for CSR activities",
  ];

  return (
    <div className="min-h-screen">
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
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#fbbd23]/20 flex items-center justify-center"
            >
              <Sun className="w-10 h-10 text-[#fbbd23]" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-linear-to-r from-[#fbbd23] via-[#3c83f6] to-primary bg-clip-text text-transparent">
              Why Choose Solar Energy?
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover the powerful benefits of switching to solar energy. Save
              money, protect the environment, and achieve energy independence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="shadow-glow">
                <Link href="/contact">Get Solar Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Calculate Savings</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Top Reasons to Go Solar"
            subtitle="Powerful benefits that make solar the smart choice"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-glow transition-all duration-300 border-[#fbbd23]/10">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-lg bg-[#fbbd23]/10 flex items-center justify-center mb-4">
                      <benefit.icon className="w-7 h-7 text-[#fbbd23]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {benefit.description}
                    </p>
                    <div className="px-3 py-2 rounded-lg bg-linear-to-r from-[#fbbd23]/10 to-primary/10">
                      <p className="text-sm font-semibold text-[#fbbd23]">
                        {benefit.stats}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-br from-primary/5 to-[#fbbd23]/5">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Solar vs Diesel Generator"
            subtitle="See why solar is the clear winner"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto overflow-x-auto"
          >
            <Card className="border-[#fbbd23]/20">
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="p-4 text-left font-semibold">Aspect</th>
                      <th className="p-4 text-center font-semibold bg-[#fbbd23]/10">
                        Solar Power
                      </th>
                      <th className="p-4 text-center font-semibold">
                        Diesel Generator
                      </th>
                      <th className="p-4 text-center font-semibold">Winner</th>
                    </tr>
                  </thead>
                  <tbody>
                    {solarVsDiesel.map((row, index) => (
                      <tr
                        key={index}
                        className="border-b border-border last:border-0"
                      >
                        <td className="p-4 font-medium">{row.aspect}</td>
                        <td
                          className={`p-4 text-center ${
                            row.winner === "solar"
                              ? "bg-[#fbbd23]/5 font-semibold text-[#fbbd23]"
                              : "text-muted-foreground"
                          }`}
                        >
                          {row.solar}
                        </td>
                        <td
                          className={`p-4 text-center ${
                            row.winner === "diesel"
                              ? "bg-secondary/5 font-semibold text-[#3c83f6]"
                              : "text-muted-foreground"
                          }`}
                        >
                          {row.diesel}
                        </td>
                        <td className="p-4 text-center">
                          {row.winner === "solar" ? (
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#fbbd23]/20">
                              ☀️
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted">
                              ⚙️
                            </span>
                          )}
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
            title="Environmental Impact"
            subtitle="Make a real difference for our planet"
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {environmentalImpact.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center border-[#fbbd23]/20 hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-linear-to-br from-[#fbbd23] to-[#3c83f6] flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-[#fbbd23] mb-2">
                      {item.value}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-primary/20 bg-linear-to-br from-[#fbbd23]/5 to-[#3c83f6]/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-center">
                  Join the Clean Energy Revolution
                </h3>
                <p className="text-lg text-center text-muted-foreground">
                  Every solar installation contributes to a cleaner, healthier
                  planet. By choosing solar, you&apos;re not just saving
                  money—you&apos;re actively fighting climate change and
                  preserving the environment for future generations.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-br from-[#3c83f6]/5 to-primary/5">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Financial Benefits"
            subtitle="Solar energy is a smart financial investment"
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {financialBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-background hover:shadow-glow transition-all duration-300"
                >
                  <div className="w-6 h-6 rounded-full bg-[#fbbd23]/20 flex items-center justify-center shrink-0 mt-1">
                    <DollarSign className="w-4 h-4 text-[#fbbd23]" />
                  </div>
                  <p className="text-foreground">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Card className="border-primary/20 bg-linear-to-br from-primary/5 to-[#fbbd23]/5">
              <CardContent className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Calculate Your Savings
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Find out exactly how much you can save with solar energy. Get
                  a personalized analysis based on your electricity consumption
                  and location.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="p-4 rounded-lg bg-background">
                    <div className="text-3xl font-bold text-[#fbbd23] mb-2">
                      70-90%
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Bill Reduction
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-background">
                    <div className="text-3xl font-bold text-[#fbbd23] mb-2">
                      3-5 years
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Payback Period
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-background">
                    <div className="text-3xl font-bold text-[#fbbd23] mb-2">
                      25+ years
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Free Electricity
                    </p>
                  </div>
                </div>
                <Button asChild size="lg" className="shadow-glow">
                  <Link href="/contact">Get Your Custom Savings Report</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-r from-[#fbbd23] via-[#3c83f6] to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Ready to Switch to Solar?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made the smart
            choice. Start saving money and the planet today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="shadow-glow">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default WhyChooseSolar;
