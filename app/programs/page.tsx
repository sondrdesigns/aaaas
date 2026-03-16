import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { programs } from "@/lib/data";
import Link from "next/link";

export default function Programs() {
  return (
    <div className="flex flex-col min-h-screen pb-24">
      {/* Header */}
      <section className="pt-40 md:pt-48 pb-16 bg-surface-muted border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading subtitle="Initiatives" alignment="center">
            Mentorship, Education, and Civic Impact.
          </SectionHeading>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-24">
          
          {programs.map((program, index) => (
            <div key={program.slug} id={program.slug} className={`flex flex-col md:flex-row gap-12 items-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-5/12">
                <div className="bg-brand-primary rounded-xl aspect-[4/3] p-8 flex items-end relative overflow-hidden shadow-sm">
                   {/* Abstract graphic representation */}
                   <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                   <h3 className="text-2xl font-bold text-white relative z-10">{program.title}</h3>
                </div>
              </div>
              
              <div className="w-full md:w-7/12">
                <div className="inline-block px-3 py-1 bg-surface-muted text-brand-primary text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                  For: {program.audience}
                </div>
                <h3 className="text-3xl font-bold text-brand-primary mb-6">{program.title}</h3>
                <p className="text-lg text-text-muted mb-8 leading-relaxed">
                  {program.fullDescription}
                </p>
                <div className="space-y-3 mb-8">
                  <h4 className="font-semibold text-text-main">Key Outcomes:</h4>
                  <ul className="space-y-2">
                    {program.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-center text-text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mr-3"></span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/join">
                  <Button variant="outline" className="text-brand-primary border-brand-primary/20">Get Involved</Button>
                </Link>
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}
