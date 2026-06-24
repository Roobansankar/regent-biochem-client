"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import JobForm from "@/components/admin/JobForm";
import { API } from "@/lib/api";

export default function EditJobPage() {
  const params = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`${API}/jobs/${params.id}`);
        const data = await response.json();
        if (data.job) {
          setJob(data.job);
        }
      } catch (err) {
        console.error("Failed to fetch job:", err);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchJob();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center space-y-4">
        <p className="text-slate-500 font-bold">Job not found</p>
        <button
          onClick={() => window.history.back()}
          className="text-indigo-600 font-bold hover:underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Edit Job Opening</h1>
        <p className="text-sm text-slate-500 mt-1">Update the details for this career opening.</p>
      </div>

      <JobForm initialData={job} isEditing={true} />
    </div>
  );
}
