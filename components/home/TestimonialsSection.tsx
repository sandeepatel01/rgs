"use client";

import SectionHeader from "../shared/SectionHeader";
import TestimonialCard from "../shared/TestimonialCard";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Homeowner, Delhi",
      content:
        "RG Solars installed a 5kW system at my home. My electricity bills have reduced by 80%. Excellent service!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Business Owner, Mumbai",
      content:
        "Their DG solutions are top-notch. We've had zero downtime since installation. Highly professional team.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "Factory Manager, Ahmedabad",
      content:
        "Best solar company in India! They handled our large industrial project perfectly. Great ROI.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Real experiences from satisfied customers across India"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
