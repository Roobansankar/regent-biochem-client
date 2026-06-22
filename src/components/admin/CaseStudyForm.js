"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CaseStudyForm({ initialData = null, isEditing = false }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(initialData?.image || null);

  const [formData, setFormData] = useState({
    slug: initialData?.slug || "",
    ref: initialData?.ref || "",
    title: initialData?.title || "",
    industry: initialData?.industry || "",
    category: initialData?.category || "",
    subindustry: initialData?.subindustry || "",
    application: initialData?.application || "",
    product: initialData?.product || "",
    solution: initialData?.solution || "",
    image: initialData?.image || "",
    customerBackground: initialData?.customerBackground || "",
    customerBackgroundPoints: initialData?.customerBackgroundPoints?.join("\n") || "",
    businessChallengesDescription: initialData?.businessChallengesDescription || "",
    businessChallenges: initialData?.businessChallenges?.join("\n") || "",
    businessChallengesQuote: initialData?.businessChallengesQuote || "",
    operationalSnapshot: Array.isArray(initialData?.operationalSnapshot) ? initialData.operationalSnapshot.map(s => `${s.value} | ${s.description}`).join("\n") : "",
    costSnapshot: Array.isArray(initialData?.costSnapshot) ? initialData.costSnapshot.map(s => `${s.value} | ${s.description}`).join("\n") : "",
    takeawaysDescription: initialData?.takeawaysDescription || "",
    takeaways: initialData?.takeaways?.join("\n") || "",
    idealUseCases: initialData?.idealUseCases?.join("\n") || "",
    outcome: initialData?.outcome || ""
  });

  useEffect(() => {
    if (initialData) {
      setImagePreview(initialData.image || null);
      setFormData({
        slug: initialData.slug || "",
        ref: initialData.ref || "",
        title: initialData.title || "",
        industry: initialData.industry || "",
        category: initialData.category || "",
        subindustry: initialData.subindustry || "",
        application: initialData.application || "",
        product: initialData.product || "",
        solution: initialData.solution || "",
        image: initialData.image || "",
        customerBackground: initialData.customerBackground || "",
        customerBackgroundPoints: Array.isArray(initialData.customerBackgroundPoints) ? initialData.customerBackgroundPoints.join("\n") : "",
        businessChallengesDescription: initialData.businessChallengesDescription || "",
        businessChallenges: Array.isArray(initialData.businessChallenges) ? initialData.businessChallenges.join("\n") : "",
        businessChallengesQuote: initialData.businessChallengesQuote || "",
        operationalSnapshot: Array.isArray(initialData.operationalSnapshot) ? initialData.operationalSnapshot.map(s => `${s.value} | ${s.description}`).join("\n") : "",
        costSnapshot: Array.isArray(initialData.costSnapshot) ? initialData.costSnapshot.map(s => `${s.value} | ${s.description}`).join("\n") : "",
        takeawaysDescription: initialData.takeawaysDescription || "",
        takeaways: Array.isArray(initialData.takeaways) ? initialData.takeaways.join("\n") : "",
        idealUseCases: Array.isArray(initialData.idealUseCases) ? initialData.idealUseCases.join("\n") : "",
        outcome: initialData.outcome || ""
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const next = { ...prev, [name]: value };
      if (name === "title" && !isEditing) {
        next.slug = value.toLowerCase().replace(/ /g, "-").replace(/[^a-z0-9-]/g, "");
      }
      return next;
    });
  };

  const loadTemplate = () => {
    setFormData({
      slug: "template-case-study",
      ref: "W/001",
      title: "Reducing Downtime with Bio-Active Cleaning",
      industry: "Automotive Manufacturing",
      category: "Automotive",
      subindustry: "Engine Component Assembly",
      application: "Aqueous parts washing for powertrain components",
      product: "GT Parts Washer",
      solution: "Implementation of GT Parts Washer with custom spray pressure profiles and bio-active aqueous chemistry to replace solvent-based cleaning.",
      image: "",
      customerBackground: "A tier-1 supplier to major global OEMs, this facility manufactures and cleans over 50,000 engine components per month across 12 continuous production lines.",
      customerBackgroundPoints: "High-volume aqueous cleaning of cast iron and aluminium parts\nContinuous 3-shift production cycle\nStrict cleanliness standards for downstream assembly",
      businessChallengesDescription: "The existing solvent-based cleaning process created several operational challenges:",
      businessChallenges: "High solvent consumption requiring replacement every 72 hours\n800 litres of hazardous waste generated weekly\nVOC emissions approaching regulatory thresholds\nAnnual waste disposal costs exceeding $45,000\nOperator health and safety concerns with solvent exposure",
      businessChallengesQuote: "The transition to bio-active cleaning eliminated our hazardous waste stream entirely while improving cleaning consistency.",
      operationalSnapshot: "85% | reduction in annual hazardous waste generated on-site\n90% | decrease in VOC emissions across all production lines\n8 wks | full transition completed with zero production downtime",
      costSnapshot: "14 mo | payback period from implementation to full ROI\n6 mo+ | cleaning fluid life extended from 3 days to over 6 months\n2 lines | additional lines added post-success, expanding coverage",
      takeawaysDescription: "<b>Bio-active cleaning</b> delivers measurable operational and environmental benefits:",
      takeaways: "Eliminated hazardous solvent dependency\nExtended fluid life from days to months\nFull VOC compliance restored\nSustainable, reduced waste footprint",
      idealUseCases: "High-volume engine and powertrain component lines\nFacilities approaching VOC compliance limits\nPlants targeting ESG and waste reduction goals\nOperations replacing legacy solvent tank systems",
      outcome: "The transition was completed over 8 weeks with zero production downtime. The bio-remediation technology proved highly effective at breaking down hydrocarbon contaminants, extending cleaning fluid life from 3 days to over 6 months. The facility achieved full ROI within 14 months and has since expanded the system to two additional production lines."
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const parseLines = (val) => val.split("\n").map(s => s.trim()).filter(Boolean);
  const parseSnapshotLines = (val) => parseLines(val).map(line => {
    const sep = line.indexOf("|");
    if (sep === -1) return { value: line.trim(), description: "" };
    return { value: line.slice(0, sep).trim(), description: line.slice(sep + 1).trim() };
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const method = isEditing ? "PUT" : "POST";
    const url = isEditing
      ? `http://localhost:5000/api/case-studies/${initialData.slug}`
      : "http://localhost:5000/api/case-studies";

    const jsonFields = ['customerBackgroundPoints', 'businessChallenges', 'operationalSnapshot', 'costSnapshot', 'takeaways', 'idealUseCases'];
    const data = new FormData();
    Object.keys(formData).filter(k => !jsonFields.includes(k)).forEach(key => data.append(key, formData[key]));
    data.set('customerBackgroundPoints', JSON.stringify(parseLines(formData.customerBackgroundPoints)));
    data.set('businessChallenges', JSON.stringify(parseLines(formData.businessChallenges)));
    data.set('operationalSnapshot', JSON.stringify(parseSnapshotLines(formData.operationalSnapshot)));
    data.set('costSnapshot', JSON.stringify(parseSnapshotLines(formData.costSnapshot)));
    data.set('takeaways', JSON.stringify(parseLines(formData.takeaways)));
    data.set('idealUseCases', JSON.stringify(parseLines(formData.idealUseCases)));
    if (imageFile) data.append('image', imageFile);

    try {
      const response = await fetch(url, {
        method,
        body: data
      });

      if (response.ok) {
        router.push("/admin/case-studies");
        router.refresh();
      } else {
        const data = await response.json();
        alert(data.error || "Error saving case study");
      }
    } catch (err) {
      console.error(err);
      alert("Error saving case study");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all outline-none";
  const labelClass = "text-xs font-bold text-slate-500 uppercase tracking-wider";
  const sectionClass = "space-y-1.5";

  return (
    <div className="bg-white rounded-2xl w-full shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
        <div className="flex items-center gap-4">
          <h3 className="font-bold text-slate-800">{isEditing ? "Edit Case Study" : "Create New Case Study"}</h3>
          {!isEditing && (
            <button type="button" onClick={loadTemplate}
              className="text-[10px] uppercase tracking-widest font-extrabold bg-green-50 text-green-700 px-3 py-1.5 rounded-lg border border-green-100 hover:bg-green-100 transition-all flex items-center gap-2"
            >
              <i className="fas fa-magic"></i> Load Template
            </button>
          )}
        </div>
        <button onClick={() => router.push("/admin/case-studies")} className="text-slate-400 hover:text-slate-600 flex items-center gap-2 text-sm font-bold">
          <i className="fas fa-arrow-left text-xs"></i> Back to List
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={sectionClass}>
            <label className={labelClass}>Title</label>
            <input name="title" value={formData.title} onChange={handleChange} className={inputClass} placeholder="Case study title" required />
          </div>
          <div className={sectionClass}>
            <label className={labelClass}>Slug (URL)</label>
            <input name="slug" value={formData.slug} onChange={handleChange} className={inputClass} placeholder="url-slug" required disabled={isEditing} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className={sectionClass}>
            <label className={labelClass}>Ref</label>
            <input name="ref" value={formData.ref} onChange={handleChange} className={inputClass} placeholder="e.g. W/001" />
          </div>
          <div className={sectionClass}>
            <label className={labelClass}>Industry</label>
            <input name="industry" value={formData.industry} onChange={handleChange} className={inputClass} placeholder="e.g. Automotive" />
          </div>
          <div className={sectionClass}>
            <label className={labelClass}>Category</label>
            <input name="category" value={formData.category} onChange={handleChange} className={inputClass} placeholder="e.g. Fabrication" />
          </div>
          <div className={sectionClass}>
            <label className={labelClass}>Sub Industry</label>
            <input name="subindustry" value={formData.subindustry} onChange={handleChange} className={inputClass} placeholder="e.g. Railway Equipment" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={sectionClass}>
            <label className={labelClass}>Application</label>
            <input name="application" value={formData.application} onChange={handleChange} className={inputClass} placeholder="e.g. Protective coating for cutting beds" />
          </div>
          <div className={sectionClass}>
            <label className={labelClass}>Product</label>
            <input name="product" value={formData.product} onChange={handleChange} className={inputClass} placeholder="e.g. E-WELD SHIELD" />
          </div>
        </div>

        <div className={sectionClass}>
          <label className={labelClass}>Solution</label>
          <textarea name="solution" value={formData.solution} onChange={handleChange} rows={3} className={inputClass + " resize-none"} />
        </div>

        <div className={sectionClass}>
          <label className={labelClass}>Image</label>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl transition-colors hover:border-indigo-300">
            {imagePreview && (
              <div className="relative group">
                <img src={imagePreview} className="w-40 h-24 object-cover rounded-xl shadow-md border border-white" alt="Preview" />
              </div>
            )}
            <div className="flex-1">
              <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" id="cs-image" />
              <label htmlFor="cs-image" className="cursor-pointer inline-flex items-center gap-2 bg-indigo-600 px-6 py-2.5 rounded-xl text-xs font-bold text-white hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20">
                <i className="fas fa-upload"></i> {imagePreview ? "Change Image" : "Upload Image"}
              </label>
              <p className="text-[11px] text-slate-400 mt-3 font-medium">Upload a case study image. Supports JPG, PNG, WebP.</p>
            </div>
          </div>
        </div>

        <div className={sectionClass}>
          <label className={labelClass}>Customer Background</label>
          <textarea name="customerBackground" value={formData.customerBackground} onChange={handleChange} rows={3} className={inputClass + " resize-none"} />
        </div>

        <div className={sectionClass}>
          <label className={labelClass}>Customer Background Points <span className="text-slate-300 normal-case">(one per line)</span></label>
          <textarea name="customerBackgroundPoints" value={formData.customerBackgroundPoints} onChange={handleChange} rows={3} className={inputClass + " resize-none"} />
        </div>

        <div className={sectionClass}>
          <label className={labelClass}>Business Challenges Description</label>
          <input name="businessChallengesDescription" value={formData.businessChallengesDescription} onChange={handleChange} className={inputClass} />
        </div>

        <div className={sectionClass}>
          <label className={labelClass}>Business Challenges <span className="text-slate-300 normal-case">(one per line)</span></label>
          <textarea name="businessChallenges" value={formData.businessChallenges} onChange={handleChange} rows={4} className={inputClass + " resize-none"} />
        </div>

        <div className={sectionClass}>
          <label className={labelClass}>Business Challenges Quote</label>
          <textarea name="businessChallengesQuote" value={formData.businessChallengesQuote} onChange={handleChange} rows={2} className={inputClass + " resize-none"} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={sectionClass}>
            <label className={labelClass}>Operational Snapshot <span className="text-slate-300 normal-case">(value | description per line)</span></label>
            <textarea name="operationalSnapshot" value={formData.operationalSnapshot} onChange={handleChange} rows={6} className={inputClass + " resize-none"} placeholder="50% | reduction in cutting bed cleaning cycles" />
          </div>
          <div className={sectionClass}>
            <label className={labelClass}>Cost Snapshot <span className="text-slate-300 normal-case">(value | description per line)</span></label>
            <textarea name="costSnapshot" value={formData.costSnapshot} onChange={handleChange} rows={6} className={inputClass + " resize-none"} placeholder="₹10/kg | production cost per unit reduced" />
          </div>
        </div>

        <div className={sectionClass}>
          <label className={labelClass}>Takeaways Description <span className="text-slate-300 normal-case">(HTML allowed)</span></label>
          <textarea name="takeawaysDescription" value={formData.takeawaysDescription} onChange={handleChange} rows={2} className={inputClass + " resize-none"} />
        </div>

        <div className={sectionClass}>
          <label className={labelClass}>Takeaways <span className="text-slate-300 normal-case">(one per line)</span></label>
          <textarea name="takeaways" value={formData.takeaways} onChange={handleChange} rows={4} className={inputClass + " resize-none"} />
        </div>

        <div className={sectionClass}>
          <label className={labelClass}>Ideal Use Cases <span className="text-slate-300 normal-case">(one per line)</span></label>
          <textarea name="idealUseCases" value={formData.idealUseCases} onChange={handleChange} rows={4} className={inputClass + " resize-none"} />
        </div>

        <div className={sectionClass}>
          <label className={labelClass}>Outcome</label>
          <textarea name="outcome" value={formData.outcome} onChange={handleChange} rows={4} className={inputClass + " resize-none"} />
        </div>

        <div className="pt-4 flex items-center gap-4">
          <button type="submit" disabled={loading}
            className="flex-1 bg-indigo-600 text-white font-black uppercase tracking-widest text-sm py-4 rounded-xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/25 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2"><i className="fas fa-spinner fa-spin"></i> Processing...</span>
            ) : (
              isEditing ? "Update Case Study" : "Publish Case Study"
            )}
          </button>
          <button type="button" onClick={() => router.push("/admin/case-studies")}
            className="px-8 py-4 bg-slate-100 text-slate-600 font-black uppercase tracking-widest text-sm rounded-xl hover:bg-slate-200 transition-all"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
