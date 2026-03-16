import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function News() {
  const mockNews = [
    { title: "Announcing the 2026 Inaugural Fellowship Form", date: "March 15, 2026", category: "Academy News" },
    { title: "Summer Academy Applications Opening Soon", date: "March 10, 2026", category: "Programs" },
    { title: "Congressional Fellows Mentorship Highlights", date: "February 28, 2026", category: "Recap" },
  ];

  return (
    <div className="flex flex-col min-h-screen pb-24">
      <section className="pt-40 md:pt-48 pb-16 bg-surface-muted border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading alignment="center" subtitle="Updates">
            Academy News & Insights
          </SectionHeading>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockNews.map((news, i) => (
                 <Card key={i} className="flex flex-col h-full overflow-hidden hover:shadow-md transition-shadow group">
                    <div className="aspect-video bg-slate-200 relative overflow-hidden">
                       <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                       <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent">{news.category}</span>
                          <span className="text-xs text-text-muted flex items-center"><Calendar size={12} className="mr-1"/> {news.date}</span>
                       </div>
                       <h3 className="text-xl font-bold text-brand-primary mb-4">{news.title}</h3>
                       <div className="mt-auto pt-4">
                          <Link href="#" className="flex items-center text-sm font-medium text-brand-primary hover:text-brand-accent transition-colors">
                             Read Full Story <ArrowRight size={16} className="ml-1" />
                          </Link>
                       </div>
                    </div>
                 </Card>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
