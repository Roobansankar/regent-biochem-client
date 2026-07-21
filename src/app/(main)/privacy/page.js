import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Regent Biochem",
  description: "Read Regent Bio-Chem India's privacy policy on how we collect, use, and protect your data.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* ─── PAGE HERO ─── */}
      <section className="relative pt-10 pb-8 lg:pt-16 lg:pb-12 bg-green overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight reveal">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed reveal">
              Regent Bio-Chem India Private Limited (&quot;Bio-Chem&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) values your privacy and is committed to protecting the information you share with us. This Privacy Policy explains how we collect, use, and safeguard information obtained through our website.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="reveal space-y-10">
            {/* Information We Collect */}
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-4">
                We may collect information that you voluntarily provide through enquiry forms, quotation requests, or other communications, including:
              </p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-500 leading-relaxed space-y-1.5">
                <li>Name</li>
                <li>Company Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Designation</li>
                <li>Inquiry Details</li>
              </ul>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed mt-4">
                We may also collect technical information such as IP address, browser type, device information, and website usage data.
              </p>
            </div>

            {/* How We Use Information */}
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4">How We Use Information</h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-4">
                The information collected may be used to:
              </p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-500 leading-relaxed space-y-1.5">
                <li>Respond to enquiries</li>
                <li>Provide quotations and technical information</li>
                <li>Improve website performance and user experience</li>
                <li>Analyse visitor interactions</li>
                <li>Maintain website security</li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4">Cookies</h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                Our website may use cookies to improve functionality and understand visitor interactions. Users can manage cookie preferences through browser settings or the cookie consent banner.
              </p>
            </div>

            {/* Sharing of Information */}
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4">Sharing of Information</h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                Bio-Chem does not sell or rent personal information. Information may be shared with trusted service providers supporting website hosting, analytics, or communication services.
              </p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4">Data Security</h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                We maintain reasonable administrative and technical measures to protect personal information against unauthorized access, misuse, or disclosure.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4">Third-Party Links</h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                Our website may contain links to external websites. Bio-Chem is not responsible for the privacy practices of third-party websites.
              </p>
            </div>

            {/* Updates to this Policy */}
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4">Updates to this Policy</h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                Bio-Chem reserves the right to update this Privacy Policy at any time. Changes will be reflected on this page along with the revised effective date.
              </p>
            </div>

            {/* Contact Us */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 sm:p-10">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-2">
                Bio-Chem India Private Limited
              </p>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-2">
                24, Bypass Road, Sungam, Paari Nagar
              </p>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-2">
                Coimbatore &ndash; 641 045, Tamil Nadu, India
              </p>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                Email: <a href="mailto:info@bio-chem.in" className="text-green hover:text-green-dark transition-colors">info@bio-chem.in</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
