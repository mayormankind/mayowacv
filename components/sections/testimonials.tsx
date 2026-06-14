"use client";
import React from "react";
import AnimateIn from "@/components/ui/AnimateIn";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Founder, TechStart Inc.",
    project: "SaaS MVP Development",
    content:
      "Mayowa transformed our rough concept into a fully functional MVP in just 6 weeks. His attention to detail and product mindset helped us launch 3 weeks ahead of schedule. The onboarding flow he built increased our trial-to-paid conversion by 35%.",
  },
  {
    name: "David Chen",
    role: "CTO, LogisticsPro",
    project: "ERP System Overhaul",
    content:
      "We hired Mayowa to rebuild our legacy ERP system. He architected a microservices solution that reduced our billing errors by 90% and improved inventory accuracy to near perfection. His code is clean, well-documented, and easy for our team to maintain.",
  },
  {
    name: "Amanda Okonkwo",
    role: "Product Manager, PayFlow",
    project: "Analytics Dashboard",
    content:
      "Mayowa built our merchant analytics dashboard from scratch. He optimized our database queries, reducing report load times from 5 seconds to under 200ms. Our merchant engagement with the insights module increased by 300% after the launch.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <AnimateIn direction="up" delay={0} className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-px bg-primary" />
            <span className="text-primary text-[10px] font-extrabold uppercase tracking-[0.4em]">
              Client Feedback
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            What Clients Say
          </h2>
          <p className="text-white/50 text-lg max-w-2xl">
            Results-driven partnerships with founders and product teams building
            scalable digital products.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimateIn key={index} direction="up" delay={index * 0.1}>
              <div className="bg-surface border border-white/5 rounded-xl p-8 h-full flex flex-col">
                <Quote className="text-primary/30 w-8 h-8 mb-6" />
                <p className="text-white/80 text-sm leading-relaxed mb-8 flex-1">
                  {testimonial.content}
                </p>
                <div className="border-t border-white/5 pt-6">
                  <p className="text-white font-bold text-base mb-1">
                    {testimonial.name}
                  </p>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-2">
                    {testimonial.role}
                  </p>
                  <p className="text-primary text-[10px] font-bold uppercase tracking-wider">
                    {testimonial.project}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
