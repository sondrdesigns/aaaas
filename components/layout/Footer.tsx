import Link from "next/link";
import { Button } from "../ui/Button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-white pt-16 pb-8 border-t border-brand-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="text-2xl font-bold tracking-tight text-white">
                A<span className="text-brand-accent">A</span>AAS
              </div>
              <div className="text-[0.6rem] uppercase tracking-widest text-slate-300 font-medium mt-0.5">
                Asian American Academy
              </div>
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-sm border-l-2 border-brand-accent pl-4">
              The premier honoring society, leadership nexus, and public leadership platform for Asian Americans.
            </p>
          </div>

          {/* Programs Col */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-6">Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/programs#summer-academy" className="text-sm text-slate-300 hover:text-white transition-colors">
                  Summer Academy
                </Link>
              </li>
              <li>
                <Link href="/programs#congressional" className="text-sm text-slate-300 hover:text-white transition-colors">
                  Congressional Fellows
                </Link>
              </li>
              <li>
                <Link href="/fellowship" className="text-sm text-slate-300 hover:text-white transition-colors">
                  Inaugural Fellowship
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Col */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-6">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-slate-300 hover:text-white transition-colors">
                  About the Academy
                </Link>
              </li>
              <li>
                <Link href="/members" className="text-sm text-slate-300 hover:text-white transition-colors">
                  Co-Founders & Members
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-sm text-slate-300 hover:text-white transition-colors">
                  News Insight
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-sm text-slate-300 hover:text-white transition-colors">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-6">Connect</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-slate-300">
                <Mail size={16} className="mt-1 flex-shrink-0 text-brand-accent" />
                <span>contact@aaaas.org</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-slate-300">
                <Phone size={16} className="mt-1 flex-shrink-0 text-brand-accent" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-slate-300">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-brand-accent" />
                <span>Headquarters<br />Washington, D.C.</span> {/* Placeholder, change as needed */}
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/join">
                 <Button variant="secondary" size="sm" className="w-full">Support the Mission</Button>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-secondary flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-slate-400">
            &copy; {currentYear} Asian American Academy of Arts and Sciences. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-xs text-slate-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-slate-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="text-xs text-slate-400 hover:text-white transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
