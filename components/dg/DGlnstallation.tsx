"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Shield,
  Clock,
  CheckCircle,
  FileCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import SectionHeader from "../shared/SectionHeader";

const DGInstallation = () => {
  const features = [
    {
      icon: Wrench,
      title: "Professional Installation",
      description:
        "Expert technicians with years of experience in DG installation",
    },
    {
      icon: Shield,
      title: "Safety Compliance",
      description: "All installations meet safety standards and regulations",
    },
    {
      icon: Clock,
      title: "Quick Deployment",
      description: "Fast installation with minimal downtime",
    },
    {
      icon: CheckCircle,
      title: "Quality Equipment",
      description: "Only top-brand diesel generators and components",
    },
    {
      icon: FileCheck,
      title: "Complete Documentation",
      description: "All necessary permits and certifications handled",
    },
    {
      icon: Users,
      title: "Training Provided",
      description: "Operator training and operation manuals included",
    },
  ];

  const steps = [
    {
      title: "Site Assessment",
      description:
        "Our engineers visit your location to assess power requirements, space availability, and environmental factors.",
    },
    {
      title: "System Design",
      description:
        "Custom DG system design based on your load requirements, including capacity planning and backup duration.",
    },
    {
      title: "Approval & Permits",
      description:
        "We handle all regulatory approvals, pollution control board clearances, and necessary permits.",
    },
    {
      title: "Installation",
      description:
        "Professional installation of DG set, control panels, ATS/AMF systems, and fuel management systems.",
    },
    {
      title: "Testing & Commissioning",
      description:
        "Comprehensive load testing, synchronization testing, and system optimization before handover.",
    },
    {
      title: "Training & Handover",
      description:
        "Operator training, documentation handover, and demonstration of all safety features.",
    },
  ];

  const capacities = [
    { range: "5-25 KVA", ideal: "Small offices, shops, clinics" },
    { range: "30-100 KVA", ideal: "Medium businesses, restaurants" },
    { range: "125-500 KVA", ideal: "Large commercial buildings" },
    { range: "500+ KVA", ideal: "Industrial facilities, hospitals" },
  ];

  const compliance = [
    "Pollution Control Board (PCB) clearance",
    "Fire safety compliance",
    "Electrical safety inspections",
    "Noise level regulations",
    "Fuel storage guidelines",
    "Environmental impact assessment",
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 md:py-32 bg-linear-to-br from-primary/10 via-background to-[#3c83f6]/10 overflow-hidden">
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
              <Wrench className="w-10 h-10 text-primary" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-linear-to-r from-primary via-[#fbbd23] to-[#3c83f6] bg-clip-text text-transparent">
              DG Installation Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Professional diesel generator installation with complete turnkey
              solutions. From site assessment to commissioning, we handle
              everything.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="shadow-glow">
                <Link href="/contact">Request Site Survey</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get Installation Quote</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Installation Services"
            description="End-to-end solutions for your backup power needs"
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

      <section className="py-20 bg-linear-to-br from-[#3c83f6]/5 to-primary/5">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Installation Process"
            description="Our systematic approach to DG installation"
          />
          <div className="max-w-4xl mx-auto space-y-6 mt-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-primary/20 hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-[#fbbd23] flex items-center justify-center text-white font-bold text-xl shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
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
            title="DG Set Capacities"
            description="We install generators of all sizes"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12">
            {capacities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center border-[#fbbd23]/20 hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-3">
                      {item.range}
                    </div>
                    <p className="text-muted-foreground">{item.ideal}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-br from-[#fbbd23]/5 to-primary/5">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Complete Installation Package"
            description="Everything included in our installation service"
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12">
            {[
              {
                title: "Main Equipment",
                items: [
                  "Diesel Generator Set",
                  "Control Panel",
                  "Circuit Breakers",
                  "Battery Charger",
                  "Fuel Tank",
                  "Exhaust System",
                ],
              },
              {
                title: "Automation Systems",
                items: [
                  "Automatic Transfer Switch (ATS)",
                  "Auto Mains Failure (AMF) Panel",
                  "Remote Monitoring System",
                  "Load Management System",
                  "Synchronization Panel (if required)",
                  "Fuel Level Sensors",
                ],
              },
              {
                title: "Safety Features",
                items: [
                  "Emergency Shut-off System",
                  "Fire Suppression System",
                  "Earthing & Lightning Protection",
                  "Safety Signages",
                  "Acoustic Enclosure",
                  "Vibration Isolation Pads",
                ],
              },
              {
                title: "Accessories",
                items: [
                  "Fuel Piping & Filters",
                  "Coolant System",
                  "Battery & Cables",
                  "Exhaust Silencer",
                  "Foundation Bolts",
                  "Weather Protection Canopy",
                ],
              },
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-[#3c83f6]/20">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-[#3c83f6]">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#3c83f6] mt-2 shrink-0"></div>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
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
            title="Regulatory Compliance"
            description="We handle all approvals and certifications"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-12"
          >
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {compliance.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-primary/5"
                    >
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
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
            Ready to Install Your DG Set?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get professional installation with complete turnkey solutions.
            Contact us for a free site survey.
          </p>
          <Button asChild size="lg" variant="secondary" className="shadow-glow">
            <Link href="/contact">Schedule Site Assessment</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default DGInstallation;
