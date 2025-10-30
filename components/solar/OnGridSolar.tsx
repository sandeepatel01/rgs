"use client";

import { motion } from "framer-motion";
import { Plug, DollarSign, Leaf, TrendingUp, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import SectionHeader from "../shared/SectionHeader";

const OnGridSolar = () => {
  const features = [
    {
      icon: Plug,
      title: "Grid Connected",
      description:
        "Seamlessly connected to the utility grid for maximum efficiency",
    },
    {
      icon: DollarSign,
      title: "Net Metering",
      description: "Sell excess power back to the grid and reduce your bills",
    },
    {
      icon: TrendingUp,
      title: "Maximum ROI",
      description: "Fastest payback period with minimal investment",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Reduce your carbon footprint while saving money",
    },
    {
      icon: Award,
      title: "Government Incentives",
      description: "Benefit from subsidies and tax benefits",
    },
    {
      icon: Clock,
      title: "Low Maintenance",
      description: "No battery replacement costs or complex maintenance",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Solar Panels Generate Power",
      description:
        "During daytime, solar panels convert sunlight into DC electricity",
    },
    {
      step: "2",
      title: "Inverter Converts Power",
      description:
        "The inverter converts DC to AC power for your home appliances",
    },
    {
      step: "3",
      title: "Power Your Home",
      description: "Solar power is consumed by your household appliances first",
    },
    {
      step: "4",
      title: "Export Excess Power",
      description:
        "Surplus electricity is fed back to the grid through net metering",
    },
  ];

  const savings = [
    { label: "Reduce electricity bills by", value: "70-90%" },
    { label: "Average ROI period", value: "3-5 years" },
    { label: "System lifespan", value: "25+ years" },
    { label: "Government subsidy up to", value: "₹78,000" },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 md:py-32 bg-linear-to-br from-[#fbbd23]/10 via-background to-primary/10 overflow-hidden">
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
              <Plug className="w-10 h-10 text-[#fbbd23]" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-linear-to-r from-[#fbbd23] via-primary to-[#3c83f6] bg-clip-text text-transparent">
              On-Grid Solar Systems
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The most cost-effective solar solution. Stay connected to the grid
              while dramatically reducing your electricity bills with net
              metering benefits.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="shadow-glow">
                <Link href="/contact">Calculate Your Savings</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="What is On-Grid Solar?"
            description="The smart way to save on electricity while staying connected to the grid"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-12"
          >
            <Card className="border-accent/20">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-6">
                  On-grid solar systems, also known as grid-tied systems, are
                  connected directly to your local utility grid. They generate
                  electricity during the day and feed any excess power back to
                  the grid, earning you credits through net metering.
                </p>
                <p className="text-lg leading-relaxed">
                  This is the most popular and cost-effective solar solution for
                  homes and businesses with reliable grid connectivity. No
                  batteries needed, which means lower initial investment and
                  minimal maintenance costs.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-br from-[#fbbd23]/5 to-primary/5">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Key Features & Benefits"
            description="Why on-grid solar is the most popular choice"
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
                <Card className="h-full hover:shadow-glow transition-all duration-300 border-[#fbbd23]/10">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-lg bg-[#fbbd23]/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-7 h-7 text-[#fbbd23]" />
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
            title="How It Works"
            description="Simple and efficient energy generation"
          />
          <div className="max-w-5xl mx-auto mt-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <Card className="h-full border-primary/20">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-linear-to-br from-[#fbbd23] to-primary flex items-center justify-center text-white text-2xl font-bold shadow-lime-500">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-semibold mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-linear-to-r from-[#fbbd23] to-primary"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-br from-primary/5 to-[#fbbd23]/5">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Potential Savings & ROI"
            description="Real numbers that matter"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
            {savings.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center border-[#fbbd23]/20 hover:shadow-amber-200 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-[#fbbd23] mb-2">
                      {item.value}
                    </div>
                    <p className="text-muted-foreground">{item.label}</p>
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
            title="Net Metering Benefits"
            description="Turn your electricity meter backwards and earn credits"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-12"
          >
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-primary">
                      What is Net Metering?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Net metering is a billing mechanism that credits solar
                      energy system owners for the electricity they add to the
                      grid. When your solar panels produce more electricity than
                      you consume, the excess is fed to the grid, and you
                      receive credits on your electricity bill.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 pt-4">
                    <div className="p-4 rounded-lg bg-[#fbbd23]/5">
                      <h4 className="font-semibold mb-2 text-[#fbbd23]">
                        During Day
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Generate solar power → Use what you need → Export excess
                        to grid
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-primary/5">
                      <h4 className="font-semibold mb-2 text-primary">
                        During Night
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Use grid power → Credits offset your consumption costs
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
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
            Start Saving on Electricity Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a customized on-grid solar system designed for maximum savings
            and ROI.
          </p>
          <Button asChild size="lg" className="shadow-glow">
            <Link href="/contact">Get Free Solar Assessment</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default OnGridSolar;
