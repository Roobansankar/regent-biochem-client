"use client";

import JobForm from "@/components/admin/JobForm";

export default function NewJobPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Create Job Opening</h1>
        <p className="text-sm text-slate-500 mt-1">Fill in the details below to publish a new career opening.</p>
      </div>

      <JobForm />
    </div>
  );
}
