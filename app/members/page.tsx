import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { cofounders } from "@/lib/data";

export default function Members() {
  return (
    <div className="flex flex-col min-h-screen pb-24">
      {/* Header */}
      <section className="pt-40 md:pt-48 pb-16 bg-surface-muted border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading subtitle="Leadership" alignment="center">
            Founders & Members
          </SectionHeading>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-brand-primary mb-8 border-b border-slate-200 pb-4">Co-Founders</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cofounders.map((founder, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-md transition-shadow border-slate-200">
                  <div className="aspect-[4/3] bg-surface-muted relative border-b border-slate-100 flex items-center justify-center">
                     {/* Placeholder image container */}
                     <div className="w-24 h-24 rounded-full bg-slate-200 border-4 border-white shadow-sm flex items-center justify-center text-slate-400 font-bold text-2xl group-hover:scale-105 transition-transform">
                       {founder.name.charAt(0)}
                     </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-brand-primary mb-1">{founder.name}</h4>
                    <p className="text-sm font-semibold text-brand-accent mb-3 uppercase tracking-wider">{founder.affiliation}</p>
                    <p className="text-sm text-text-muted leading-relaxed line-clamp-3">
                      {founder.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
             <h3 className="text-2xl font-bold text-brand-primary mb-8 border-b border-slate-200 pb-4">Inaugural Fellows</h3>
             <div className="bg-surface-muted rounded-xl p-12 text-center border border-slate-200 border-dashed">
                <p className="text-text-muted mb-4">We are currently selecting our inaugural class of Fellows.</p>
                <a href="/fellowship" className="text-brand-accent font-semibold hover:underline">Inquire about nomination.</a>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
