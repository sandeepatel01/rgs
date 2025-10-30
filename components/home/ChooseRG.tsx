"use client";

import { motion } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";
import { Award, Shield, TrendingDown, Leaf } from "lucide-react";

const ChooseRG = () => {
  const whyChooseUs = [
    {
      icon: Award,
      title: "19+ Years Experience",
      description: "Serving India since 2005",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Premium components & workmanship",
    },
    {
      icon: TrendingDown,
      title: "Cost Savings",
      description: "Reduce electricity bills by up to 90%",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Clean, renewable energy solutions",
    },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Why Choose RG Solars?"
          description="Your trusted partner for clean energy solutions"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseRG;
