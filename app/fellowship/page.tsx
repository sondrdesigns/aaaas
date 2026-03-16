"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function Fellowship() {
  return (
    <div className="flex flex-col min-h-screen pb-24">
      {/* Header */}
      <section className="pt-40 md:pt-48 pb-16 bg-brand-primary text-white border-b border-brand-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <SectionHeading subtitle="The Honoring Society" alignment="center">
            Inaugural Fellowship
          </SectionHeading>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mt-6">
            Recognizing extraordinary Asian American achievement across the arts, sciences, humanities, business, and public life.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-surface-muted">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="bg-white p-12 rounded-2xl border border-slate-200 shadow-sm text-center mb-16">
             <h3 className="text-2xl font-bold text-brand-primary mb-6">Call for Nominations</h3>
             <p className="text-text-muted mb-8 leading-relaxed max-w-2xl mx-auto">
               We are carefully selecting our Founding Fellows to establish the organization&apos;s premier brand. If you or someone you know embodies the highest level of excellence and leadership in their field, we invite you to formally inquire.
             </p>
             <div className="bg-surface-muted p-8 rounded-xl text-left border border-slate-100 max-w-xl mx-auto mb-8">
                <h4 className="font-semibold text-brand-primary mb-4 text-center">Selection Criteria</h4>
                <ul className="space-y-3 text-sm text-text-muted">
                  <li className="flex items-start"><span className="text-brand-accent mr-3 font-bold">•</span> Extraordinary achievement in Arts, Sciences, or Public Life.</li>
                  <li className="flex items-start"><span className="text-brand-accent mr-3 font-bold">•</span> Demonstrated commitment to mentorship and community impact.</li>
                  <li className="flex items-start"><span className="text-brand-accent mr-3 font-bold">•</span> A profound alignment with the vision of perpetuating AAPI Leadership.</li>
                </ul>
             </div>
             
             {/* Shell for Future Form Integration */}
             <div className="mt-12">
                <form className="max-w-md mx-auto space-y-4 text-left">
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-1">Full Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary/50" placeholder="Dr. Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-1">Professional Affiliation</label>
                    <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary/50" placeholder="University, Corporation, etc." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-1">Email Address</label>
                    <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary/50" placeholder="jane@example.com" />
                  </div>
                  <Button type="button" className="w-full mt-4" onClick={() => alert("Form submission UI. Integrate with backend.")}>
                    Inquire / Nominate
                  </Button>
                </form>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
