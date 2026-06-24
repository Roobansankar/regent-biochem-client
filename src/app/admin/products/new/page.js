"use client";

import ProductForm from "@/components/admin/ProductForm";

export default function NewProductPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Create Product</h1>
        <p className="text-sm text-slate-500 mt-1">Fill in the details below to add a new product to the navbar.</p>
      </div>
      <ProductForm type="system" />
    </div>
  );
}
