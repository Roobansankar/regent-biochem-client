"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { API } from "@/lib/api";

const navData = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Industries",
    href: "#",
    mega: true,
    columns: [
      {
        label: "Mobility & Transport",
          items: [
            { name: "Automotive", href: "/industries/automotive" },
            { name: "Aerospace & Defense", href: "/industries/aerospace-defense" },
            { name: "Railways", href: "/industries/railways" },
            { name: "Shipbuilding & Shipyards", href: "/industries/shipbuilding-shipyards" },
          ],
      },
      {
        label: "Industrial Engineering",
          items: [
            { name: "Engineering & Fabrication", href: "/industries/engineering-fabrication" },
            { name: "Machining", href: "/industries/machining" },
            { name: "Metal Working", href: "/industries/metal-working" },
          ],
      },
      {
        label: "Process & Utilities",
          items: [
            { name: "Electronics", href: "/industries/electronics" },
            { name: "Oil & Gas", href: "/industries/oil-gas" },
            { name: "Food & Beverages", href: "/industries/food-beverage" },
            { name: "Rubber & Plastics", href: "/industries/rubber-plastics" },
            { name: "Printing & Packaging", href: "/industries/printing-packaging" },
          ],
      },
      {
        label: "Support Services",
          items: [
            { name: "MRO (Maintenance, Repair, and Operations)", href: "/industries/mro-maintenance" },
          ],
      },
    ],
  },
  {
    name: "Products",
    href: "/products",
    mega: true,
    columns: [
      {
        label: "Cleaning Systems",
        items: [],
      },
      {
        label: "Paint Removal Systems",
        items: [],
      },
      {
        label: "Descaling Systems",
        items: [],
      },
      {
        label: "Cleaners",
        items: [
          { name: "General cleaners", href: "/products/general-cleaners" },
          { name: "Bio-circle cleaners", href: "/products/bio-circle-cleaners" },
          { name: "Acidic cleaners", href: "/products/acidic-cleaners" },
          { name: "Finishers", href: "/products/finishers" },
        ],
      },
      {
        label: "Safeweld",
        items: [
          { name: "Anti-spatters", href: "/products/anti-spatters" },
          { name: "Weld cleaners", href: "/products/weld-cleaners" },
          { name: "Surface protectors", href: "/products/surface-protectors" },
        ],
      },
    ],
  },
  {
    name: "Services",
    href: "#",
    mega: true,
    columns: [
      {
        label: "Fre Flo",
        items: [
          { name: "Pipeline Cleaning Solutions", href: "/services/pipeline" },
          { name: "Cooling Tower Cleaning", href: "/services/cooling-tower" },
          { name: "Injection Mould Cleaning", href: "/services/mould-injection" },
          { name: "Heat Exchanger Cleaning", href: "/services/heat-exchanger" },
          { name: "Operational Impact Assessment", href: "/services/impact-assessment" },
        ],
      },
      {
        type: "explore-card",
        to: "/products",
        image: "/freeflo.png",
        heading: "Explore Our Products",
        subheading: "Advanced cleaning & surface technology solutions tailored for your industry.",
        button: "View All Products",
      },
    ],
  },
  {
    name: "Resources",
    href: "#",
    children: [
      { name: "Blog", href: "/blog" },
      { name: "FAQ", href: "/faq" },
      { name: "Case Studies", href: "/case-studies" },
    ],
  },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarProducts, setNavbarProducts] = useState([]);
  const pathname = usePathname();
  const timeoutRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API}/products/all`);
        const data = await res.json();
        if (data.products) setNavbarProducts(data.products);
      } catch (err) {
        console.error("Failed to fetch navbar products:", err);
      }
    };
    fetchProducts();
  }, []);

  const getColumnItems = (col) => {
    const dynamicCategories = ["Cleaning Systems", "Paint Removal Systems", "Descaling Systems"];
    if (dynamicCategories.includes(col.label)) {
      const filtered = navbarProducts.filter(p => p.category === col.label);
      if (filtered.length > 0) {
        return filtered.map(p => ({
          name: p.title,
          href: `/products/${p.slug}`,
        }));
      }
    }
    return col.items;
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setActiveMenu(null);
  };

  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const toggleMobileSubmenu = (name) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // Close menus on path change
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <>
      {/* ─── TOP HEADER (desktop only) ─── */}
      <header className="hidden lg:flex justify-center items-center py-1.5 border-b border-brand-border bg-white">
        <Link href="/" onClick={() => window.scrollTo(0, 0)}>
          <img src="/logo.png" alt="Bio-Chem Logo" className="h-14 w-auto" />
        </Link>
      </header>

      {/* ─── STICKY NAV ─── */}
      <nav className="sticky top-0 z-50 bg-green shadow-md border-b border-green-dark">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[64px]">
            {/* Mobile Logo */}
            <Link href="/" onClick={() => window.scrollTo(0, 0)} className="lg:hidden flex-shrink-0">
              <img src="/logo.png" alt="Bio-Chem Logo" className="h-10 w-auto brightness-0 invert" />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center justify-between w-full h-full">
              {navData.map((link) => {
                const hasChildren = link.children || link.mega;
                const NavItem = hasChildren && link.href === "#" ? "button" : Link;
                
                return (
                  <li 
                    key={link.name} 
                    className="h-full relative flex items-center"
                    onMouseEnter={() => hasChildren && handleMouseEnter(link.name)}
                    onMouseLeave={() => hasChildren && handleMouseLeave()}
                  >
                    <NavItem
                      href={link.href !== "#" ? link.href : undefined}
                      onClick={link.name === "Home" ? () => window.scrollTo(0, 0) : undefined}
                      className={`nav-link flex items-center h-full text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                        pathname === link.href || activeMenu === link.name
                          ? "text-white"
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      {link.name}
                      {hasChildren && <i className={`fas fa-chevron-down ml-1.5 text-[10px] transition-transform duration-200 ${activeMenu === link.name ? 'rotate-180' : ''}`}></i>}
                    </NavItem>

                    {/* Standard Dropdown */}
                    {link.children && activeMenu === link.name && (
                      <div className="absolute top-full left-0 w-64 bg-white shadow-xl border-t-2 border-green py-4 rounded-b-lg">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={closeMenu}
                            className="block px-6 py-2.5 text-sm font-semibold text-brand-black hover:text-green hover:bg-green-light transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Mega Menu */}
                    {link.mega && activeMenu === link.name && (
                      <div className={`fixed left-0 w-full bg-white shadow-2xl border-t border-brand-border animate-fade-in transition-all duration-300 ${
                        isScrolled ? "top-[64px]" : "top-[131px]"
                      }`}>
                        <div className={`max-w-[1600px] mx-auto grid gap-8 p-10 ${
                          link.name === "Products" ? "grid-cols-5" : link.name === "Industries" ? "grid-cols-4" : "grid-cols-[1fr_1.5fr]"
                        }`}>
                          {link.columns.map((col) => (
                            col.type === "explore-card" ? (
                              <Link
                                key="explore-card"
                                href={col.to}
                                onClick={closeMenu}
                                className="block bg-gradient-to-br from-green/5 to-green/10 rounded-xl border border-green/20 overflow-hidden hover:shadow-lg hover:border-green/40 transition-all duration-300 group"
                              >
                                <div className="flex items-center gap-5 p-5">
                                  <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-extrabold text-brand-black mb-1">{col.heading}</h4>
                                    <p className="text-xs text-brand-muted leading-relaxed mb-3">{col.subheading}</p>
                                    <span className="inline-block text-xs font-bold text-green bg-green/10 px-4 py-1.5 rounded-full group-hover:bg-green group-hover:text-white transition-colors">
                                      {col.button} →
                                    </span>
                                  </div>
                                </div>
                              </Link>
                            ) : (
                              <div key={col.label}>
                                <h4 className="text-xs font-black uppercase tracking-widest text-green mb-5 pb-2 border-b border-green-light">
                                  {col.label}
                                </h4>
                                <div className="flex flex-col gap-3">
                                  {getColumnItems(col).map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      onClick={closeMenu}
                                      className="text-sm font-medium text-brand-muted hover:text-green hover:translate-x-1 transition-all"
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

          

            {/* Hamburger */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* ─── MOBILE MENU ─── */}
        <div 
          className={`lg:hidden fixed inset-0 z-[60] transition-all duration-300 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Overlay */}
          <div onClick={closeMenu} className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

          {/* Drawer */}
          <div
            className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between p-6 border-b border-brand-border">
              <img src="/logo.png" alt="Bio-Chem" className="h-10 w-auto" />
              <button onClick={closeMenu} className="text-brand-muted hover:text-brand-black">
                <i className="fas fa-times text-2xl"></i>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4">
              <nav className="px-4">
                {navData.map((link) => {
                  const hasSub = link.children || link.mega;
                  const expanded = mobileExpanded[link.name];

                  return (
                    <div key={link.name} className="mb-2">
                      {hasSub ? (
                        <>
                          <button
                            onClick={() => toggleMobileSubmenu(link.name)}
                            className="w-full flex items-center justify-between py-3 px-4 text-base font-bold text-brand-black rounded-xl hover:bg-brand-bg2 transition-colors"
                          >
                            {link.name}
                            <i className={`fas fa-chevron-down text-xs transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}></i>
                          </button>
                          
                          <div className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-[800px] mt-2 pb-4' : 'max-h-0'}`}>
                            {link.children ? (
                              <div className="flex flex-col gap-1 pl-4">
                                {link.children.map((child) => (
                                  <Link
                                    key={child.name}
                                    href={child.href}
                                    onClick={closeMenu}
                                    className="py-2.5 px-4 text-sm font-semibold text-brand-body hover:text-green hover:bg-green-light rounded-lg transition-all"
                                  >
                                    {child.name}
                                  </Link>
                                ))}
                              </div>
                            ) : (
                              <div className="flex flex-col gap-6 pl-4">
                                {link.columns.map((col) => (
                                  col.type === "explore-card" ? null : (
                                  <div key={col.label}>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-green mb-3 px-4">{col.label}</div>
                                    <div className="flex flex-col gap-1">
                                      {getColumnItems(col).map((item) => (
                                        <Link
                                          key={item.name}
                                          href={item.href}
                          onClick={() => { closeMenu(); if (link.name === "Home") window.scrollTo(0, 0); }}
                                          className="py-2 px-4 text-sm font-semibold text-brand-body hover:text-green hover:bg-green-light rounded-lg transition-all"
                                        >
                                          {item.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                  )))}
                              </div>
                            )}
                          </div>
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          className={`block py-3 px-4 text-base font-bold rounded-xl transition-colors ${
                            pathname === link.href ? "bg-green text-white" : "text-brand-black hover:bg-brand-bg2"
                          }`}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>

            
          </div>
        </div>
      </nav>
    </>
  );
}
