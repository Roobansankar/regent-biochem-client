import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-border px-4 sm:px-6 lg:px-8 pt-14 pb-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8 md:gap-x-10 lg:gap-x-12 xl:gap-x-16 mb-12 pb-10 border-b border-brand-border">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col">
            <Link href="/">
              <img src="/logo.png" alt="Bio-Chem Logo" className="h-14 w-auto mb-4" />
            </Link>
            <p className="text-xs font-black uppercase tracking-wider text-brand-black leading-relaxed">
              <span className="text-green">GREEN</span> WAY TO <span className="text-green">GROWTH</span>
            </p>
            <div className="flex gap-3 mt-5">
              <Link
                href="#"
                className="w-9 h-9 rounded-lg border border-brand-border flex items-center justify-center text-brand-muted hover:text-green hover:border-green transition-colors text-sm"
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-lg border border-brand-border flex items-center justify-center text-brand-muted hover:text-green hover:border-green transition-colors text-sm"
              >
                <i className="fab fa-twitter"></i>
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-lg border border-brand-border flex items-center justify-center text-brand-muted hover:text-green hover:border-green transition-colors text-sm"
              >
                <i className="fab fa-instagram"></i>
              </Link>
            </div>

          </div>
          {/* Company */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-brand-black mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-brand-muted hover:text-green transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Industries */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-brand-black mb-4">Industries</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/industries/automotive" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Automotive
                </Link>
              </li>
              <li>
                <Link href="/industries/cnc-machining" className="text-sm text-brand-muted hover:text-green transition-colors">
                  CNC Machining
                </Link>
              </li>
              <li>
                <Link href="/industries/foundry" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Foundry
                </Link>
              </li>
              <li>
                <Link href="/industries/forging" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Forging
                </Link>
              </li>
              <li>
                <Link href="/industries/mro-maintenance" className="text-sm text-brand-muted hover:text-green transition-colors">
                  MRO & Maintenance
                </Link>
              </li>
              <li>
                <Link href="/industries/oil-gas" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Oil & Gas
                </Link>
              </li>
              <li>
                <Link href="/industries/food-beverage" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Food & Beverage
                </Link>
              </li>
              <li>
                <Link href="/industries/textile-industry" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Textile Industry
                </Link>
              </li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-brand-black mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/freeflow/pipeline" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Pipeline Cleaning Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/freeflow/cooling-tower" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Cooling Tower Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/freeflow/mould-injection" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Injection Mould Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/freeflow/heat-exchanger" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Heat Exchanger Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/freeflow/impact-assessment" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Operational Impact Assessment
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-brand-black mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-brand-muted">
                <i className="fas fa-map-marker-alt text-green mt-0.5 flex-shrink-0"></i> 24, Sungam Bypass Road,<br/>Paari Nagar,<br/>Coimbatore,<br/>Tamil Nadu - 641045
              </li>
              <li className="flex items-center gap-2 text-sm text-brand-muted">
                <i className="fas fa-phone text-green flex-shrink-0"></i> 0422 231 0396
              </li>
              <li className="flex items-center gap-2 text-sm text-brand-muted">
                <i className="fas fa-envelope text-green flex-shrink-0"></i> info@regentbiochem.com
              </li>
            </ul>
          </div>

        </div>
        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <p className="text-xs text-brand-muted">
            © 2026 Bio-Chem Surface Technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#" className="text-xs text-brand-muted hover:text-green transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-brand-muted hover:text-green transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-brand-muted hover:text-green transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
