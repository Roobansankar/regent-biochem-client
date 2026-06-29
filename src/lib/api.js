const raw = process.env.NEXT_PUBLIC_API_URL || "http://bio-chem.in";

// 1. Clean BASE so it NEVER ends with /api or a trailing slash /
const BASE = raw.replace(/\/api\/?$/, "").replace(/\/+$/, "");

// 2. Now API_BASE will always cleanly be http://147.93.170.42/api
const API_BASE = `${BASE}/api`;

export const API = API_BASE;

export function apiUrl(path) {
  // If the component already passed a path starting with "/api", fix it
  if (path.startsWith("/api/")) {
    return `${BASE}${path}`;
  }
  // Otherwise, append it normally to API_BASE
  return `${API_BASE}${path.startsWith("/") ? path : `/${path}`}`;
}

export function imageUrl(path) {
  if (!path) return null;
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("blob:")) return path;
  return `${BASE}${path.startsWith("/") ? path : `/${path}`}`;
}

export async function apiFetch(path, options = {}) {
  const res = await fetch(apiUrl(path), options);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}