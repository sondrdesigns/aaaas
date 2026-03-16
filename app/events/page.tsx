import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CalendarDays, MapPin } from "lucide-react";

export default function Events() {
  const mockEvents = [
    { title: "Inaugural Leadership Summit", date: "August 12, 2026", time: "9:00 AM - 5:00 PM EST", location: "Washington, D.C." },
    { title: "Summer Academy Closing Ceremony", date: "July 25, 2026", time: "6:00 PM - 9:00 PM EST", location: "New York, NY" },
  ];

  return (
    <div className="flex flex-col min-h-screen pb-24">
      <section className="pt-40 md:pt-48 pb-16 bg-surface-muted border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading alignment="center" subtitle="Gatherings">
            Upcoming Events
          </SectionHeading>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-6">
           {mockEvents.map((event, i) => (
             <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between hover:border-brand-accent/50 transition-colors shadow-sm">
                <div className="flex-1">
                   <div className="inline-flex items-center space-x-2 text-sm text-brand-accent font-semibold mb-3 bg-brand-accent/10 px-3 py-1 rounded-full uppercase tracking-wider">
                     <CalendarDays size={14} />
                     <span>{event.date}</span>
                   </div>
                   <h3 className="text-2xl font-bold text-brand-primary mb-2">{event.title}</h3>
                   <div className="flex flex-col sm:flex-row sm:items-center text-text-muted text-sm space-y-2 sm:space-y-0 sm:space-x-6 mt-4">
                      <span className="flex items-center"><MapPin size={16} className="mr-2"/> {event.location}</span>
                      <span className="hidden sm:inline border-l border-slate-300 h-4"></span>
                      <span>{event.time}</span>
                   </div>
                </div>
                <div className="mt-4 md:mt-0 flex-shrink-0">
                   <Button variant="outline" className="w-full md:w-auto text-brand-primary">Register</Button>
                </div>
             </div>
           ))}
           
           <div className="mt-12 p-8 bg-brand-primary rounded-xl text-center text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
               <h4 className="text-xl font-bold mb-3 relative z-10">Host an Event</h4>
               <p className="text-slate-300 text-sm mb-6 max-w-lg mx-auto relative z-10">Partner with AAAAS to bring leadership panels, mentorship workshops, or community gatherings to your university or city.</p>
               <Button variant="secondary" className="relative z-10">Partner with Us</Button>
           </div>
        </div>
      </section>
    </div>
  );
}
