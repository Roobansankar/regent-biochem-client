"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductForm from "@/components/admin/ProductForm";
import { API } from "@/lib/api";

export default function EditLiquidProductPage() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${API}/products/${params.id}`);
        const data = await response.json();
        if (data.product) setProduct(data.product);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (params.id) fetchProduct();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="animate-spin w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full"></div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Loading Product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <p className="text-sm font-bold text-slate-500">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Edit Liquid Product</h1>
        <p className="text-sm text-slate-500 mt-1">Update the liquid product details below.</p>
      </div>
      <ProductForm initialData={product} isEditing={true} type="liquid" />
    </div>
  );
}
