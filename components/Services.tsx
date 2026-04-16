"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const services = [
    {
        id: "civil",
        title: "Civil Construction",
        desc: "End-to-end civil works for residential and commercial projects, built to last.",
        items: ["Residential Buildings", "Commercial Buildings", "RCC Structure Work", "Foundation & Structural"],
        icon: (
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                <rect x="1" y="9" width="18" height="10" rx="1" stroke="#2D5A27" strokeWidth="1.3" />
                <path d="M1 9L10 3l9 6" stroke="#2D5A27" strokeWidth="1.3" strokeLinejoin="round" />
                <rect x="7" y="12" width="6" height="7" rx="0.5" stroke="#2D5A27" strokeWidth="1.1" />
            </svg>
        ),
    },
    {
        id: "renovation",
        title: "Renovation & Interiors",
        desc: "Transforming spaces with thoughtful renovation and premium interior solutions.",
        items: ["Renovation & Repair", "False Ceiling & Partition", "Modular Office & Home", "Flooring & Finishing"],
        icon: (
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                <rect x="1" y="1" width="18" height="18" rx="1.5" stroke="#2D5A27" strokeWidth="1.3" />
                <path d="M6 1v18M1 7h5M1 13h5" stroke="#2D5A27" strokeWidth="1.1" />
                <rect x="9" y="5" width="8" height="6" rx="1" fill="#EAF4E6" stroke="#2D5A27" strokeWidth="1.1" />
            </svg>
        ),
    },
    {
        id: "electrical",
        title: "Electrical & Utility",
        desc: "Safe, efficient electrical installations and lighting design for every project.",
        items: ["Electrical Setup", "Lighting Design", "Panel & Wiring Works"],
        icon: (
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                <path d="M10 2v4M10 14v4M2 10h4M14 10h4" stroke="#2D5A27" strokeWidth="1.3" strokeLinecap="round" />
                <circle cx="10" cy="10" r="4" stroke="#2D5A27" strokeWidth="1.3" />
                <circle cx="10" cy="10" r="1.5" fill="#2D5A27" opacity="0.4" />
            </svg>
        ),
    },
    {
        id: "exterior",
        title: "Exterior & Finishing",
        desc: "Elevate your building's facade with expert finishing and cladding solutions.",
        items: ["Elevation & Facade", "Painting & Texture", "ACP & Glass Cladding", "Waterproofing"],
        icon: (
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                <rect x="1" y="13" width="18" height="6" rx="1" stroke="#2D5A27" strokeWidth="1.3" />
                <path d="M3 13V8L10 3l7 5v5" stroke="#2D5A27" strokeWidth="1.3" strokeLinejoin="round" />
            </svg>
        ),
    },
];

const fs = {
    eyebrow: { desktop: "11px", mobile: "11px" },
    title: { desktop: "38px", mobile: "28px" },
    subtitle: { desktop: "15px", mobile: "14px" },
    cardTitle: { desktop: "18px", mobile: "16px" },
    cardDesc: { desktop: "13px", mobile: "13px" },
    cardItem: { desktop: "12px", mobile: "11px" },
    btn: { desktop: "14px", mobile: "14px" },
    link: { desktop: "12px", mobile: "12px" },
};

export default function Services() {
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
        <section style={{ background: "#fff", padding: isMobile ? "48px 20px" : "80px 60px" }}>

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
                        What we do
                    </div>
                    <div style={{ fontSize: f("title"), fontWeight: 700, color: "#111", marginBottom: "8px", letterSpacing: "-0.01em" }}>
                        Our Services
                    </div>
                    <div style={{ fontSize: f("subtitle"), color: "#777", lineHeight: 1.6, maxWidth: "420px" }}>
                        Four specialized verticals covering every phase of your construction journey.
                    </div>
                </div>
                <Link
                    href="/services"
                    className="view-all-btn"
                    style={{ fontSize: f("btn"), fontWeight: 600, color: "#2D5A27", border: "1px solid #C8E0C4", padding: "10px 22px", borderRadius: "6px", textDecoration: "none", whiteSpace: "nowrap" }}
                >
                    View all →
                </Link>
            </div>

            {/* Grid */}
            <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: "18px",
            }}>
                {services.map((s) => {
                    const isHovered = hoveredCard === s.id;
                    return (
                        <div
                            key={s.id}
                            onMouseEnter={() => setHoveredCard(s.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            style={{
                                background: "#fff",
                                borderRadius: "14px",
                                padding: isMobile ? "22px 18px" : "28px 24px",
                                position: "relative",
                                overflow: "hidden",
                                cursor: "pointer",
                                boxShadow: isHovered
                                    ? "0 0 0 1.5px #2D5A27, 0 16px 40px rgba(45,90,39,0.14)"
                                    : "0 0 0 1.5px #C8E0C4, 0 4px 24px rgba(45,90,39,0.06)",
                                transform: isHovered ? "translateY(-4px)" : "translateY(0px)",
                                transition: "all 0.25s ease",
                            }}
                        >

                            {/* Gradient top border */}
                            <div style={{
                                position: "absolute",
                                top: 0, left: 0, right: 0,
                                height: "3px",
                                background: "linear-gradient(to right, #2D5A27, #7EC87E)",
                                borderRadius: "14px 14px 0 0",
                            }} />

                            {/* Icon */}
                            <div style={{
                                width: "46px", height: "46px",
                                background: isHovered ? "linear-gradient(135deg, #C8E0C4, #A0C89A)" : "linear-gradient(135deg, #EAF4E6, #C8E0C4)",
                                borderRadius: "10px",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                marginBottom: "16px",
                                transition: "background 0.25s ease",
                            }}>
                                {s.icon}
                            </div>

                            {/* Title */}
                            <div style={{
                                fontSize: f("cardTitle"),
                                fontWeight: 700,
                                color: isHovered ? "#2D5A27" : "#111",
                                marginBottom: "8px",
                                transition: "color 0.25s ease",
                            }}>
                                {s.title}
                            </div>

                            {/* Desc */}
                            <div style={{ fontSize: f("cardDesc"), color: "#888", lineHeight: 1.65, marginBottom: "16px" }}>
                                {s.desc}
                            </div>

                            {/* Items */}
                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "7px",
                                marginBottom: "20px",
                            }}>
                                {s.items.map((item) => (
                                    <div key={item} style={{ fontSize: f("cardItem"), color: "#666", display: "flex", alignItems: "center", gap: "6px" }}>
                                        <span style={{ width: "5px", height: "5px", background: "#2D5A27", borderRadius: "50%", display: "inline-block", flexShrink: 0 }} />
                                        {item}
                                    </div>
                                ))}
                            </div>

                            {/* Learn more */}
                            <Link
                                href={`/services#${s.id}`}
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
                                Learn more →
                            </Link>

                        </div>
                    );
                })}
            </div>

        </section>
    );
}