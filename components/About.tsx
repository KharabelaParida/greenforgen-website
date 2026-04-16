"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const points = [
  {
    title: "End-to-end delivery",
    desc: "From design and fabrication to site execution and final handover — fully managed.",
  },
  {
    title: "Quality assurance",
    desc: "ISO-compliant processes and premium materials on every single project.",
  },
  {
    title: "On-time completion",
    desc: "Structured project management that keeps timelines and budgets on track.",
  },
  {
    title: "Eco-conscious builds",
    desc: "Sustainable materials and green construction practices across all verticals.",
  },
];

const fs = {
  eyebrow:  { desktop: "11px", mobile: "11px" },
  title:    { desktop: "38px", mobile: "28px" },
  desc:     { desktop: "15px", mobile: "14px" },
  ptTitle:  { desktop: "15px", mobile: "14px" },
  ptDesc:   { desktop: "13px", mobile: "13px" },
  btn:      { desktop: "14px", mobile: "14px" },
};

export default function About() {
  const [isMobile, setIsMobile] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const f = (key: keyof typeof fs) => isMobile ? fs[key].mobile : fs[key].desktop;

  return (
    <section style={{ background: "#fff", padding: isMobile ? "48px 20px" : "80px 60px" }}>

      {/* Two column grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: isMobile ? "32px" : "60px",
        alignItems: "center",
        marginBottom: isMobile ? "32px" : "48px",
      }}>

        {/* Left — image panel */}
        <div style={{
          background: "#EAF4E6",
          border: "1px solid #C8E0C4",
          borderRadius: "16px",
          height: isMobile ? "260px" : "440px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          position: "relative",
          overflow: "hidden",
        }}>
          <svg width="80" height="80" viewBox="0 0 64 64" fill="none">
            <rect x="8" y="34" width="48" height="24" rx="2" stroke="#2D5A27" strokeWidth="1.5"/>
            <path d="M8 34L32 14l24 20" stroke="#2D5A27" strokeWidth="1.5" strokeLinejoin="round"/>
            <rect x="26" y="44" width="12" height="14" rx="1" stroke="#2D5A27" strokeWidth="1.2"/>
            <circle cx="48" cy="22" r="8" fill="#EAF4E6" stroke="#2D5A27" strokeWidth="1.2"/>
            <path d="M44.5 22l2.5 2.5 5-5" stroke="#2D5A27" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div style={{ fontSize: "13px", color: "#5A8A5A", fontWeight: 500 }}>
            Company image / team photo
          </div>
          
        </div>

        {/* Right — content */}
        <div>
          <div style={{ fontSize: f("eyebrow"), fontWeight: 700, color: "#2D5A27", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
            About us
          </div>
          <div style={{ fontSize: f("title"), fontWeight: 700, color: "#111", marginBottom: "16px", letterSpacing: "-0.01em", lineHeight: 1.2 }}>
            Building with<br />
            <span style={{ color: "#2D5A27", fontStyle: "italic" }}>Purpose & Pride</span>
          </div>
          <div style={{ fontSize: f("desc"), color: "#777", lineHeight: 1.7, marginBottom: "32px" }}>
            With over 8 years of experience, Greenforgen has established itself as a trusted name in construction — delivering residential, commercial and industrial projects with precision and care.
          </div>

          {/* Points */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {points.map((p) => (
              <div key={p.title} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                <div style={{ width: "36px", height: "36px", background: "#EAF4E6", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l3.5 3.5L13 4" stroke="#2D5A27" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: f("ptTitle"), fontWeight: 700, color: "#111", marginBottom: "4px" }}>{p.title}</div>
                  <div style={{ fontSize: f("ptDesc"), color: "#888", lineHeight: 1.5 }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* CTA — centered to full section */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link
          href="/about"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: hovered ? "10px" : "8px",
            background: hovered ? "#1E3F1E" : "#2D5A27",
            color: "#fff",
            fontSize: f("btn"),
            fontWeight: 600,
            padding: "14px 40px",
            borderRadius: "6px",
            textDecoration: "none",
            transform: hovered ? "translateY(-2px)" : "translateY(0px)",
            transition: "all 0.25s ease",
          }}
        >
          Learn more about us →
        </Link>
      </div>

    </section>
  );
}