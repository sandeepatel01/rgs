"use client";

import { motion } from "framer-motion";
import {
  ShoppingCart,
  DollarSign,
  RefreshCw,
  Award,
  Shield,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import SectionHeader from "../shared/SectionHeader";

const SellPurchase = () => {
  const buyFeatures = [
    {
      icon: Award,
      title: "Certified Generators",
      description: "All DG sets are quality checked and certified",
    },
    {
      icon: Shield,
      title: "Warranty Included",
      description: "Comprehensive warranty on all units",
    },
    {
      icon: TrendingUp,
      title: "Best Prices",
      description: "Competitive pricing on new and used units",
    },
  ];

  const sellFeatures = [
    {
      icon: DollarSign,
      title: "Fair Valuation",
      description: "Get the best market price for your DG set",
    },
    {
      icon: RefreshCw,
      title: "Quick Process",
      description: "Fast and hassle-free selling experience",
    },
    {
      icon: ShoppingCart,
      title: "Instant Payment",
      description: "Immediate payment upon agreement",
    },
  ];

  const brands = ["Cummins", "Sudhir"];

  const dgTypes = [
    {
      title: "New DG Sets",
      features: [
        "Latest models with advanced features",
        "Full manufacturer warranty",
        "Energy efficient technology",
        "Silent operation options",
      ],
      // priceRange: "₹80,000 - ₹50,00,000+",
    },
    {
      title: "Used DG Sets",
      features: [
        "Thoroughly inspected and tested",
        "Refurbished components",
        "Extended warranty options",
        "30-70% cost savings",
      ],
      // priceRange: "₹25,000 - ₹20,00,000+",
    },
    {
      title: "Refurbished DG Sets",
      features: [
        "Completely overhauled units",
        "New critical components",
        "Performance guarantee",
        "Like-new condition",
      ],
      // priceRange: "₹40,000 - ₹30,00,000+",
    },
  ];

  const sellingProcess = [
    {
      step: "1",
      title: "Contact Us",
      description:
        "Reach out with details of your DG set - make, model, capacity, and year",
    },
    {
      step: "2",
      title: "Inspection",
      description: "Our experts inspect the unit and assess its condition",
    },
    {
      step: "3",
      title: "Quotation",
      description: "Receive a fair market price quote based on evaluation",
    },
    {
      step: "4",
      title: "Deal Closure",
      description: "Accept the offer and receive instant payment",
    },
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
              <ShoppingCart className="w-10 h-10 text-[#fbbd23]" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-linear-to-r from-[#fbbd23] via-primary to-[#3c83f6] bg-clip-text text-transparent">
              DG Set - Buy & Sell
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your trusted marketplace for new and used diesel generators. Buy
              quality DG sets at best prices or sell your existing units for
              fair value.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="shadow-glow">
                <Link href="/contact">Buy DG Set</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Sell Your DG</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Buy DG Sets"
            description="Wide range of new and used generators from top brands"
          />
          <div className="grid md:grid-cols-3 gap-6 mb-12 mt-12">
            {buyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-glow transition-all duration-300 border-[#fbbd23]/10">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto rounded-lg bg-[#fbbd23]/10 flex items-center justify-center mb-4">
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

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {dgTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-primary/20 hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-primary">
                      {type.title}
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {type.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#fbbd23] mt-2 shrink-0"></div>
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {/* <Button asChild className="w-full">
                      <Link href="/contact">View Available Units</Link>
                    </Button> */}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-br from-[#3c83f6]/5 to-[#fbbd23]/5">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Notable Clients"
            description="Trusted by leading organizations across India"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-12"
          >
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {brands.map((brand, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="p-4 rounded-lg bg-linear-to-br from-primary/5 to-[#fbbd23]/5 text-center font-semibold hover:shadow-glow transition-all duration-300"
                    >
                      {brand}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Sell Your DG Set"
            description="Get the best price for your used diesel generator"
          />
          <div className="grid md:grid-cols-3 gap-6 mb-12 mt-12">
            {sellFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-glow transition-all duration-300 border-[#3c83f6]/10">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto rounded-lg bg-[#3c83f6]/10 flex items-center justify-center mb-4">
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

          <SectionHeader
            title="How to Sell"
            description="Simple 4-step process to sell your DG set"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12">
            {sellingProcess.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full border-[#fbbd23]/20">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-linear-to-br from-[#3c83f6] to-[#fbbd23] flex items-center justify-center text-white text-2xl font-bold shadow-glow">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
                {index < sellingProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-linear-to-r from-[#3c83f6] to-[#fbbd23]"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-br from-primary/5 to-[#3c83f6]/5">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="What We Buy"
            description="We purchase all types and conditions of diesel generators"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12">
            {[
              {
                title: "Working DG Sets",
                description: "Fully functional generators in good condition",
              },
              {
                title: "Old Generators",
                description: "Outdated models and vintage units",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center border-primary/20 hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-primary">
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

      <section className="py-20 bg-linear-to-r from-[#fbbd23] via-primary to-[#3c83f6] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Ready to Buy or Sell?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for the best deals on diesel generators or to get a
            quote for your used DG set.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="shadow-glow bg-[#3c83f6] hover:bg-[#3c83f6]/90"
            >
              <Link href="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default SellPurchase;
