import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-56 md:pb-40 overflow-hidden bg-slate-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center md:bg-right opacity-80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/80 to-transparent md:w-3/4"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-secondary/80 border border-brand-accent/50 text-brand-accent text-sm font-semibold tracking-widest uppercase mb-6 shadow-sm backdrop-blur-sm">
              The Top Asian American Honoring Society
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-md">
              Where Excellence Is Recognized. <br className="hidden md:block"/>
              <span className="text-brand-accent font-serif font-medium mt-2 block drop-shadow-md">Where Legacy Is Established.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-100 mb-10 max-w-xl leading-relaxed drop-shadow-sm font-medium">
              AAAAS is the premier valuing society celebrating extraordinary Asian American achievement across the arts, sciences, humanities, business, and public life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/fellowship">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base shadow-md hover:shadow-lg transition-all">
                  Explore the Fellowship
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base border-white/40 bg-black/20 text-white hover:bg-white/30 hover:text-white backdrop-blur-md shadow-sm">
                  Discover Our Mission
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Nexus Pillar Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading alignment="left" subtitle="The Asian Leadership Nexus">
                Where Leaders Converge. Where Futures Are Shaped.
              </SectionHeading>
              <p className="text-lg text-text-muted mb-6 leading-relaxed focus:text-balance">
                We go beyond celebrating achievement at the highest levels. AAAAS serves as the definitive nexus of Asian American leaders—uniting distinguished Fellows, rising stars, and next-generation innovators into one unified national platform.
              </p>
              <p className="text-lg text-text-muted mb-8 leading-relaxed focus:text-balance">
                Through recognition, mentorship, and civic engagement, we advance the visibility, influence, and leadership of Asian Americans in American society.
              </p>
              <Link href="/about">
                <Button variant="link" className="px-0 flex items-center gap-2 text-brand-primary font-semibold text-base">
                  Read our full vision <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-8">
              {/* Left Column */}
              <div className="flex flex-col gap-6 flex-1">
                <Card className="p-8 sm:p-10 border-none bg-surface-muted shadow-sm hover:shadow-md transition-shadow rounded-3xl">
                  <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-accent mb-8">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-primary leading-tight">Premier Honoring Society</h3>
                  <p className="text-text-muted text-sm leading-relaxed">Celebrating top-tier achievement across all major disciplines and industries.</p>
                </Card>

                <Card className="p-8 sm:p-10 border-none bg-brand-primary shadow-sm hover:shadow-md transition-shadow text-white rounded-3xl">
                  <div className="h-14 w-14 rounded-2xl bg-brand-secondary/50 shadow-sm flex items-center justify-center text-brand-accent mb-8">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 leading-tight">Public Leadership Platform</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">Elevating Asian American representation from high school classrooms to Congress.</p>
                </Card>
              </div>

              {/* Right Column */}
              <div className="flex flex-col flex-1 sm:mt-16 mb-auto">
                <Card className="p-8 sm:p-10 border-none bg-surface-muted shadow-sm hover:shadow-md transition-shadow rounded-3xl">
                  <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-accent mb-8">
                    <Users size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-primary leading-tight">Cross-Generational Nexus</h3>
                  <p className="text-text-muted text-sm leading-relaxed">Mentoring the next generation through direct access to established pioneers.</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface-muted border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center bg-white p-12 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-3xl font-bold tracking-tight text-brand-primary mb-4">
              Shape the Future of Asian American Influence.
            </h2>
            <p className="text-lg text-text-muted mb-8 max-w-xl mx-auto">
              Join us in building the nation&apos;s leading Asian American institution. Contribute to our mission or inquire about our inaugural fellowship.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/join">
                <Button size="lg" className="w-full sm:w-auto">Support the Mission</Button>
              </Link>
              <Link href="/fellowship">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">Inquire about Fellowship</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
