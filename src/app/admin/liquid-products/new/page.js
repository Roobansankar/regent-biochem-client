"use client";

import ProductForm from "@/components/admin/ProductForm";

export default function NewLiquidProductPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Create Liquid Product</h1>
        <p className="text-sm text-slate-500 mt-1">Add a new Cleaner or Safeweld product.</p>
      </div>
      <ProductForm type="liquid" />
    </div>
  );
}
