"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const products = [
  {
    id: "prefab",
    title: "Prefabricated Structures",
    badge: "Prefab",
    desc: "Custom-built prefab units for residential and commercial use.",
    icon: (
      <svg width="52" height="52" viewBox="0 0 44 44" fill="none">
        <rect x="5" y="22" width="34" height="17" rx="1" stroke="#2D5A27" strokeWidth="1.4"/>
        <path d="M5 22L22 9l17 13" stroke="#2D5A27" strokeWidth="1.4" strokeLinejoin="round"/>
        <rect x="15" y="30" width="14" height="9" rx="0.5" stroke="#2D5A27" strokeWidth="1.1"/>
      </svg>
    ),
  },
  {
    id: "peb",
    title: "Pre-Engineered Buildings",
    badge: "PEB",
    desc: "Steel PEB systems for industrial and commercial applications.",
    icon: (
      <svg width="52" height="52" viewBox="0 0 44 44" fill="none">
        <rect x="3" y="17" width="38" height="23" rx="1" stroke="#2D5A27" strokeWidth="1.4"/>
        <path d="M3 17l19-11 19 11" stroke="#2D5A27" strokeWidth="1.4" strokeLinejoin="round"/>
        <rect x="9" y="27" width="8" height="13" rx="0.5" stroke="#2D5A27" strokeWidth="1.1"/>
        <rect x="27" y="27" width="8" height="13" rx="0.5" stroke="#2D5A27" strokeWidth="1.1"/>
      </svg>
    ),
  },
  {
    id: "site-office",
    title: "Site Offices",
    badge: "Office",
    desc: "Portable modular site office cabins ready for quick deployment.",
    icon: (
      <svg width="52" height="52" viewBox="0 0 44 44" fill="none">
        <rect x="7" y="20" width="30" height="20" rx="1" stroke="#2D5A27" strokeWidth="1.4"/>
        <path d="M7 20l15-11 15 11" stroke="#2D5A27" strokeWidth="1.4" strokeLinejoin="round"/>
        <rect x="13" y="28" width="8" height="12" rx="0.5" stroke="#2D5A27" strokeWidth="1.1"/>
        <rect x="25" y="28" width="8" height="8" rx="0.5" stroke="#2D5A27" strokeWidth="1.1"/>
      </svg>
    ),
  },
  {
    id: "warehouse",
    title: "Warehouses & Sheds",
    badge: "Industrial",
    desc: "Large-span warehouse structures engineered for maximum efficiency.",
    icon: (
      <svg width="52" height="52" viewBox="0 0 44 44" fill="none">
        <rect x="3" y="20" width="38" height="20" rx="1" stroke="#2D5A27" strokeWidth="1.4"/>
        <path d="M3 20 Q22 10 41 20" stroke="#2D5A27" strokeWidth="1.4" fill="none"/>
        <line x1="3" y1="28" x2="41" y2="28" stroke="#2D5A27" strokeWidth="0.7"/>
      </svg>
    ),
  },
  {
    id: "modular",
    title: "Modular Structures",
    badge: "Modular",
    desc: "Flexible modular systems adaptable to any space and requirement.",
    icon: (
      <svg width="52" height="52" viewBox="0 0 44 44" fill="none">
        <rect x="5" y="22" width="14" height="18" rx="1" stroke="#2D5A27" strokeWidth="1.4"/>
        <rect x="25" y="28" width="14" height="12" rx="1" stroke="#2D5A27" strokeWidth="1.4"/>
        <rect x="25" y="18" width="14" height="8" rx="1" stroke="#2D5A27" strokeWidth="1.1"/>
        <path d="M5 22l7-9 7 9M25 28l7-8 7 8" stroke="#2D5A27" strokeWidth="1.1" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "farmhouse",
    title: "Farmhouses",
    badge: "Farmhouse",
    desc: "Premium prefab farmhouse structures with modern aesthetics.",
    icon: (
      <svg width="52" height="52" viewBox="0 0 44 44" fill="none">
        <rect x="5" y="24" width="34" height="16" rx="1" stroke="#2D5A27" strokeWidth="1.4"/>
        <path d="M5 24L22 10l17 14" stroke="#2D5A27" strokeWidth="1.4" strokeLinejoin="round"/>
        <rect x="10" y="30" width="7" height="7" rx="0.5" stroke="#2D5A27" strokeWidth="1.1" opacity="0.6"/>
        <rect x="27" y="30" width="7" height="7" rx="0.5" stroke="#2D5A27" strokeWidth="1.1" opacity="0.6"/>
      </svg>
    ),
  },
];

const fs = {
  eyebrow:   { desktop: "11px", mobile: "11px" },
  title:     { desktop: "38px", mobile: "28px" },
  subtitle:  { desktop: "15px", mobile: "14px" },
  badge:     { desktop: "10px", mobile: "10px" },
  cardTitle: { desktop: "16px", mobile: "15px" },
  cardDesc:  { desktop: "13px", mobile: "13px" },
  btn:       { desktop: "14px", mobile: "14px" },
  link:      { desktop: "12px", mobile: "12px" },
};

export default function Products() {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const f = (key: keyof typeof fs) => isMobile ? fs[key].mobile : fs[key].desktop;

  return (
    <section style={{ background: "#F4F8F2", padding: isMobile ? "48px 20px" : "80px 60px" }}>

      {/* Header */}
      <div style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: isMobile ? "flex-start" : "flex-end",
        marginBottom: "36px",
        gap: "16px",
      }}>
        <div>
          <div style={{ fontSize: f("eyebrow"), fontWeight: 700, color: "#2D5A27", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
            What we offer
          </div>
          <div style={{ fontSize: f("title"), fontWeight: 700, color: "#111", marginBottom: "8px", letterSpacing: "-0.01em" }}>
            Prefab & Modular Solutions
          </div>
          <div style={{ fontSize: f("subtitle"), color: "#777", lineHeight: 1.6, maxWidth: "420px" }}>
            Factory-built, site-ready structures engineered for speed and durability.
          </div>
        </div>
        <Link
          href="/products"
          className="view-all-btn"
          style={{ fontSize: f("btn"), fontWeight: 600, color: "#2D5A27", border: "1px solid #C8E0C4", padding: "10px 22px", borderRadius: "6px", textDecoration: "none", whiteSpace: "nowrap" }}
        >
          View all →
        </Link>
      </div>

      {/* Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
        gap: "18px",
      }}>
        {products.map((p) => {
          const isHovered = hoveredCard === p.id;
          return (
            <div
              key={p.id}
              onMouseEnter={() => setHoveredCard(p.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: "#fff",
                borderRadius: "14px",
                overflow: "hidden",
                border: isHovered ? "1px solid #2D5A27" : "1px solid #E0EAE0",
                transform: isHovered ? "translateY(-4px)" : "translateY(0px)",
                boxShadow: isHovered ? "0 16px 40px rgba(45,90,39,0.12)" : "none",
                transition: "all 0.25s ease",
                cursor: "pointer",
              }}
            >
              {/* Thumbnail */}
              <div style={{
                background: isHovered ? "#DFF0D8" : "#EAF4E6",
                height: isMobile ? "120px" : "140px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderBottom: "1px solid #E0EAE0",
                transition: "background 0.25s ease",
              }}>
                {p.icon}
              </div>

              {/* Body */}
              <div style={{ padding: isMobile ? "16px" : "20px" }}>

                {/* Badge */}
                <div style={{ display: "inline-block", fontSize: f("badge"), fontWeight: 700, color: "#2D5A27", background: "#EAF4E6", border: "1px solid #C8E0C4", padding: "3px 10px", borderRadius: "99px", marginBottom: "10px", letterSpacing: "0.05em" }}>
                  {p.badge}
                </div>

                {/* Title */}
                <div style={{ fontSize: f("cardTitle"), fontWeight: 700, color: isHovered ? "#2D5A27" : "#111", marginBottom: "6px", transition: "color 0.25s ease" }}>
                  {p.title}
                </div>

                {/* Desc */}
                <div style={{ fontSize: f("cardDesc"), color: "#888", lineHeight: 1.55, marginBottom: "14px" }}>
                  {p.desc}
                </div>

                {/* Link */}
                <Link
                  href={`/products#${p.id}`}
                  style={{
                    fontSize: f("link"),
                    fontWeight: 600,
                    color: "#2D5A27",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: isHovered ? "8px" : "4px",
                    transition: "gap 0.25s ease",
                  }}
                >
                  View details →
                </Link>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}