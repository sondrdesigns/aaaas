import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Accessibility() {
  return (
    <div className="flex flex-col min-h-screen pb-24">
      <section className="pt-40 md:pt-48 pb-12 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading alignment="left" subtitle="Legal">
            Accessibility Statement
          </SectionHeading>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl prose prose-sm md:prose-base text-text-muted">
           <p><strong>Last Updated:</strong> [Date]</p>
           <p>The Asian American Academy of Arts and Sciences is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.</p>
           <h3>Feedback</h3>
           <p>We welcome your feedback on the accessibility of the AAAAS website. Please let us know if you encounter accessibility barriers:</p>
           <ul>
             <li>Email: accessibility@aaaas.org</li>
           </ul>
        </div>
      </section>
    </div>
  );
}
