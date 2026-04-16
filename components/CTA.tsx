"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const fs = {
  eyebrow: { desktop: "11px", mobile: "11px" },
  title:   { desktop: "42px", mobile: "28px" },
  desc:    { desktop: "15px", mobile: "14px" },
  btn:     { desktop: "14px", mobile: "14px" },
  note:    { desktop: "12px", mobile: "12px" },
};

export default function CTA() {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredPrimary, setHoveredPrimary] = useState(false);
  const [hoveredSecondary, setHoveredSecondary] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const f = (key: keyof typeof fs) => isMobile ? fs[key].mobile : fs[key].desktop;

  const primaryStyle = {
    background: hoveredPrimary ? "#F0F7EE" : "#fff",
    color: "#2D5A27",
    fontSize: f("btn"),
    fontWeight: 700,
    padding: "14px 32px",
    borderRadius: "6px",
    textDecoration: "none",
    whiteSpace: "nowrap" as const,
    display: "inline-block",
    transform: hoveredPrimary ? "translateY(-2px)" : "translateY(0px)",
    transition: "all 0.25s ease",
  };

  const secondaryStyle = {
    background: "transparent",
    color: "#fff",
    fontSize: f("btn"),
    fontWeight: 600,
    padding: "14px 32px",
    borderRadius: "6px",
    border: hoveredSecondary ? "1px solid rgba(255,255,255,0.6)" : "1px solid rgba(255,255,255,0.3)",
    textDecoration: "none",
    whiteSpace: "nowrap" as const,
    display: "inline-block",
    transform: hoveredSecondary ? "translateY(-2px)" : "translateY(0px)",
    transition: "all 0.25s ease",
    cursor: "pointer",
  };

  return (
    <section style={{
      background: "#0A2A14",
      padding: isMobile ? "56px 24px" : "80px 60px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}>

      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06 }}
        viewBox="0 0 800 300"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="ctag" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M30 0H0V30" fill="none" stroke="#7EC87E" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="800" height="300" fill="url(#ctag)" />
      </svg>

      <div style={{ position: "relative", zIndex: 2 }}>

        <div style={{ fontSize: f("eyebrow"), fontWeight: 700, color: "#7EC87E", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "14px" }}>
          Start your project today
        </div>

        <div style={{ fontSize: f("title"), fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: "16px", letterSpacing: "-0.01em" }}>
          Ready to Build Something
          <br />
          <span style={{ color: "#7EC87E", fontStyle: "italic" }}>Great?</span>
        </div>

        <div style={{ fontSize: f("desc"), color: "rgba(255,255,255,0.55)", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto 36px" }}>
          Get in touch for a free consultation and project estimate. Our team responds within 24 hours.
        </div>

        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", marginBottom: "20px" }}>

          <Link
            href="/contact"
            style={primaryStyle}
            onMouseEnter={() => setHoveredPrimary(true)}
            onMouseLeave={() => setHoveredPrimary(false)}
          >
            Book a Free Consultation
          </Link>

          <Link
            href="tel:+91XXXXXXXXXX"
            style={secondaryStyle}
            onMouseEnter={() => setHoveredSecondary(true)}
            onMouseLeave={() => setHoveredSecondary(false)}
          >
            Call Us Now
          </Link>

        </div>

        <div style={{ fontSize: f("note"), color: "rgba(255,255,255,0.25)" }}>
          Free consultation · No commitment required
        </div>

      </div>
    </section>
  );
}