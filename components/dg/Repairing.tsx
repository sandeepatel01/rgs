"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Clock,
  Shield,
  CheckCircle,
  AlertCircle,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import SectionHeader from "../shared/SectionHeader";

const Repairing = () => {
  const services = [
    {
      icon: Wrench,
      title: "Complete Overhauling",
      description: "Full engine overhaul with replacement of worn-out parts",
    },
    {
      icon: Clock,
      title: "Preventive Maintenance",
      description: "Regular servicing to prevent breakdowns and extend life",
    },
    {
      icon: Shield,
      title: "Breakdown Repair",
      description: "Emergency repair services available 24/7",
    },
    {
      icon: AlertCircle,
      title: "Fault Diagnosis",
      description: "Advanced diagnostics to identify and fix issues",
    },
    {
      icon: CheckCircle,
      title: "Performance Testing",
      description: "Load testing and performance optimization",
    },
    {
      icon: Phone,
      title: "AMC Services",
      description: "Comprehensive Annual Maintenance Contracts",
    },
  ];

  const repairServices = [
    {
      category: "Engine Services",
      items: [
        "Engine oil and filter replacement",
        "Fuel system cleaning and repair",
        "Cooling system maintenance",
        "Turbocharger repair/replacement",
        "Piston and liner replacement",
        "Crankshaft and bearing inspection",
      ],
    },
    {
      category: "Electrical Services",
      items: [
        "Alternator repair and rewinding",
        "Battery replacement and testing",
        "Control panel repair",
        "Wiring and cable replacement",
        "AVR and regulator servicing",
        "Starter motor repair",
      ],
    },
    {
      category: "General Maintenance",
      items: [
        "Air filter cleaning/replacement",
        "Fuel filter replacement",
        "Radiator cleaning and repair",
        "Exhaust system inspection",
        "Vibration damper check",
        "General cleaning and painting",
      ],
    },
    {
      category: "Automation Services",
      items: [
        "ATS/AMF panel repair",
        "Controller programming",
        "Sensor calibration",
        "Remote monitoring setup",
        "Load bank testing",
        "Synchronization setup",
      ],
    },
  ];

  const amcPlans = [
    {
      name: "Basic AMC",
      visits: "Quarterly (4 visits/year)",
      features: [
        "Visual inspection",
        "Oil and filter change",
        "Basic cleaning",
        "Performance check",
        "Service report",
      ],
      ideal: "Low usage DG sets",
    },
    {
      name: "Standard AMC",
      visits: "Bi-monthly (6 visits/year)",
      features: [
        "All Basic AMC features",
        "Battery health check",
        "Coolant top-up",
        "Minor repairs included",
        "Priority support",
        "Load testing",
      ],
      ideal: "Medium usage DG sets",
    },
    {
      name: "Premium AMC",
      visits: "Monthly (12 visits/year)",
      features: [
        "All Standard AMC features",
        "24/7 breakdown support",
        "Free spare parts (upto ₹5000)",
        "Fuel quality testing",
        "Comprehensive report",
        "Onsite engineer visit",
      ],
      ideal: "High usage DG sets",
    },
  ];

  const commonIssues = [
    {
      issue: "DG Not Starting",
      causes: "Battery discharge, fuel issues, starter motor failure",
      solution: "Battery check, fuel system cleaning, starter repair",
    },
    {
      issue: "Overheating",
      causes: "Coolant leakage, radiator blockage, thermostat failure",
      solution: "Coolant refill, radiator cleaning, thermostat replacement",
    },
    {
      issue: "Low Power Output",
      causes: "Fuel filter clogging, air filter blockage, injector issues",
      solution: "Filter replacement, injector cleaning, fuel system service",
    },
    {
      issue: "Excessive Smoke",
      causes: "Incomplete combustion, oil leakage, piston wear",
      solution: "Engine tuning, oil leak repair, piston replacement",
    },
    {
      issue: "Unusual Noise",
      causes: "Loose components, bearing wear, engine problems",
      solution: "Component tightening, bearing replacement, engine inspection",
    },
    {
      issue: "Voltage Fluctuation",
      causes: "AVR failure, alternator issues, loose connections",
      solution: "AVR replacement, alternator servicing, connection check",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 md:py-32 bg-linear-to-br from-[#3c83f6]/10 via-background to-primary/10 overflow-hidden">
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
              <Wrench className="w-10 h-10 text-[#3c83f6]" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-linear-to-r from-[#3c83f6] via-[#fbbd23] to-primary bg-clip-text text-transparent">
              DG Repair & Maintenance
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert repair and maintenance services for all brands of diesel
              generators. 24/7 emergency support with comprehensive AMC plans.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="shadow-glow">
                <Link href="/contact">Book Service</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get AMC Quote</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Services"
            description="Complete DG maintenance and repair solutions"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((service, index) => (
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
                      <service.icon className="w-7 h-7 text-[#3c83f6]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-br from-[#fbbd23]/5 to-[#3c83f6]/5">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Repair Services"
            description="Comprehensive repair solutions for all DG components"
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-12">
            {repairServices.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-primary">
                      {section.category}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#fbbd23] shrink-0 mt-1" />
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
            title="AMC Plans"
            description="Choose the right Annual Maintenance Contract for your needs"
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
            {amcPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className={`h-full border-2 hover:shadow-glow transition-all duration-300 ${
                    index === 1 ? "border-primary" : "border-[#fbbd23]/20"
                  }`}
                >
                  <CardContent className="p-6">
                    {index === 1 && (
                      <div className="bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-2 text-[#3c83f6]">
                      {plan.name}
                    </h3>
                    <p className="text-[#fbbd23] font-semibold mb-4">
                      {plan.visits}
                    </p>
                    <div className="mb-6">
                      <p className="text-sm text-muted-foreground mb-3">
                        Features:
                      </p>
                      <ul className="space-y-2">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#3c83f6] shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-3">
                        Ideal for:
                      </p>
                      <p className="font-semibold">{plan.ideal}</p>
                    </div>
                    <Button asChild className="w-full mt-6">
                      <Link href="/contact">Choose Plan</Link>
                    </Button>
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
            title="Common Issues & Solutions"
            description="Quick reference guide for DG problems"
          />
          <div className="max-w-5xl mx-auto space-y-4 mt-12">
            {commonIssues.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="border-[#3c83f6]/20 hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-bold text-[#3c83f6] mb-2">
                          Problem
                        </h4>
                        <p className="text-foreground">{item.issue}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-muted-foreground mb-2">
                          Common Causes
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {item.causes}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#fbbd23] mb-2">
                          Solution
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {item.solution}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Card className="border-primary/20 bg-linear-to-br from-primary/5 to-[#fbbd23]/5">
              <CardContent className="p-8">
                <Phone className="w-16 h-16 mx-auto mb-4 text-primary" />
                <h2 className="text-3xl font-bold mb-4">
                  24/7 Emergency Support
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  DG breakdown? We provide round-the-clock emergency repair
                  services to get your generator back up and running quickly.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button asChild size="lg" className="shadow-glow">
                    <Link href="/contact">Call Emergency Support</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-r from-secondary via-[#fbbd23] to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Keep Your DG Running Smoothly
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don&apos;t wait for breakdowns. Schedule regular maintenance or sign
            up for an AMC plan today.
          </p>
          <Button asChild size="lg" className="shadow-glow">
            <Link href="/contact">Schedule Maintenance</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Repairing;
