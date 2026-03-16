"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function Join() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen pb-24">
      {/* Header */}
      <section className="pt-40 md:pt-48 pb-16 bg-surface-muted border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading subtitle="Support the Mission" alignment="center">
            Join or Donate
          </SectionHeading>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Join Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-brand-primary mb-2">Get Involved</h3>
              <p className="text-text-muted mb-8 text-sm">Sign up for updates or inquire about joining our initiatives.</p>
              
              {isSubmitted ? (
                <div className="bg-green-50 text-green-800 p-8 rounded-xl text-center border border-green-200">
                   <div className="flex justify-center mb-4"><CheckCircle2 size={48} className="text-green-500"/></div>
                   <h4 className="font-bold text-lg mb-2">Thank you for your interest!</h4>
                   <p className="text-sm">We have received your information and will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text-main mb-1">First Name</label>
                      <input required type="text" className="w-full px-4 py-2 bg-surface-muted border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/50" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-main mb-1">Last Name</label>
                      <input required type="text" className="w-full px-4 py-2 bg-surface-muted border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/50" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-1">Email Address</label>
                    <input required type="email" className="w-full px-4 py-2 bg-surface-muted border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/50" />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-text-main mb-1">Area of Interest</label>
                     <select className="w-full px-4 py-2 bg-surface-muted border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/50">
                       <option>General Updates</option>
                       <option>Summer Academy Mentorship</option>
                       <option>Congressional Fellows</option>
                       <option>Corporate Partnership</option>
                     </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-1">Message (Optional)</label>
                    <textarea rows={4} className="w-full px-4 py-2 bg-surface-muted border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/50"></textarea>
                  </div>
                  <Button type="submit" className="w-full pt-2">Submit inquiry</Button>
                </form>
              )}
            </div>

            {/* Donate Column */}
            <div className="flex flex-col justify-center">
              <div className="bg-brand-primary text-white p-10 rounded-2xl shadow-md border border-brand-secondary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <h3 className="text-3xl font-bold mb-4 relative z-10">Make an Impact</h3>
                <p className="text-slate-300 mb-8 leading-relaxed relative z-10">
                  Your contribution directly supports the Summer Academy, Congressional Fellows, and our mission to elevate Asian American representation in public life.
                </p>
                <div className="space-y-4 relative z-10">
                  <Button variant="secondary" size="lg" className="w-full justify-center" onClick={() => alert("Redirecting to Stripe/Donorbox payment portal...")}>
                    Donate $100
                  </Button>
                  <Button variant="outline" size="lg" className="w-full justify-center text-white border-white/20 hover:bg-white/10 hover:text-white" onClick={() => alert("Redirecting to Stripe/Donorbox payment portal...")}>
                    Donate Custom Amount
                  </Button>
                </div>
                <p className="text-xs text-slate-400 mt-6 text-center">AAAAS is a registered 501(c)(3) non-profit organization. All donations are tax-deductible.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
