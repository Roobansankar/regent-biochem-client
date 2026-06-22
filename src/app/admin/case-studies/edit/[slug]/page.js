"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CaseStudyForm from "@/components/admin/CaseStudyForm";

export default function EditCaseStudyPage() {
  const params = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params.slug) return;
    const fetchCaseStudy = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/case-studies/${params.slug}`);
        const data = await res.json();
        if (data.caseStudy) setCaseStudy(data.caseStudy);
      } catch (err) {
        console.error("Failed to fetch case study:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCaseStudy();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center space-y-4">
        <p className="text-slate-500 font-bold">Case study not found</p>
        <button onClick={() => window.history.back()} className="text-indigo-600 font-bold hover:underline">Go Back</button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Edit Case Study</h1>
        <p className="text-sm text-slate-500 mt-1">Update the content and settings for this case study.</p>
      </div>
      <CaseStudyForm initialData={caseStudy} isEditing={true} />
    </div>
  );
}
