import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PAGE_TITLES: Record<string, string> = {
  "/": "SPAS LLC — Software products and services",
  "/about": "About — SPAS LLC",
  "/services": "Services — SPAS LLC",
  "/products": "Products — SPAS LLC",
  "/contact": "Contact — SPAS LLC",
  "/privacy": "Privacy Policy — SPAS LLC",
  "/terms": "Terms of Use — SPAS LLC",
};

export default function DocumentTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = PAGE_TITLES[pathname] ?? "SPAS LLC";
  }, [pathname]);
  return null;
}
