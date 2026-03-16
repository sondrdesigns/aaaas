"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen bg-surface-muted pb-24">
      {/* Header */}
      <section className="pt-40 md:pt-48 pb-12 border-b border-slate-200 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading subtitle="Portal" alignment="center">
            Member Access
          </SectionHeading>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 max-w-md">
          <div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-center text-brand-primary mb-6">Sign In to AAAAS</h3>
            
            {/* Shell for BetterAuth Integration */}
            <form className="space-y-4">
               <div>
                  <label className="block text-sm font-medium text-text-main mb-1">Email Address</label>
                  <input type="email" className="w-full px-4 py-2 bg-surface-muted border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/50" placeholder="fellow@aaaas.org" />
               </div>
               <div>
                  <div className="flex justify-between items-center mb-1">
                     <label className="block text-sm font-medium text-text-main">Password</label>
                     <a href="#" className="text-xs text-brand-accent hover:underline">Forgot password?</a>
                  </div>
                  <input type="password" className="w-full px-4 py-2 bg-surface-muted border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/50" placeholder="••••••••" />
               </div>
               <div className="pt-4">
                 <Button type="button" className="w-full" onClick={() => alert("BetterAuth login UI hooked up.")}>
                   Sign In
                 </Button>
               </div>
            </form>
            
            <div className="mt-8 pt-6 border-t border-slate-100 text-center text-sm text-text-muted">
               <p>Not a member yet?</p>
               <a href="/fellowship" className="font-semibold text-brand-primary hover:text-brand-accent transition-colors">Inquire about the Fellowship</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
