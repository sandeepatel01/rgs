"use client";

import { motion } from "framer-motion";
import { Target, Eye, Award, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "@/components/shared/SectionHeader";

const About = () => {
  const milestones = [
    {
      year: "2005",
      title: "Company Founded",
      description: "Started with a vision to power India sustainably",
    },
    {
      year: "2010",
      title: "1000+ Installations",
      description: "Reached our first major milestone",
    },
    {
      year: "2015",
      title: "Pan-India Expansion",
      description: "Extended services across all major cities",
    },
    {
      year: "2020",
      title: "ISO Certified",
      description: "Achieved international quality standards",
    },
    {
      year: "2025",
      title: "5000+ Happy Clients",
      description: "Serving diverse residential and commercial needs",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Quality First",
      description:
        "We never compromise on the quality of products and services",
    },
    {
      icon: Users,
      title: "Customer Centric",
      description: "Your satisfaction is our priority in every project",
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Embracing latest technology for better energy solutions",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Clear communication and honest pricing always",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 bg-linear-to-br from-primary/10 to-[#3c83f6]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About RG Solars
            </h1>
            <p className="text-xl text-muted-foreground">
              Leading the renewable energy revolution in India since 2005
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              subtitle="Our Story"
              title="Building a Sustainable Future"
              centered={false}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-8 space-y-6 text-lg text-muted-foreground"
            >
              <p>
                Founded in 2005, RG Solars began with a simple yet powerful
                vision: to make clean, reliable energy accessible to every
                Indian household and business. What started as a small team of
                passionate engineers has grown into one of India&apos;s most
                trusted renewable energy companies.
              </p>
              <p>
                Over the years, we&apos;ve installed thousands of solar systems
                and DG solutions across the country, helping our clients reduce
                their carbon footprint while saving significantly on energy
                costs. Our commitment to quality, innovation, and customer
                satisfaction has earned us the trust of over 5,000 satisfied
                customers.
              </p>
              <p>
                Today, we stand at the forefront of India&apos;s renewable
                energy movement, continuously innovating and expanding our
                services to meet the evolving needs of our customers. Our team
                of certified professionals brings decades of combined experience
                in solar technology, power generation, and sustainable energy
                solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-2 border-primary/20">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="text-lg text-muted-foreground">
                  To be India&apos;s most trusted and innovative renewable
                  energy company, leading the transformation towards a
                  sustainable energy future for all. We envision a world where
                  clean energy is not just accessible but the preferred choice
                  for every home and business.
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-2 border-[#3c83f6]/20">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-[#3c83f6]/10 flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-[#3c83f6]" />
                  </div>
                  <CardTitle className="text-3xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="text-lg text-muted-foreground">
                  To deliver high-quality, cost-effective renewable energy
                  solutions that empower our customers to reduce their carbon
                  footprint and energy costs. We strive to make every
                  installation a testament to excellence, reliability, and
                  sustainability.
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Values"
            title="What Drives Us"
            description="The principles that guide every decision we make"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[#fbbd23]/10 flex items-center justify-center mb-4">
                  <value.icon className="w-8 h-8 text-[#fbbd23]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Journey"
            title="Milestones & Achievements"
            description="Key moments in our growth story"
          />
          <div className="max-w-4xl mx-auto mt-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative pl-8 pb-12 border-l-2 border-primary last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary border-4 border-background" />
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <span className="text-[#fbbd23] font-bold text-2xl">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-1">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
