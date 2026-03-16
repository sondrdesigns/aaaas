import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen pb-24">
      <section className="pt-40 md:pt-48 pb-12 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading alignment="left" subtitle="Legal">
            Terms of Service
          </SectionHeading>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl prose prose-sm md:prose-base text-text-muted">
           <p><strong>Last Updated:</strong> [Date]</p>
           <p>This is a placeholder for the Asian American Academy of Arts and Sciences Terms of Service.</p>
           <h3>1. Acceptance of Terms</h3>
           <p>[Details about accepted terms will be placed here.]</p>
           <h3>2. Use of Site</h3>
           <p>[Details about site usage rules will be placed here.]</p>
        </div>
      </section>
    </div>
  );
}
