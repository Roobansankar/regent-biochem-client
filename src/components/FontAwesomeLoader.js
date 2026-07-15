"use client";

import { useEffect } from "react";

const FA_HREF = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";

export default function FontAwesomeLoader() {
  useEffect(() => {
    if (document.querySelector(`link[href="${FA_HREF}"]`)) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = FA_HREF;
    document.head.appendChild(link);
  }, []);

  return null;
}
