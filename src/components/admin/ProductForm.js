"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { API, imageUrl } from "@/lib/api";

const SYSTEM_CATEGORIES = ["Cleaning Systems", "Paint Removal Systems", "Descaling Systems"];
const LIQUID_CATEGORIES = ["Cleaners", "Safeweld"];

const LIQUID_SUBCATEGORIES = [
  { label: "General Cleaners", value: "general-cleaners" },
  { label: "Bio-circle Cleaners", value: "bio-circle-cleaners" },
  { label: "Acidic Cleaners", value: "acidic-cleaners" },
  { label: "Finishers", value: "finishers" },
  { label: "Anti-spatters", value: "anti-spatters" },
  { label: "Weld Cleaners", value: "weld-cleaners" },
  { label: "Surface Protectors", value: "surface-protectors" },
];

const INITIAL_MODEL = {
  model: "", dimensions: "", height: "", rackDiameter: "", usefulHeight: "",
  payload: "", tankCapacity: "", weight: "", connectedLoad: "", powerSupply: "",
  pumpFlow: "", heatingPower: "", treatmentTemp: "", oxygenCompressor: "",
};

const MetaBox = ({ title, children }) => (
  <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
    <div className="px-4 py-3 bg-slate-50 border-b border-slate-200">
      <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-600">{title}</h4>
    </div>
    <div className="p-4 space-y-3">{children}</div>
  </div>
);

const SectionTitle = ({ label, className = "" }) => (
  <div className={`flex items-center gap-3 mb-4 ${className}`}>
    <div className="w-1 h-5 bg-indigo-600 rounded-full shrink-0"></div>
    <h3 className="text-xs font-black uppercase tracking-widest text-slate-700">{label}</h3>
  </div>
);

const AddBtn = ({ onClick, label }) => (
  <button type="button" onClick={onClick}
    className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5">
    <i className="fas fa-plus text-[10px]"></i> {label}
  </button>
);

const RemoveBtn = ({ onClick }) => (
  <button type="button" onClick={onClick}
    className="w-8 h-8 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center hover:bg-rose-600 hover:text-white shrink-0">
    <i className="fas fa-times text-xs"></i>
  </button>
);

export default function ProductForm({ initialData = null, isEditing = false, type = "system" }) {
  const router = useRouter();
  const categories = type === "liquid" ? LIQUID_CATEGORIES : SYSTEM_CATEGORIES;
  const isLiquid = type === "liquid";
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "", slug: "", category: "", subcategory: "", subtitle: "", description: "",
    icon: "fa-box", img: "", isThisRightFor: "", application: "", whyChoose: "",
    fullDescription: "", packaging: "", recommendedWith: "", extraDesc: "",
    meta_title: "", meta_description: "", meta_keywords: "",
    isFlagship: false,
    industry: "", contamination_type: "", product_brand: "", cleaner_base: "", material: "", quality_seal: "",
  });

  const [imageFiles, setImageFiles] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [badgeImageFiles, setBadgeImageFiles] = useState([]);
  const [existingBadgeImages, setExistingBadgeImages] = useState([]);
  const [badgeImagePreviews, setBadgeImagePreviews] = useState([]);
  const [descBullets, setDescBullets] = useState([]);
  const [features, setFeatures] = useState([]);
  const [labels, setLabels] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [caseStudies, setCaseStudies] = useState([]);
  const [faq, setFaq] = useState([]);
  const [technicalSpecs, setTechnicalSpecs] = useState([]);
  const [availableModels, setAvailableModels] = useState([]);
  const [specificationFields, setSpecificationFields] = useState([]);
  const [recommendedCleaners, setRecommendedCleaners] = useState([]);
  const [groupProducts, setGroupProducts] = useState([]);
  const [specData, setSpecData] = useState({ headers: [], rows: [] });
  const [filterGroups, setFilterGroups] = useState([]);

  useEffect(() => {
    fetch(`${API}/product-filters`)
      .then(r => r.json())
      .then(d => setFilterGroups(d.groups || []))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "", slug: initialData.slug || "",
        category: initialData.category || "", subcategory: initialData.subcategory || "",
        subtitle: initialData.subtitle || "",
        description: initialData.description || initialData.desc || "",
        icon: initialData.icon || "fa-box", img: initialData.img || "",
        isThisRightFor: initialData.isThisRightFor || "",
        application: initialData.application || "",
        whyChoose: initialData.whyChoose || "",
        fullDescription: initialData.fullDescription || "",
        packaging: initialData.packaging || "",
        recommendedWith: initialData.recommendedWith || "",
        extraDesc: initialData.extraDesc || "",
        meta_title: initialData.meta_title || "",
        meta_description: initialData.meta_description || "",
        meta_keywords: initialData.meta_keywords || "",
        isFlagship: initialData.isFlagship ? true : false,
        industry: initialData.industry || "",
        contamination_type: initialData.contamination_type || "",
        product_brand: initialData.product_brand || "",
        cleaner_base: initialData.cleaner_base || "",
        material: initialData.material || "",
        quality_seal: initialData.quality_seal || "",
      });
      const imgs = initialData.images || [];
      setExistingImages(imgs); setImagePreviews(imgs);
      const badImgs = initialData.badgeImages || [];
      setExistingBadgeImages(badImgs); setBadgeImagePreviews(badImgs);
      setDescBullets(initialData.descBullets || []);
      setFeatures(initialData.features || []);
      setLabels(initialData.labels || []);
      setSimilarProducts(initialData.similarProducts || []);
      setCaseStudies(initialData.caseStudies || []);
      setFaq(initialData.faq || []);
      setTechnicalSpecs(initialData.technicalSpecs || []);
      setAvailableModels(initialData.availableModels || []);
      setSpecificationFields(initialData.specificationFields || []);
      setRecommendedCleaners(initialData.recommendedCleaner
        ? (Array.isArray(initialData.recommendedCleaner) ? initialData.recommendedCleaner : [initialData.recommendedCleaner])
        : []);
      setGroupProducts(initialData.products || []);
      setSpecData(initialData.specData || { headers: [], rows: [] });
    }
  }, [initialData]);

  const h = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const d = { ...prev, [name]: value };
      if (name === "title" && !isEditing)
        d.slug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
      return d;
    });
  };

  const handleFiles = (e) => {
    const files = Array.from(e.target.files);
    const slots = 5 - (imageFiles.length + existingImages.length);
    if (slots <= 0) { alert("Max 5 images"); return; }
    const add = files.slice(0, slots);
    setImageFiles(p => [...p, ...add]);
    setImagePreviews(p => [...p, ...add.map(f => URL.createObjectURL(f))]);
  };

  const removeImg = (idx) => {
    const total = existingImages.length;
    if (idx < total) {
      setExistingImages(p => p.filter((_, i) => i !== idx));
      setImagePreviews(p => p.filter((_, i) => i !== idx));
    } else {
      const fi = idx - total;
      setImageFiles(p => p.filter((_, i) => i !== fi));
      setImagePreviews(p => p.filter((_, i) => i !== idx));
    }
  };

  const handleBadgeFiles = (e) => {
    const files = Array.from(e.target.files);
    setBadgeImageFiles(p => [...p, ...files]);
    setBadgeImagePreviews(p => [...p, ...files.map(f => URL.createObjectURL(f))]);
  };

  const removeBadgeImg = (idx) => {
    const total = existingBadgeImages.length;
    if (idx < total) {
      setExistingBadgeImages(p => p.filter((_, i) => i !== idx));
      setBadgeImagePreviews(p => p.filter((_, i) => i !== idx));
    } else {
      const fi = idx - total;
      setBadgeImageFiles(p => p.filter((_, i) => i !== fi));
      setBadgeImagePreviews(p => p.filter((_, i) => i !== idx));
    }
  };

  const arrAdd = (s) => s(p => [...p, ""]);
  const arrRemove = (s, idx) => s(p => p.filter((_, i) => i !== idx));
  const arrSet = (s, idx, val) => s(p => { const u = [...p]; u[idx] = val; return u; });

  const remainingImg = 5 - (imageFiles.length + existingImages.length);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const method = isEditing ? "PUT" : "POST";
    const url = isEditing ? `${API}/products/${initialData.id}` : `${API}/products`;
    const fd = new FormData();
    Object.entries(formData).forEach(([k, v]) => fd.append(k, v));
    fd.append("existing_images", JSON.stringify(existingImages));
    imageFiles.forEach(f => fd.append("images", f));
    fd.append("existing_badgeImages", JSON.stringify(existingBadgeImages));
    badgeImageFiles.forEach(f => fd.append("badgeImages", f));
    fd.append("descBullets", JSON.stringify(descBullets));
    fd.append("features", JSON.stringify(features));
    fd.append("labels", JSON.stringify(labels));
    fd.append("similarProducts", JSON.stringify(similarProducts));
    fd.append("caseStudies", JSON.stringify(caseStudies));
    fd.append("faq", JSON.stringify(faq));
    fd.append("technicalSpecs", JSON.stringify(technicalSpecs));
    fd.append("availableModels", JSON.stringify(availableModels));
    fd.append("specificationFields", JSON.stringify(specificationFields));
    fd.append("recommendedCleaner", JSON.stringify(recommendedCleaners));
    fd.append("products", JSON.stringify(groupProducts));
    fd.append("specData", JSON.stringify(specData));
    try {
      const r = await fetch(url, { method, body: fd });
      if (r.ok) { router.push(isLiquid ? "/admin/liquid-products" : "/admin/products"); router.refresh(); }
      else { const err = await r.json(); alert(err.error || "Error"); }
    } catch (err) { alert("Error"); }
    finally { setLoading(false); }
  };

  const fieldClass = "w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all";
  const textareaClass = "w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none";

  const handleFormSubmit = (e) => {
    e.preventDefault();
    submit(e);
  };

  return (
    <form onSubmit={handleFormSubmit} className="bg-white rounded-2xl shadow-sm border border-slate-200">
      {/* ─── TOP BAR ─── */}
      <div className="px-6 py-4 border-b border-slate-200 bg-white flex items-center justify-between sticky top-0 z-10">
        <button type="button" onClick={() => router.push("/admin/products")}
          className="text-slate-400 hover:text-slate-600 flex items-center gap-2 text-sm font-bold">
          <i className="fas fa-arrow-left text-xs"></i> Back
        </button>
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => router.push("/admin/products")}
            className="px-5 py-2.5 bg-slate-100 text-slate-600 font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-slate-200 transition-all">
            Cancel
          </button>
          <button type="submit" disabled={loading}
            className="px-6 py-2.5 bg-indigo-600 text-white font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 disabled:opacity-70 transition-all">
            {loading ? <span><i className="fas fa-spinner fa-spin mr-1"></i> Saving...</span> : (isEditing ? "Update" : "Publish")}
          </button>
        </div>
      </div>

      {/* ─── TITLE (WordPress-style) ─── */}
      <div className="px-6 pt-6 pb-0">
        <input name="title" value={formData.title} onChange={h} placeholder="Add product title"
          className="w-full text-2xl font-bold text-slate-800 placeholder-slate-300 border-0 border-b-2 border-transparent hover:border-slate-200 focus:border-indigo-500 outline-none pb-3 transition-all bg-transparent"
          required />
      </div>

      {/* ─── TWO COLUMN LAYOUT ─── */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ═══ LEFT COLUMN (Main Content) ═══ */}
        <div className="lg:col-span-2 space-y-10">

          {/* ── SUBTITLE + DESCRIPTION ── */}
          <div>
            <SectionTitle label="Product Details" />
            <div className="space-y-4">
              <div>
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 block">Subtitle</label>
                <input name="subtitle" value={formData.subtitle} onChange={h} placeholder="e.g. Automatic"
                  className={fieldClass} />
              </div>
              <div>
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 block">Short Description</label>
                <textarea name="description" value={formData.description} onChange={h} rows="3" placeholder="Brief product description for the hero section"
                  className={textareaClass} />
              </div>
            </div>
          </div>

          {/* ── AVAILABLE MODELS / PACK SIZES ── */}
          <div>
            <SectionTitle label={isLiquid ? "Available Pack Sizes" : "Available Models"} />
            <div className="space-y-2">
              {availableModels.map((m, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <input value={m.model} onChange={e => arrSet(setAvailableModels, i, { ...m, model: e.target.value })}
                    className={fieldClass} placeholder={isLiquid ? `Pack size ${i + 1}` : `Model ${i + 1} name`} />
                  <RemoveBtn onClick={() => arrRemove(setAvailableModels, i)} />
                </div>
              ))}
              <AddBtn onClick={() => setAvailableModels(p => [...p, { ...INITIAL_MODEL }])} label={isLiquid ? "Add Pack Size" : "Add Model"} />
            </div>
          </div>

          {/* ── IS THIS RIGHT FOR YOU ── */}
          <div>
            <SectionTitle label="Is This Product Right for You?" />
            <textarea name="isThisRightFor" value={formData.isThisRightFor} onChange={h} rows="5"
              className={textareaClass} placeholder={"One bullet per line:\n\u2022 You need to remove heavy grease\n\u2022 You want a VOC-free solution"} />
            <p className="text-[11px] text-slate-400 mt-1.5 font-medium">Each line becomes a bullet point</p>
          </div>

          {/* ── APPLICATION ── */}
          <div>
            <SectionTitle label="Application" />
            <textarea name="application" value={formData.application} onChange={h} rows="5"
              className={textareaClass} placeholder={"One bullet per line:\n\u2022 Cleaning machine parts\n\u2022 Degreasing industrial components"} />
            <p className="text-[11px] text-slate-400 mt-1.5 font-medium">Each line becomes a bullet point</p>
          </div>

          {/* ── SPECIFICATION TABLE ── */}
          {!isLiquid && (<div>
            <SectionTitle label="Specification Table" />
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="px-3 py-2.5 text-left font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200 w-48">Parameter</th>
                    {specData.headers.map((h, i) => (
                      <th key={i} className="px-2 py-2 border-b border-slate-200">
                        <div className="flex items-center gap-1">
                          <input value={h} onChange={e => setSpecData(p => { const u = { ...p, headers: [...p.headers] }; u.headers[i] = e.target.value; return u; })}
                            className="w-full px-2 py-1 bg-white border border-slate-200 rounded text-xs outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-center"
                            placeholder="Column name" />
                          <button type="button" onClick={() => setSpecData(p => ({ ...p, headers: p.headers.filter((_, j) => j !== i), rows: p.rows.map(r => ({ ...r, values: r.values.filter((_, j) => j !== i) })) }))}
                            className="text-rose-400 hover:text-rose-600 shrink-0">
                            <i className="fas fa-times text-[10px]"></i>
                          </button>
                        </div>
                      </th>
                    ))}
                    <th className="px-2 py-2 border-b border-slate-200 w-10">
                      <button type="button" onClick={() => setSpecData(p => ({ ...p, headers: [...p.headers, ""], rows: p.rows.map(r => ({ ...r, values: [...r.values, ""] })) }))}
                        className="text-indigo-500 hover:text-indigo-700 text-xs">
                        <i className="fas fa-plus"></i>
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {specData.rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-3 py-2 border-b border-slate-100">
                        <div className="flex items-center gap-1">
                          <input value={row.label} onChange={e => setSpecData(p => { const u = { ...p, rows: p.rows.map(r => ({ ...r })) }; u.rows[i].label = e.target.value; return u; })}
                            className="w-full px-2 py-1 bg-white border border-slate-200 rounded text-xs outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                            placeholder="Parameter name" />
                          <button type="button" onClick={() => setSpecData(p => ({ ...p, rows: p.rows.filter((_, j) => j !== i) }))}
                            className="text-rose-400 hover:text-rose-600 shrink-0">
                            <i className="fas fa-times text-[10px]"></i>
                          </button>
                        </div>
                      </td>
                      {row.values.map((v, j) => (
                        <td key={j} className="px-2 py-2 border-b border-slate-100">
                          <input value={v} onChange={e => setSpecData(p => { const u = { ...p, rows: p.rows.map(r => ({ ...r, values: [...r.values] })) }; u.rows[i].values[j] = e.target.value; return u; })}
                            className="w-full px-2 py-1 bg-white border border-slate-200 rounded text-xs outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-center"
                            placeholder="Value" />
                        </td>
                      ))}
                      {specData.headers.length > 0 && <td className="border-b border-slate-100"></td>}
                    </tr>
                  ))}
                  <tr>
                    <td className="px-3 py-2" colSpan={specData.headers.length + 2}>
                      <button type="button" onClick={() => setSpecData(p => ({ ...p, rows: [...p.rows, { label: "", values: p.headers.map(() => "") }] }))}
                        className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5">
                        <i className="fas fa-plus text-[10px]"></i> Add Row
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>)}

          {/* ── WHY CHOOSE ── */}
          <div>
            <SectionTitle label="Why Choose This Product?" />
            <textarea name="whyChoose" value={formData.whyChoose} onChange={h} rows="6"
              className={textareaClass} placeholder={"One point per line:\nBest-in-Class Degreasing: Effortlessly removes heavy oil\nSmart Bio-Technology: Powered by microorganisms"} />
            <p className="text-[11px] text-slate-400 mt-1.5 font-medium">Each line becomes a separate card</p>
          </div>

          {/* ── FAQ ── */}
          <div>
            <SectionTitle label="FAQ" />
            <div className="space-y-3">
              {faq.map((item, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-indigo-600 uppercase">Q{i + 1}</span>
                    <button type="button" onClick={() => arrRemove(setFaq, i)}
                      className="text-[11px] font-bold text-rose-500 hover:text-rose-700">Remove</button>
                  </div>
                  <div className="space-y-2">
                    <input value={item.q} onChange={e => setFaq(p => { const u = [...p]; u[i] = { ...u[i], q: e.target.value }; return u; })}
                      className={fieldClass} placeholder="Question" />
                    <textarea value={item.a} onChange={e => setFaq(p => { const u = [...p]; u[i] = { ...u[i], a: e.target.value }; return u; })}
                      rows="2" className={textareaClass} placeholder="Answer" />
                  </div>
                </div>
              ))}
              <AddBtn onClick={() => setFaq(p => [...p, { q: "", a: "" }])} label="Add FAQ" />
            </div>
          </div>

          {/* ── SIMILAR PRODUCTS ── */}
          <div>
            <SectionTitle label="Similar Products" />
            <div className="space-y-2">
              {similarProducts.map((item, i) => (
                <div key={i} className="flex gap-2">
                  <input value={item} onChange={e => arrSet(setSimilarProducts, i, e.target.value)}
                    className={fieldClass} placeholder="Product slug (e.g. htw-ii-max-eco)" />
                  <RemoveBtn onClick={() => arrRemove(setSimilarProducts, i)} />
                </div>
              ))}
              <AddBtn onClick={() => arrAdd(setSimilarProducts)} label="Add Similar Product" />
            </div>
          </div>
        </div>

        {/* ═══ RIGHT COLUMN (Sidebar / Meta Boxes) ═══ */}
        <div className="space-y-5">

          {/* ── CATEGORY ── */}
          <MetaBox title="Category">
            <div>
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 block">Category *</label>
                <select name="category" value={formData.category} onChange={h}
                className={fieldClass} required>
                <option value="">Select category</option>
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
            <div>
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 block">Slug (URL) *</label>
              <input name="slug" value={formData.slug} onChange={h}
                className={fieldClass} placeholder="htw-ii-bio" required />
            </div>
            {isLiquid && (
              <div>
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 block">Subcategory</label>
                <select name="subcategory" value={formData.subcategory} onChange={h}
                  className={fieldClass}>
                  <option value="">— None —</option>
                  {LIQUID_SUBCATEGORIES.map(sc => <option key={sc.value} value={sc.value}>{sc.label}</option>)}
                </select>
              </div>
            )}
          </MetaBox>

          {/* ── PRODUCT GALLERY ── */}
          <MetaBox title={`Product Gallery (${imagePreviews.length}/5)`}>
            {imagePreviews.length > 0 && (
              <div className="grid grid-cols-2 gap-2">
                {imagePreviews.map((src, i) => (
                  <div key={i} className="relative group aspect-square rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                    <img src={imageUrl(src)} className="w-full h-full object-cover" alt="" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button type="button" onClick={() => removeImg(i)}
                        className="w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 text-xs">
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {remainingImg > 0 && (
              <div>
                <input type="file" accept="image/*" multiple onChange={handleFiles} className="hidden" id="img-upload" />
                <label htmlFor="img-upload"
                  className="cursor-pointer flex items-center justify-center gap-2 w-full py-3 bg-slate-50 border-2 border-dashed border-slate-300 rounded-lg text-xs font-bold text-slate-500 hover:border-indigo-400 hover:text-indigo-600 transition-all">
                  <i className="fas fa-cloud-upload-alt"></i> Upload ({remainingImg} left)
                </label>
                <p className="text-[11px] text-slate-400 mt-2 font-medium">Recommended size: 800 × 800 px (square, 1:1 ratio). Auto-converted to WebP.</p>
              </div>
            )}
          </MetaBox>

          {/* ── HIGHLIGHTS ── */}
          <MetaBox title="Highlights">
            {technicalSpecs.map((s, i) => (
              <div key={i} className="flex gap-2 items-start">
                <div className="flex-1 space-y-1">
                  <input value={s.label} onChange={e => setTechnicalSpecs(p => { const u = [...p]; u[i] = { ...u[i], label: e.target.value }; return u; })}
                    className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                    placeholder="Label" />
                  <input value={s.value} onChange={e => setTechnicalSpecs(p => { const u = [...p]; u[i] = { ...u[i], value: e.target.value }; return u; })}
                    className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                    placeholder="Value" />
                </div>
                <RemoveBtn onClick={() => arrRemove(setTechnicalSpecs, i)} />
              </div>
            ))}
            <AddBtn onClick={() => setTechnicalSpecs(p => [...p, { label: "", value: "" }])} label="Add Spec" />
          </MetaBox>

          {/* ── RECOMMENDED CLEANERS ── */}
          <MetaBox title="Recommended Cleaners">
            {recommendedCleaners.map((rc, i) => (
              <div key={i} className="space-y-2 p-3 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400">#{i + 1}</span>
                  <RemoveBtn onClick={() => setRecommendedCleaners(p => p.filter((_, j) => j !== i))} />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Name</label>
                  <input value={rc.name} onChange={e => setRecommendedCleaners(p => { const u = [...p]; u[i] = { ...u[i], name: e.target.value }; return u; })}
                    className={fieldClass} placeholder="Bio Circle L Liquid" />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Slug</label>
                  <input value={rc.slug} onChange={e => setRecommendedCleaners(p => { const u = [...p]; u[i] = { ...u[i], slug: e.target.value }; return u; })}
                    className={fieldClass} placeholder="biochem-bio-circle-l" />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Short Description</label>
                  <input value={rc.desc} onChange={e => setRecommendedCleaners(p => { const u = [...p]; u[i] = { ...u[i], desc: e.target.value }; return u; })}
                    className={fieldClass} placeholder="Short description" />
                </div>
              </div>
            ))}
            <AddBtn onClick={() => setRecommendedCleaners(p => [...p, { name: "", slug: "", desc: "" }])} label="Add Recommended Cleaner" />
          </MetaBox>

          {isLiquid && (
            <MetaBox title="Labels / Badges">
              {labels.map((item, i) => (
                <div key={i} className="flex gap-2">
                  <input value={item} onChange={e => arrSet(setLabels, i, e.target.value)}
                    className={fieldClass} placeholder="VOC Free" />
                  <RemoveBtn onClick={() => arrRemove(setLabels, i)} />
                </div>
              ))}
              <AddBtn onClick={() => arrAdd(setLabels)} label="Add Label" />
              {/* Badge Image Uploads */}
              {badgeImagePreviews.length > 0 && (
                <div className="grid grid-cols-3 gap-2 mt-3">
                  {badgeImagePreviews.map((src, i) => (
                    <div key={i} className="relative group aspect-square rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                      <img src={imageUrl(src)} className="w-full h-full object-cover" alt="" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button type="button" onClick={() => removeBadgeImg(i)}
                          className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 text-[10px]">
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <input type="file" accept="image/*" multiple onChange={handleBadgeFiles} className="hidden" id="badge-upload" />
              <label htmlFor="badge-upload"
                className="cursor-pointer flex items-center justify-center gap-2 w-full py-2.5 mt-2 bg-slate-50 border-2 border-dashed border-slate-300 rounded-lg text-xs font-bold text-slate-500 hover:border-indigo-400 hover:text-indigo-600 transition-all">
                <i className="fas fa-cloud-upload-alt"></i> Upload Badge Images
              </label>
            </MetaBox>
          )}

          {/* ── FLAGSHIP ── */}
          <MetaBox title="Flagship">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" name="isFlagship" checked={formData.isFlagship}
                onChange={e => setFormData(p => ({ ...p, isFlagship: e.target.checked }))}
                className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
              <span className="text-xs font-bold text-slate-600">Mark as Flagship Product</span>
            </label>
            <p className="text-[11px] text-slate-400 mt-1">Flagship products appear on the home page featured section.</p>
          </MetaBox>

          {/* ── FILTERS ── */}
          <MetaBox title="Filters">
            {filterGroups.map(group => {
              const fieldMap = {
                "Application": "application",
                "Industry": "industry",
                "Contamination Type": "contamination_type",
                "Product Brand": "product_brand",
                "Cleaner Base": "cleaner_base",
                "Material": "material",
                "Quality Seal": "quality_seal",
              };
              const name = fieldMap[group.title];
              if (!name) return null;
              const selected = (formData[name] || "").split(",").map(s => s.trim()).filter(Boolean);
              return (
                <div key={group.title}>
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 block">{group.title}</label>
                  <div className="flex flex-wrap gap-1.5">
                    {group.options.map((opt, idx) => {
                      const checked = selected.includes(opt);
                      return (
                        <button key={idx} type="button" onClick={() => {
                          const current = formData[name] || "";
                          const arr = current.split(",").map(s => s.trim()).filter(Boolean);
                          const next = checked ? arr.filter(v => v !== opt) : [...arr, opt];
                          setFormData(p => ({ ...p, [name]: next.join(",") }));
                        }}
                          className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all ${checked ? "bg-indigo-600 text-white border-indigo-600" : "bg-slate-50 text-slate-500 border-slate-200 hover:border-indigo-300"}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </MetaBox>

          {/* ── SEO ── */}
          <MetaBox title="SEO">
            <div>
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 block">Meta Title</label>
              <input name="meta_title" value={formData.meta_title} onChange={h}
                className={fieldClass} placeholder="Product SEO title" />
            </div>
            <div>
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 block">Meta Description</label>
              <textarea name="meta_description" value={formData.meta_description} onChange={h} rows="3"
                className={textareaClass} placeholder="Brief description for search results" />
            </div>
            <div>
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 block">Meta Keywords</label>
              <input name="meta_keywords" value={formData.meta_keywords} onChange={h}
                className={fieldClass} placeholder="keyword1, keyword2, keyword3" />
            </div>
          </MetaBox>

        </div>
      </div>

    </form>
  );
}
