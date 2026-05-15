import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-border px-4 sm:px-6 lg:px-8 pt-14 pb-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 pb-10 border-b border-brand-border">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/">
              <img src="/logo.png" alt="Bio-Chem Logo" className="h-14 w-auto mb-4" />
            </Link>
            <p className="text-sm text-brand-muted leading-relaxed max-w-xs">
              Precision engineering for a sustainable industrial future. Made in Germany, deployed globally.
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
            <ul className="space-y-3">
              <li>
                <Link href="/services/pipeline-cleaning-solutions" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Pipeline Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/cooling-tower-cleaning" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Cooling Towers
                </Link>
              </li>
              <li>
                <Link href="/services/mould-injection-cleaning" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Mould & Injection
                </Link>
              </li>
              <li>
                <Link href="/services/heat-exchanger-cleaning" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Heat Exchangers
                </Link>
              </li>
              <li>
                <Link href="/services/operational-impact-assessment" className="text-sm text-brand-muted hover:text-green transition-colors">
                  Impact Assessment
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
                <i className="fas fa-map-marker-alt text-green mt-0.5 flex-shrink-0"></i> 123 Industrial Zone, Germany
              </li>
              <li className="flex items-center gap-2 text-sm text-brand-muted">
                <i className="fas fa-phone text-green flex-shrink-0"></i> +49 123 456 7890
              </li>
              <li className="flex items-center gap-2 text-sm text-brand-muted">
                <i className="fas fa-envelope text-green flex-shrink-0"></i> info@bio-chem.de
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
