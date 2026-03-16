import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen pb-24">
      <section className="pt-40 md:pt-48 pb-12 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading alignment="left" subtitle="Legal">
            Privacy Policy
          </SectionHeading>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl prose prose-sm md:prose-base text-text-muted">
           <p><strong>Last Updated:</strong> [Date]</p>
           <p>This is a placeholder for the Asian American Academy of Arts and Sciences Privacy Policy.</p>
           <h3>1. Information We Collect</h3>
           <p>[Details about data collection will be placed here.]</p>
           <h3>2. How We Use Your Information</h3>
           <p>[Details about data usage will be placed here.]</p>
        </div>
      </section>
    </div>
  );
}
