const raw = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
const BASE = raw.replace(/\/+$/, "");
const API_BASE = `${BASE}/api`;

export const API = API_BASE;

export function apiUrl(path) {
  return `${API_BASE}${path}`;
}

export function imageUrl(path) {
  if (!path) return null;
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("blob:")) return path;
  return `${BASE}${path}`;
}

export async function apiFetch(path, options = {}) {
  const res = await fetch(apiUrl(path), options);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}
