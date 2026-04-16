"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    id: "t1",
    text: "Greenforgen delivered our warehouse project ahead of schedule. The quality of the prefab structure exceeded our expectations. Highly professional team.",
    name: "Rajesh Kumar",
    role: "Director, RK Industries",
    initials: "RK",
  },
  {
    id: "t2",
    text: "We hired Greenforgen for our office renovation and the results were stunning. The modular interiors transformed our workspace completely.",
    name: "Priya Sharma",
    role: "CEO, TechVentures Pvt Ltd",
    initials: "PS",
  },
  {
    id: "t3",
    text: "From foundation to finishing, Greenforgen managed everything seamlessly. Our residential project was completed on time and within budget.",
    name: "Arjun Mehta",
    role: "Homeowner, Pune",
    initials: "AM",
  },
  {
    id: "t4",
    text: "The PEB structure Greenforgen built for our factory was outstanding. Fast installation, great quality and the team was always responsive.",
    name: "Suresh Nair",
    role: "MD, Nair Manufacturing",
    initials: "SN",
  },
  {
    id: "t5",
    text: "Our farmhouse project was handled with great attention to detail. Greenforgen's team understood our vision and delivered beyond what we imagined.",
    name: "Vikram Reddy",
    role: "Homeowner, Hyderabad",
    initials: "VR",
  },
  {
    id: "t6",
    text: "Excellent waterproofing and facade work on our commercial building. The exterior looks premium and the work was done without any delays.",
    name: "Deepa Gupta",
    role: "Property Developer, Mumbai",
    initials: "DG",
  },
];

const fs = {
  eyebrow:  { desktop: "11px", mobile: "11px" },
  title:    { desktop: "38px", mobile: "28px" },
  subtitle: { desktop: "15px", mobile: "14px" },
  text:     { desktop: "13px", mobile: "13px" },
  name:     { desktop: "14px", mobile: "14px" },
  role:     { desktop: "11px", mobile: "11px" },
};

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="#2D5A27">
    <path d="M7 0l1.8 5H14l-4.2 3 1.6 5L7 10.2 2.6 13l1.6-5L0 5h5.2z"/>
  </svg>
);

export default function Testimonials() {
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

      {/* Header — centered */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <div style={{ fontSize: f("eyebrow"), fontWeight: 700, color: "#2D5A27", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
          What clients say
        </div>
        <div style={{ fontSize: f("title"), fontWeight: 700, color: "#111", marginBottom: "8px", letterSpacing: "-0.01em" }}>
          Trusted by Our Clients
        </div>
        <div style={{ fontSize: f("subtitle"), color: "#777", lineHeight: 1.6, maxWidth: "480px", margin: "0 auto" }}>
          Real feedback from real projects — hear what our clients have to say.
        </div>
      </div>

      {/* Grid — 1 col mobile, 3 col desktop */}
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
        gap: "20px",
      }}>
        {testimonials.map((t) => {
          const isHovered = hoveredCard === t.id;
          return (
            <div
              key={t.id}
              onMouseEnter={() => setHoveredCard(t.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: "#fff",
                borderRadius: "14px",
                padding: isMobile ? "22px 18px" : "28px 24px",
                border: isHovered ? "1px solid #2D5A27" : "1px solid #E0EAE0",
                transform: isHovered ? "translateY(-4px)" : "translateY(0px)",
                boxShadow: isHovered ? "0 16px 40px rgba(45,90,39,0.1)" : "none",
                transition: "all 0.25s ease",
                cursor: "pointer",
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "4px", marginBottom: "14px" }}>
                {[1,2,3,4,5].map((i) => <StarIcon key={i} />)}
              </div>

              {/* Quote mark */}
              <div style={{ fontSize: "44px", color: "#C8E0C4", fontFamily: "Georgia, serif", lineHeight: 1, marginBottom: "10px" }}>
                "
              </div>

              {/* Text */}
              <div style={{ fontSize: f("text"), color: "#555", lineHeight: 1.7, marginBottom: "20px", fontStyle: "italic" }}>
                {t.text}
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: "#EEE", marginBottom: "16px" }} />

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "40px", height: "40px",
                  background: isHovered ? "#1E3F1E" : "#2D5A27",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "13px", fontWeight: 700, color: "#fff",
                  flexShrink: 0,
                  transition: "background 0.25s ease",
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: f("name"), fontWeight: 700, color: "#111" }}>{t.name}</div>
                  <div style={{ fontSize: f("role"), color: "#999", marginTop: "2px" }}>{t.role}</div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}