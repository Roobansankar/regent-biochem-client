"use client";

import CaseStudyForm from "@/components/admin/CaseStudyForm";

export default function NewCaseStudyPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Create Case Study</h1>
        <p className="text-sm text-slate-500 mt-1">Fill in the details below to publish a new case study.</p>
      </div>
      <CaseStudyForm />
    </div>
  );
}
