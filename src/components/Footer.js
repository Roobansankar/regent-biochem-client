import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-border px-4 sm:px-6 lg:px-8 pt-14 pb-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12 pb-10 border-b border-brand-border">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/">
              <img src="/logo.png" alt="Bio-Chem Logo" className="h-14 w-auto mb-4" />
            </Link>
            <p className="text-sm font-bold uppercase tracking-wider text-brand-black leading-relaxed max-w-xs">
              GREEN WAY TO GROWTH
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
                <i className="fab fa-youtube"></i>
              </Link>
            </div>
          </div>
          {/* Solutions */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-brand-black mb-4">Solutions</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/services/freeflow/pipeline" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Pipeline Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/freeflow/cooling-tower" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Cooling Tower Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/freeflow/mould-injection" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Mould & Injection Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/freeflow/heat-exchanger" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Heat Exchanger Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/freeflow/impact-assessment" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Impact Assessment
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
                <Link href="/industries/oil-gas" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Oil & Gas
                </Link>
              </li>
              <li>
                <Link href="/industries/food-beverage" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Food & Beverage
                </Link>
              </li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-brand-black mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Compliance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-brand-black mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-brand-muted">
                <i className="fas fa-map-marker-alt text-green mt-0.5 flex-shrink-0"></i> Coimbatore, India
              </li>
              <li className="flex items-center gap-2 text-sm text-brand-muted">
                <i className="fas fa-phone text-green flex-shrink-0"></i> +91 98434 06642
              </li>
              <li className="flex items-center gap-2 text-sm text-brand-muted">
                <i className="fas fa-envelope text-green flex-shrink-0"></i> info@bio-chem.in
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <p className="text-xs text-brand-muted">
            © 2026 Bio-Chem Surface Technology. Precision Engineering for a Sustainable Future.
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
