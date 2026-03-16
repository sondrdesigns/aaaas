import { SectionHeading } from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pb-24">
      {/* Header */}
      <section className="pt-40 md:pt-48 pb-16 bg-surface-muted border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading subtitle="The Academy" alignment="center">
            Honoring Excellence. Uniting Leadership.
          </SectionHeading>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none text-text-muted">
            <h3 className="text-2xl font-bold text-brand-primary mb-4 mt-8">Our Mission</h3>
            <p className="mb-8">
              The Asian American Academy of Arts and Sciences (AAAAS) is the premier honoring society dedicated to celebrating the excellence of Asian Americans and Pacific Islanders across the arts, sciences, humanities, professions, and public service.
            </p>
            <p className="mb-8">
              We unite distinguished leaders, rising scholars, and emerging innovators into a national leadership nexus. Through recognition, mentorship, and civic engagement, AAAAS advances the visibility, influence, and leadership of Asian Americans in American society.
            </p>
            <p className="mb-12 border-l-4 border-brand-accent pl-6 italic text-text-main font-medium">
              We are committed not only to honoring achievement, but to cultivating the next generation of leaders — especially in academia, culture, industry, and public service.
            </p>

            <h3 className="text-2xl font-bold text-brand-primary mb-4 mt-12">Our Vision</h3>
            <p className="mb-6">
              AAAAS envisions a future in which Asian Americans are fully recognized, fully represented, and fully empowered in every sphere of national life. We strive to build:
            </p>
            <ul className="mb-8 space-y-3 list-none pl-0">
              <li className="flex items-start">
                <span className="text-brand-accent mr-3 font-bold">•</span>
                <span>The most respected Asian American honoring society in the nation.</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-accent mr-3 font-bold">•</span>
                <span>A cross-generational nexus of leaders shaping ideas and institutions.</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-accent mr-3 font-bold">•</span>
                <span>The premier platform for Asian American public leadership.</span>
              </li>
            </ul>

            <p className="mt-8">
              Our long-term aspiration is to establish AAAAS as a national institution that defines excellence, elevates leadership, and strengthens the role of Asian Americans in shaping the future of the United States.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
