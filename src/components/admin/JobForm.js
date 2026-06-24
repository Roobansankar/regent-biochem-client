"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { API } from "@/lib/api";

export default function JobForm({ initialData = null, isEditing = false }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    department: initialData?.department || "",
    location: initialData?.location || "",
    type: initialData?.type || "Full-Time",
    experience: initialData?.experience || "",
    description: initialData?.description || "",
    overview: initialData?.overview || "",
    responsibilities: initialData?.responsibilities?.join("\n") || "",
    qualification: initialData?.qualification || "",
    experience_detail: initialData?.experience_detail || "",
    skills: initialData?.skills?.join("\n") || ""
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        department: initialData.department || "",
        location: initialData.location || "",
        type: initialData.type || "Full-Time",
        experience: initialData.experience || "",
        description: initialData.description || "",
        overview: initialData.overview || "",
        responsibilities: Array.isArray(initialData.responsibilities) ? initialData.responsibilities.join("\n") : "",
        qualification: initialData.qualification || "",
        experience_detail: initialData.experience_detail || "",
        skills: Array.isArray(initialData.skills) ? initialData.skills.join("\n") : ""
      });
    }
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const method = isEditing ? "PUT" : "POST";
    const url = isEditing
      ? `${API}/jobs/${initialData.id}`
      : `${API}/jobs`;

    const responsibilities = formData.responsibilities
      .split("\n")
      .map(s => s.trim())
      .filter(Boolean);

    const skills = formData.skills
      .split("\n")
      .map(s => s.trim().replace(/^•\s*/, ""))
      .filter(Boolean);

    const body = JSON.stringify({
      ...formData,
      responsibilities,
      skills
    });

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body
      });

      if (response.ok) {
        router.push("/admin/jobs");
        router.refresh();
      } else {
        const data = await response.json();
        alert(data.error || "Error saving job");
      }
    } catch (err) {
      console.error(err);
      alert("Error saving job");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl w-full shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
        <h3 className="font-bold text-slate-800">{isEditing ? "Edit Job Opening" : "Create New Job Opening"}</h3>
        <button
          onClick={() => router.push("/admin/jobs")}
          className="text-slate-400 hover:text-slate-600 flex items-center gap-2 text-sm font-bold"
        >
          <i className="fas fa-arrow-left text-xs"></i> Back to List
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Job Title</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all outline-none"
              placeholder="e.g. Machines Vertical Manager"
              required
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Department</label>
            <input
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all outline-none"
              placeholder="e.g. Quality & Operations"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Location</label>
            <input
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all outline-none"
              placeholder="e.g. Coimbatore"
              required
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Job Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all outline-none"
            >
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Experience Required (Short)</label>
            <input
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all outline-none"
              placeholder="e.g. 3+ Years"
              required
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Short Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="2"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all outline-none resize-none"
            placeholder="Brief one-line description of the role"
            required
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Overview / Full Description</label>
          <textarea
            name="overview"
            value={formData.overview}
            onChange={handleInputChange}
            rows="4"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all outline-none resize-none"
            placeholder="Detailed overview of the role and responsibilities"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Key Responsibilities <span className="text-slate-300 normal-case">(one per line)</span>
          </label>
          <textarea
            name="responsibilities"
            value={formData.responsibilities}
            onChange={handleInputChange}
            rows="4"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all outline-none resize-none"
            placeholder="Lead quality assurance and process improvement...&#10;Collaborate with cross-functional teams..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Qualification</label>
            <textarea
              name="qualification"
              value={formData.qualification}
              onChange={handleInputChange}
              rows="3"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all outline-none resize-none"
              placeholder="Required educational qualifications"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Experience Detail</label>
            <textarea
              name="experience_detail"
              value={formData.experience_detail}
              onChange={handleInputChange}
              rows="3"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all outline-none resize-none"
              placeholder="Detailed experience requirements"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Key Skills Required <span className="text-slate-300 normal-case">(one per line)</span>
          </label>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleInputChange}
            rows="4"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all outline-none resize-none"
            placeholder="Quality Management&#10;Process Improvement&#10;Root Cause Analysis"
          />
        </div>

        <div className="pt-4 flex items-center gap-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-indigo-600 text-white font-black uppercase tracking-widest text-sm py-4 rounded-xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/25 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <i className="fas fa-spinner fa-spin"></i> Processing...
              </span>
            ) : (
              isEditing ? "Update Job Opening" : "Publish Job Opening"
            )}
          </button>
          <button
            type="button"
            onClick={() => router.push("/admin/jobs")}
            className="px-8 py-4 bg-slate-100 text-slate-600 font-black uppercase tracking-widest text-sm rounded-xl hover:bg-slate-200 transition-all"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
