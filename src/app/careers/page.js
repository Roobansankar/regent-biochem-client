import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

export default function CareersPage() {
  const jobRoles = [
    {
      title: "Field Service Technician",
      department: "Technical Services",
      location: "Pan India",
      type: "Full-time",
      description: "Responsible for maintenance and servicing of Bio-Washer and GT Parts Washer systems at client sites."
    },
    {
      title: "Chemical Sales Engineer",
      department: "Sales & Marketing",
      location: "Regional Office",
      type: "Full-time",
      description: "Driving growth for our AutoPurge System and eco-friendly cleaning chemical lines in industrial sectors."
    },
    {
      title: "R&D Chemist",
      department: "Research & Development",
      location: "Headquarters",
      type: "Full-time",
      description: "Developing the next generation of biodegradable, high-performance industrial cleaning solvents."
    },
    {
      title: "Operations Manager",
      department: "Logistics",
      location: "Warehouse Hub",
      type: "Full-time",
      description: "Overseeing the supply chain for our cleaning equipment and chemical distribution networks."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <ScrollReveal />

      {/* Hero Section */}
      <section className="relative pt-10 pb-8 lg:pt-16 lg:pb-12 bg-green overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight reveal">
              Innovate the Future of <span className="text-green-mid">Industrial Cleaning</span>
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed reveal">
              Be part of a team dedicated to sustainable chemical solutions and advanced parts washing technology. 
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-12 sm:py-16 bg-brand-bg2">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="reveal bg-white p-8 rounded-2xl shadow-sm border border-brand-border h-full relative why-card overflow-hidden">
              <div className="w-12 h-12 bg-green-light rounded-xl flex items-center justify-center text-green mb-6">
                <i className="fas fa-leaf text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-4">Eco-Innovation</h3>
              <p className="text-brand-body leading-relaxed">
                Work with biodegradable chemicals that are safe for both the environment and the workforce.
              </p>
            </div>
            <div className="reveal bg-white p-8 rounded-2xl shadow-sm border border-brand-border h-full relative why-card overflow-hidden" style={{ transitionDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-green-light rounded-xl flex items-center justify-center text-green mb-6">
                <i className="fas fa-tools text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-4">Cutting-Edge Tech</h3>
              <p className="text-brand-body leading-relaxed">
                Join the team behind the Pro AutoPurge System and GT Parts Washer—leaders in parts cleaning technology.
              </p>
            </div>
            <div className="reveal bg-white p-8 rounded-2xl shadow-sm border border-brand-border h-full relative why-card overflow-hidden" style={{ transitionDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-green-light rounded-xl flex items-center justify-center text-green mb-6">
                <i className="fas fa-chart-line text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-4">Growth & Impact</h3>
              <p className="text-brand-body leading-relaxed">
                Expand your career in a high-growth sector focused on efficiency and sustainable industrial practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-black mb-3">Open Positions</h2>
            <div className="w-16 h-1 bg-green rounded-full"></div>
          </div>

          <div className="space-y-6">
            {jobRoles.map((job, index) => (
              <div key={index} className="reveal group bg-white border border-brand-border hover:border-green p-6 md:p-8 rounded-2xl transition-all hover:shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-brand-black group-hover:text-green transition-colors">{job.title}</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-green-light text-green text-[10px] font-bold uppercase tracking-wider border border-green-mid">
                      {job.type}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-brand-muted mb-4">
                    <span className="flex items-center gap-2">
                      <i className="fas fa-briefcase text-green"></i> {job.department}
                    </span>
                    <span className="flex items-center gap-2">
                      <i className="fas fa-map-marker-alt text-green"></i> {job.location}
                    </span>
                  </div>
                  <p className="text-brand-body text-sm max-w-2xl">
                    {job.description}
                  </p>
                </div>
                <div>
                  <button className="w-full md:w-auto px-6 py-3 bg-brand-black text-white font-bold rounded-lg hover:bg-green transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-white border-t border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="reveal bg-green-light p-8 md:p-12 rounded-[32px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <h2 className="text-2xl font-bold text-brand-black mb-4 relative z-10">Don&apos;t see a perfect match?</h2>
            <p className="text-sm sm:text-base text-brand-body mb-6 relative z-10">
              We&apos;re always looking for talented individuals who are passionate about chemicals, engineering, and sustainability. Send us your CV and we&apos;ll keep you in mind for future openings.
            </p>
            <a 
              href="mailto:careers@regentbiochem.com" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-green text-white font-bold rounded-xl hover:bg-green-dark transition-all shadow-lg relative z-10"
            >
              <i className="fas fa-paper-plane"></i>
              Send Your CV
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
