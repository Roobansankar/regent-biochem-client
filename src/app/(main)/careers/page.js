"use client";
import React, { useState, useEffect } from 'react';
import { API } from '@/lib/api';

export default function CareersPage() {
  const [jobRoles, setJobRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${API}/jobs`);
        const data = await response.json();
        setJobRoles(Array.isArray(data.jobs) ? data.jobs : []);
      } catch (err) {
        console.error("Failed to fetch jobs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-10 pb-8 lg:pt-16 lg:pb-12 bg-green overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Build More Than a Career — <span className="text-green-mid">Build Impact</span>
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
Grow your career by solving real-world industrial challenges and delivering high-performance technical solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Why Bio chem? */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-black mb-4">Why Bio chem?</h2>
            <div className="w-16 h-1 bg-green rounded-full mb-6"></div>
            <p className="text-base sm:text-lg text-brand-body leading-relaxed max-w-none">
              At Regent BioChem, we believe innovation starts with people. We offer opportunities to work on real-world industrial challenges, gain hands-on industry exposure, and contribute to sustainable technologies that improve manufacturing processes. Whether you&apos;re a student, intern, or experienced professional, you&apos;ll find an environment that encourages learning, collaboration, and continuous growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white border border-brand-border rounded-2xl p-8 shadow-sm text-center">
              <h3 className="text-xl font-bold text-brand-black mb-6 flex flex-col items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-green/10 flex items-center justify-center text-green">
                  <i className="fas fa-star text-sm"></i>
                </span>
                What you can expect?
              </h3>
              <ul className="space-y-4 inline-block text-left">
                {[
                  "Hands-on industry experience",
                  "Learning and development opportunities",
                  "Exposure to German technology and industrial best practices",
                  "Collaborative and supportive work culture",
                  "Career growth through challenging projects",
                  "Opportunity to contribute to sustainable industrial solutions"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-body text-sm sm:text-base">
                    <i className="fas fa-check-circle text-green mt-1"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-brand-border rounded-2xl p-8 shadow-sm text-center">
              <h3 className="text-xl font-bold text-brand-black mb-6 flex flex-col items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-green/10 flex items-center justify-center text-green">
                  <i className="fas fa-search text-sm"></i>
                </span>
                What we look for?
              </h3>
              <p className="text-sm sm:text-base font-semibold text-brand-muted mb-4 uppercase tracking-wider">Ideal Candidate Demonstrate:</p>
              <ul className="space-y-4 inline-block text-left">
                {[
                  "A strong willingness to learn",
                  "Responsibility and accountability",
                  "Problem-solving mindset",
                  "Teamwork and collaboration",
                  "Effective communication skills",
                  "Adaptability in dynamic environments",
                  "Customer-focused thinking",
                  "Passion for continuous improvement"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-body">
                    <i className="fas fa-user-check text-green mt-1"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Process */}
      <section className="py-12 sm:py-16 bg-brand-bg2">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-black mb-4">Interview Process</h2>
            <p className="text-brand-body">Our structured approach to finding the right fit.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: "Application Submission", icon: "fa-file-alt" },
              { title: "Resume Screening", icon: "fa-id-badge" },
              { title: "Technical/ Role-based Interview", icon: "fa-comments" },
              { title: "Final Interview", icon: "fa-users" },
              { title: "Offer & Onboarding", icon: "fa-check-double" }
            ].map((step, i, arr) => (
              <div key={i} className="relative group">
                {i < arr.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-green group-hover:bg-green-dark transition-colors -z-0" />
                )}
                <div className="bg-white p-6 rounded-2xl border border-brand-border text-center flex flex-col items-center h-full relative z-10">
                <div className="w-12 h-12 bg-green-light rounded-xl flex items-center justify-center text-green mb-4">
                  <i className={`fas ${step.icon} text-xl`}></i>
                </div>
                <div className="text-xs font-bold text-green uppercase tracking-widest mb-2">Step 0{i+1}</div>
                  <h4 className="text-sm font-bold text-brand-black leading-tight">{step.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-black mb-3">Current Openings</h2>
            <div className="w-16 h-1 bg-green rounded-full"></div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin w-8 h-8 border-4 border-green border-t-transparent rounded-full"></div>
            </div>
          ) : jobRoles.length === 0 ? (
            <p className="text-center text-brand-muted py-20">No job openings at the moment. Check back soon!</p>
          ) : (
          <div className="space-y-6">
            {jobRoles.map((job, index) => (
              <div key={index} className="group bg-white border border-brand-border hover:border-green p-6 md:p-8 rounded-2xl transition-all hover:shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-brand-black group-hover:text-green transition-colors">{job.title}</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-green-light text-green text-[10px] font-bold uppercase tracking-wider border border-green-mid">
                      {job.type}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-brand-muted mb-4">
                    <span className="flex items-center gap-2">
                      <i className="fas fa-briefcase text-green"></i> {job.department}
                    </span>
                    <span className="flex items-center gap-2">
                      <i className="fas fa-map-marker-alt text-green"></i> {job.location}
                    </span>
                    <span className="flex items-center gap-2 font-bold text-brand-black">
                      <i className="fas fa-history text-green"></i> Exp: {job.experience}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-brand-body max-w-2xl leading-relaxed">
                    {job.description}
                  </p>
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="mt-3 text-sm font-bold text-green hover:text-green-dark transition-colors"
                  >
                    View More <i className="fas fa-arrow-right text-xs ml-1"></i>
                  </button>
                </div>
                <div>
                  <a
                    href="mailto:bizdev@bio-chem.in"
                    className="w-full md:w-auto inline-flex items-center justify-center px-8 py-3 bg-brand-black text-white font-bold rounded-xl hover:bg-green transition-colors shadow-lg shadow-black/5"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedJob(null)}></div>
          <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl">
            <div className="p-6 pb-4 border-b border-brand-border">
              <h3 className="text-lg sm:text-xl font-bold text-brand-black">{selectedJob.title}</h3>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-brand-muted mt-1">
                <span><i className="fas fa-briefcase text-green mr-1"></i> {selectedJob.department}</span>
                <span><i className="fas fa-map-marker-alt text-green mr-1"></i> {selectedJob.location}</span>
                <span><i className="fas fa-history text-green mr-1"></i> Exp: {selectedJob.experience}</span>
              </div>
            </div>
                <div className="p-6 overflow-y-auto flex-1 space-y-6">
              <div>
                <h4 className="text-sm sm:text-base font-bold text-brand-black mb-2">Overview</h4>
                <p className="text-sm sm:text-base text-brand-body leading-relaxed">{selectedJob.overview}</p>
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-brand-black mb-2">Key Responsibilities</h4>
                <ul className="list-disc list-inside text-sm sm:text-base text-brand-body space-y-1">
                  {(selectedJob.responsibilities || []).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-brand-black mb-2">Qualification</h4>
                <p className="text-sm sm:text-base text-brand-body">{selectedJob.qualification}</p>
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-brand-black mb-2">Experience Required</h4>
                <p className="text-sm sm:text-base text-brand-body">{selectedJob.experience_detail}</p>
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-brand-black mb-2">Key Skills Required</h4>
                <div className="flex flex-wrap gap-2">
                  {(selectedJob.skills || []).map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-green-light text-green text-xs font-semibold rounded-lg border border-green-mid">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 pt-4 border-t border-brand-border">
              <a
                href="mailto:bizdev@bio-chem.in"
                className="w-full inline-flex justify-center px-8 py-3 bg-green text-white font-bold rounded-xl hover:bg-green-dark transition-colors shadow-lg shadow-green/30"
              >
                Apply Now <i className="fas fa-arrow-right text-xs ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-white border-t border-brand-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-light p-8 md:p-12 rounded-[32px] relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 flex-1">
              <h2 className="text-2xl font-bold text-brand-black mb-4">Don&apos;t see a perfect match?</h2>
              <p className="text-base sm:text-lg text-brand-body max-w-2xl">
                We&apos;re always looking for talented individuals who are passionate about Engineering and Sustainability. Send us your CV and we&apos;ll keep you in mind for future openings.
              </p>
            </div>
            <div className="relative z-10 flex-shrink-0">
              <a 
                href="mailto:bizdev@bio-chem.in" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-green text-white font-bold rounded-xl hover:bg-green-dark transition-all shadow-lg"
              >
                <i className="fas fa-paper-plane"></i>
                Send Your CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
