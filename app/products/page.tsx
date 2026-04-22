"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const products = [
  {
    id: "prefab",
    tag: "Prefab",
    title: "Prefabricated Structures",
    desc: "Custom-built prefab units for residential and commercial use. Factory-precision manufacturing with fast on-site installation and long-lasting durability.",
    features: ["Residential units", "Commercial units", "Customizable layouts"],
    specs: ["Install: 2\u20134 weeks", "Lifespan: 25+ years"],
  },
  {
    id: "peb",
    tag: "PEB",
    title: "Pre-Engineered Buildings",
    desc: "Steel PEB systems for industrial and commercial applications. Engineered for large clear spans, quick erection, and cost-efficient construction.",
    features: ["Factories", "Showrooms", "Large-span structures"],
    specs: ["Install: 4\u20138 weeks", "Span: up to 60m"],
  },
  {
    id: "site-office",
    tag: "Office",
    title: "Site Offices",
    desc: "Portable modular site office cabins ready for quick deployment at construction sites. Fully furnished options available with electrical and AC fittings.",
    features: ["Portable", "AC-ready", "Relocatable"],
    specs: ["Deploy: 1\u20132 weeks", "Sizes: 100\u2013500 sq ft"],
  },
  {
    id: "warehouse",
    tag: "Industrial",
    title: "Warehouses & Sheds",
    desc: "Large-span warehouse structures engineered for maximum storage capacity and operational efficiency. Ideal for logistics, manufacturing, and cold storage.",
    features: ["Storage", "Manufacturing", "Logistics"],
    specs: ["Install: 6\u201310 weeks", "Area: 5,000+ sq ft"],
  },
  {
    id: "modular",
    tag: "Modular",
    title: "Modular Structures",
    desc: "Flexible modular systems adaptable to any space, requirement, and budget. Expandable, stackable, and designed for multi-use applications.",
    features: ["Expandable", "Stackable", "Multi-use"],
    specs: ["Install: 2\u20136 weeks", "Fully customizable"],
  },
  {
    id: "farmhouse",
    tag: "Farmhouse",
    title: "Farmhouses",
    desc: "Premium prefab farmhouse structures with modern aesthetics and rural durability. Perfect for weekend homes, resorts, and countryside retreats.",
    features: ["Weekend homes", "Resorts", "Premium finish"],
    specs: ["Install: 4\u20138 weeks", "Area: 500\u20135,000 sq ft"],
  },
];

function FadeIn({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      {children}
    </div>
  );
}

function ProductCard({ product }: { product: typeof products[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      id={product.id}
      className="product-card"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E0EDDC",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      {/* Image Placeholder */}
      <div
        style={{
          backgroundColor: "#E8F5E0",
          aspectRatio: "16/9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid #D4E8D0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(45,90,39,0.06) 0%, transparent 60%)" }} />
        <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2D5A27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto 8px", display: "block", opacity: 0.5 }}>
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <p style={{ fontSize: "13px", fontWeight: 500, color: "#2D5A27", opacity: 0.6 }}>{product.title}</p>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "24px" }}>
        <div style={{ display: "inline-block", padding: "4px 12px", borderRadius: "100px", backgroundColor: "rgba(45,90,39,0.08)", marginBottom: "10px" }}>
          <span style={{ fontSize: "11px", fontWeight: 600, color: "#2D5A27" }}>{product.tag}</span>
        </div>
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#1A1A1A", marginBottom: "8px" }}>{product.title}</h3>
        <p style={{ fontSize: "14px", color: "#666666", lineHeight: 1.7, marginBottom: "16px" }}>{product.desc}</p>

        {/* Expandable Details */}
        <div
          style={{
            maxHeight: expanded ? "300px" : "0",
            opacity: expanded ? 1 : 0,
            overflow: "hidden",
            transition: "max-height 0.3s ease, opacity 0.3s ease",
          }}
        >
          <div style={{ borderTop: "1px solid #E8F0E6", paddingTop: "16px", marginBottom: "16px" }}>
            <p style={{ fontSize: "12px", fontWeight: 600, color: "#555555", marginBottom: "8px" }}>Features</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
              {product.features.map((f) => (
                <span key={f} style={{ padding: "5px 12px", borderRadius: "8px", backgroundColor: "#F0F7EE", fontSize: "12px", fontWeight: 500, color: "#2D5A27" }}>
                  {f}
                </span>
              ))}
            </div>
            <p style={{ fontSize: "12px", fontWeight: 600, color: "#555555", marginBottom: "8px" }}>Specifications</p>
            <div style={{ display: "flex", gap: "20px" }}>
              {product.specs.map((s) => (
                <span key={s} style={{ fontSize: "13px", color: "#888888" }}>{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: 600,
            color: "#2D5A27",
            padding: 0,
          }}
        >
          {expanded ? "Show less" : "View details"}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2D5A27"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
            }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <main style={{ backgroundColor: "#FAFDF8" }}>

      <style jsx global>{`
        .product-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(45, 90, 39, 0.08);
        }
        .product-cta-primary {
          transition: background-color 0.2s ease;
        }
        .product-cta-primary:hover {
          background-color: #234A1F !important;
        }
        .product-cta-secondary {
          transition: background-color 0.2s ease;
        }
        .product-cta-secondary:hover {
          background-color: rgba(45, 90, 39, 0.06) !important;
        }
        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
  .products-grid {
    grid-template-columns: 1fr 1fr !important;
    gap: 16px !important;
  }
}
      `}</style>

      {/* ══ HERO ══ */}
      <FadeIn>
        <section
          style={{
            position: "relative",
            paddingTop: "140px",
            paddingBottom: "80px",
            background: "linear-gradient(170deg, #E8F5E0 0%, #F0F7EE 40%, #FAFDF8 100%)",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: "-80px", right: "-60px", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(45,90,39,0.04)" }} />
          <div style={{ position: "absolute", bottom: "-40px", left: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(45,90,39,0.03)" }} />

          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative", zIndex: 1 }}>
            <div style={{ display: "inline-block", padding: "6px 20px", borderRadius: "100px", backgroundColor: "rgba(45,90,39,0.08)", marginBottom: "20px" }}>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#2D5A27", letterSpacing: "1.5px", textTransform: "uppercase" }}>Our Products</span>
            </div>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "#1A1A1A", lineHeight: 1.15, marginBottom: "20px" }}>
              Prefab &amp; Modular<br />
              <span style={{ color: "#2D5A27" }}>Solutions.</span>
            </h1>
            <p style={{ fontSize: "clamp(16px, 2vw, 18px)", color: "#555555", lineHeight: 1.7, maxWidth: "680px", margin: "0 auto" }}>
              Factory-built, site-ready structures engineered for speed, durability, and cost efficiency. From warehouses to farmhouses &mdash; built to your spec.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* ══ PRODUCT CARDS ══ */}
      <FadeIn>
        <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 80px" }}>
          <div
            className="products-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
          >
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </FadeIn>

      {/* ══ CTA ══ */}
      <FadeIn>
        <section style={{ backgroundColor: "#F0F7EE", padding: "80px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", padding: "5px 16px", borderRadius: "100px", backgroundColor: "rgba(45,90,39,0.08)", marginBottom: "16px" }}>
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#2D5A27", letterSpacing: "1.5px", textTransform: "uppercase" }}>Custom Solutions</span>
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.2, marginBottom: "16px" }}>
              Need a Custom Prefab Solution?
            </h2>
            <p style={{ fontSize: "15px", color: "#666666", lineHeight: 1.7, marginBottom: "32px" }}>
              Tell us your requirements and we&apos;ll design a structure that fits your needs, timeline, and budget perfectly.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                className="product-cta-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#2D5A27",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: "15px",
                  padding: "14px 32px",
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                Get a Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="product-cta-secondary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "transparent",
                  color: "#2D5A27",
                  fontWeight: 600,
                  fontSize: "15px",
                  padding: "14px 32px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  border: "1.5px solid #2D5A27",
                }}
              >
                Download Brochure
              </Link>
            </div>
            <p style={{ fontSize: "13px", color: "#999999", marginTop: "16px" }}>Free consultation &middot; No commitment required</p>
          </div>
        </section>
      </FadeIn>

    </main>
  );
}
