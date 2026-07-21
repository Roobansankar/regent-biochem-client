import Link from "next/link";

const PAGE_TITLE = "Terms of Service | Regent Biochem";
const PAGE_DESCRIPTION = "Read the terms of service governing use of Regent Bio-Chem India's website and products.";

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    type: "website",
    siteName: "Regent Bio-Chem India",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "/terms",
    images: ["/hero.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/hero.webp"],
  },
};

export default function Terms() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* ─── PAGE HERO ─── */}
      <section className="relative pt-10 pb-8 lg:pt-16 lg:pb-12 bg-green overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight reveal">
              Terms &amp; Conditions
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed reveal">
              Welcome to the Regent Biochem website. By accessing or using this website, you agree to fully comply with these established Terms &amp; Conditions. If you do not agree with any part of these terms, please discontinue your use of the website immediately.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="reveal space-y-10">
            {/* 2. Definitions */}
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4">Definitions</h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-4">In these Terms, the following definitions apply:</p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-500 leading-relaxed space-y-1.5">
                <li><strong>Company:</strong> Refers exclusively to Regent Biochem.</li>
                <li><strong>Website:</strong> Refers to the official online platform of Regent Biochem.</li>
                <li><strong>User:</strong> Means any individual or corporate entity accessing or utilising the website.</li>
                <li><strong>Products and Services:</strong> Refer to the industrial cleaning systems, speciality chemicals, and related technical solutions offered by the Company.</li>
              </ul>
            </div>

            {/* 3. Eligibility & Scope */}
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4">Eligibility &amp; Scope of Website</h2>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-500 leading-relaxed space-y-1.5">
                <li>This website is specifically intended for business, industrial, and commercial users seeking professional information regarding our products and services.</li>
                <li>The content is provided for general informational purposes only.</li>
                <li>No information presented herein should be construed as a legally binding offer.</li>
              </ul>
            </div>

            {/* 4. Product Information */}
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4">Product Information &amp; Technical Specifications</h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-4">We strive to ensure all product information remains accurate and up to date. However, please note:</p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-500 leading-relaxed space-y-1.5">
                <li>Product specifications, imagery, and technical details are subject to change without prior notice.</li>
                <li>Actual product performance may vary depending on the specific application, operating conditions, and maintenance procedures employed.</li>
                <li><strong>Important:</strong> Product specifications and technical details may change without prior notice.</li>
              </ul>
            </div>

            {/* 5. Technical Advice */}
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4">Technical Advice &amp; Product Application</h2>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-500 leading-relaxed space-y-1.5">
                <li>All technical guidance and recommendations provided are based on our extensive industry experience.</li>
                <li>Customers remain solely responsible for evaluating product suitability for their unique requirements.</li>
                <li>Users must conduct appropriate, independent testing prior to utilizing products in their specific industrial applications.</li>
              </ul>
            </div>

            {/* 6. Website Use */}
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4">Website Use &amp; User Responsibilities</h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-4">Users agree to interact with this website in a responsible and entirely lawful manner. The following activities are strictly prohibited:</p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-500 leading-relaxed space-y-1.5">
                <li>Any unauthorized access or hacking attempts.</li>
                <li>Misuse or activities that interfere with the website&apos;s safe and normal operation.</li>
                <li>The unauthorized copying, reproduction, or distribution of proprietary website content.</li>
              </ul>
            </div>

            {/* 7. Downloadable Resources */}
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4">Downloadable Resources</h2>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-500 leading-relaxed space-y-1.5">
                <li>All available brochures, catalogues, technical datasheets, manuals, and other downloadable resources are provided strictly for informational purposes.</li>
                <li>These materials are the intellectual property of Regent Biochem and may not be altered, reproduced, or distributed without explicit written permission.</li>
              </ul>
            </div>

            {/* 8. Warranty Disclaimer */}
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4">Warranty Disclaimer &amp; Limitation of Liability</h2>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-500 leading-relaxed space-y-1.5">
                <li>While every effort is made to ensure the accuracy of the information on this website, we do not guarantee that it is completely exhaustive, error-free, or continuously updated.</li>
                <li>Regent Biochem shall bear no liability for any direct or indirect commercial or operational loss resulting from the use of this website or reliance on its published content.</li>
              </ul>
            </div>

            {/* 9. Product Safety */}
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4">Product Safety &amp; Compliance</h2>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-500 leading-relaxed space-y-1.5">
                <li>Our specialty chemicals and industrial products must always be used in strict accordance with their relevant Safety Data Sheets (SDS), official product labels, operating instructions, and applicable regional safety regulations.</li>
                <li>Users carry the full responsibility for ensuring the safe handling, storage, and proper application of all items.</li>
              </ul>
            </div>

            {/* 10. Privacy, Cookies & Confidentiality */}
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4">Privacy, Cookies &amp; Confidentiality</h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-4">Your engagement with this website is governed by our official Privacy Policy.</p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-500 leading-relaxed space-y-1.5">
                <li>We may employ cookies to enhance and optimize your browsing experience.</li>
                <li>Any proprietary or personal information submitted through our official enquiry forms will be processed with the utmost confidentiality and security.</li>
              </ul>
            </div>

            {/* 11. Third-Party Links */}
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4">Third-Party Links &amp; Website Availability</h2>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-500 leading-relaxed space-y-1.5">
                <li>This website may feature links to external third-party websites for your convenience.</li>
                <li>Regent Biochem assumes no responsibility for the content, privacy practices, or operating policies of these external websites.</li>
                <li>While we aim to maintain uninterrupted website availability at all times, continuous and flawless access cannot be guaranteed.</li>
              </ul>
            </div>

            {/* 12. Governing Law */}
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4">Governing Law &amp; Changes to Terms</h2>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-500 leading-relaxed space-y-1.5">
                <li>These Terms &amp; Conditions are governed by and construed in accordance with the laws of India.</li>
                <li>Regent Biochem formally reserves the right to modify, amend, or update these Terms at any given time.</li>
                <li>Continued use of the website following any such changes unequivocally indicates your acceptance of the updated Terms.</li>
              </ul>
            </div>

            {/* 13. Contact */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 sm:p-10">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-2">
                If you have any further questions regarding these Terms &amp; Conditions, or if you require assistance with our products and services, please reach out to us via our <Link href="/contact" className="text-green hover:text-green-dark transition-colors">Contact Us</Link> page or through the details provided below:
              </p>
              <div className="mt-4 space-y-1.5 text-sm sm:text-base text-gray-500 leading-relaxed">
                <p><strong>Company Name:</strong> Regent Biochem</p>
                <p><strong>Website:</strong> <a href="https://www.bio-chem.in" className="text-green hover:text-green-dark transition-colors">www.bio-chem.in</a></p>
                <p><strong>Email:</strong> <a href="mailto:info@bio-chem.in" className="text-green hover:text-green-dark transition-colors">info@bio-chem.in</a></p>
                <p><strong>Phone:</strong> 9843406642</p>
                <p><strong>Address:</strong> 24, Bypass Road, Sungam, Paari Nagar, Coimbatore &ndash; 641 045, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
