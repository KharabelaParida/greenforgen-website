"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const stats = [
    { num: "50+", lbl: "Projects Done" },
    { num: "8+", lbl: "Years Exp" },
    { num: "100%", lbl: "Satisfaction" },
    { num: "4", lbl: "Verticals" },
];

export default function Hero() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return (
        <section>
            {isMobile ? (

                /* ── MOBILE HERO ── */
                <div style={{ background: "#F0F7EE" }}>
                    <div style={{ padding: "40px 24px 24px", textAlign: "center" }}>

                        {/* Eyebrow pill */}
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "5px", background: "#EAF4E6", border: "1px solid #C8E0C4", color: "#2D5A27", fontSize: "9px", fontWeight: 600, padding: "4px 12px", borderRadius: "99px", marginBottom: "16px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                            <span style={{ width: "5px", height: "5px", background: "#2D5A27", borderRadius: "50%", display: "inline-block" }} />
                            Trusted Construction Partner
                        </div>

                        {/* Headline */}
                        <h1 style={{ fontSize: "36px", fontWeight: 700, color: "#111", lineHeight: 1.15, marginBottom: "12px", letterSpacing: "-0.02em" }}>
                            We Build What<br />
                            You <span style={{ color: "#2D5A27", fontStyle: "italic" }}>Imagine.</span>
                        </h1>

                        {/* Sub */}
                        <p style={{ fontSize: "15px", color: "#666", lineHeight: 1.65, marginBottom: "20px", maxWidth: "300px", margin: "0 auto 20px" }}>
                            End-to-end construction — from prefab structures to premium interiors.
                            <br /><strong style={{ color: "#444" }}>One team. Every phase.</strong>
                        </p>

                        {/* Stat cards 2x2 */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "20px" }}>
                            {stats.map((s) => (
                                <div key={s.lbl} style={{ background: "#fff", border: "1px solid #E0EAE0", borderRadius: "12px", padding: "12px" }}>
                                    <div style={{ fontSize: "24px", fontWeight: 700, color: "#2D5A27" }}>{s.num}</div>
                                    <div style={{ fontSize: "11px", color: "#AAA", marginTop: "2px" }}>{s.lbl}</div>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "16px" }}>
                            <Link href="/contact" style={{ background: "#2D5A27", color: "white", fontSize: "15px", fontWeight: 600, padding: "14px", borderRadius: "8px", textDecoration: "none", textAlign: "center", display: "block" }}>
                                Book a Consultation →
                            </Link>
                            <Link href="/services" style={{ background: "transparent", color: "#2D5A27", fontSize: "15px", fontWeight: 600, padding: "14px", borderRadius: "8px", border: "2px solid #2D5A27", textDecoration: "none", textAlign: "center", display: "block" }}>
                                Our Services
                            </Link>
                        </div>

                        {/* Trust note */}
                        <p style={{ fontSize: "12px", color: "#BBB" }}>
                            Free · <span style={{ color: "#2D5A27", fontWeight: 600 }}>No commitment</span> · 24Hr Response
                        </p>

                    </div>

                    {/* Mobile wave */}
                    <div style={{ position: "relative", height: "60px", background: "#F0F7EE" }}>
                        <svg viewBox="0 0 400 60" preserveAspectRatio="none" style={{ width: "100%", height: "60px", display: "block" }}>
                            <path d="M0,20 C100,60 300,0 400,30 L400,60 L0,60 Z" fill="rgba(255,255,255,0.4)" />
                        </svg>
                        <svg viewBox="0 0 400 60" preserveAspectRatio="none" style={{ position: "absolute", top: 0, width: "100%", height: "60px", display: "block" }}>
                            <path d="M0,40 C100,10 300,50 400,20 L400,60 L0,60 Z" fill="#ffffff" />
                        </svg>
                    </div>
                </div>

            ) : (

                /* ── DESKTOP HERO ── */
                <>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "calc(100vh - 68px)" }}>

                        {/* LEFT */}
                        <div style={{ background: "#F0F7EE", padding: "64px 64px", display: "flex", flexDirection: "column", justifyContent: "center" }}>

                            {/* Eyebrow pill */}
                            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#EAF4E6", border: "1px solid #C8E0C4", color: "#2D5A27", fontSize: "11px", fontWeight: 600, padding: "5px 16px", borderRadius: "99px", marginBottom: "20px", marginTop: "40px", letterSpacing: "0.08em", textTransform: "uppercase", width: "fit-content" }}>
                                <span style={{ width: "6px", height: "6px", background: "#2D5A27", borderRadius: "50%", display: "inline-block" }} />
                                Trusted Construction Partner
                            </div>

                            {/* Headline */}
                            <h1 style={{ fontSize: "clamp(40px, 4vw, 62px)", fontWeight: 700, color: "#111", lineHeight: 1.1, marginBottom: "16px", letterSpacing: "-0.02em" }}>
                                We Build What<br />
                                You <span style={{ color: "#2D5A27", fontStyle: "italic" }}>Imagine.</span>
                            </h1>

                            {/* Sub */}
                            <p style={{ fontSize: "16px", color: "#666", lineHeight: 1.7, marginBottom: "28px", maxWidth: "420px", textAlign: "justify" }}>
                                End-to-end construction — from prefab structures and civil works to premium interiors and exterior finishing.
                                <br /><strong style={{ color: "#444" }}>One team. Every phase.</strong>
                            </p>

                            {/* CTAs */}
                            <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
                                <Link href="/contact" style={{ background: "#2D5A27", color: "#fff", fontSize: "14px", fontWeight: 600, padding: "12px 28px", borderRadius: "6px", textDecoration: "none", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                                    Book a Consultation →
                                </Link>
                                <Link href="/services" style={{ background: "transparent", color: "#2D5A27", fontSize: "14px", fontWeight: 600, padding: "12px 28px", borderRadius: "6px", border: "2px solid #2D5A27", textDecoration: "none", whiteSpace: "nowrap" }}>
                                    Our Services
                                </Link>
                            </div>

                            {/* Trust note */}
                            <p style={{ fontSize: "15px", color: "#8b8080" }}>
                                Free · <span style={{ color: "#2D5A27", fontWeight: 600 }}>No commitment</span> · 24Hr Response
                            </p>

                        </div>

                        {/* RIGHT — Blueprint dark panel */}
                        <div style={{ background: "#0D3020", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>

                            {/* Blueprint grid */}
                            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.1 }} viewBox="0 0 400 380" preserveAspectRatio="none">
                                <defs>
                                    <pattern id="sg" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M10 0H0V10" fill="none" stroke="#7EC87E" strokeWidth="0.3" /></pattern>
                                    <pattern id="lg" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M50 0H0V50" fill="none" stroke="#7EC87E" strokeWidth="0.8" /></pattern>
                                </defs>
                                <rect width="400" height="380" fill="url(#sg)" />
                                <rect width="400" height="380" fill="url(#lg)" />
                            </svg>

                            {/* Blueprint house */}
                            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.18 }} viewBox="0 0 400 380" fill="none">
                                <rect x="60" y="200" width="280" height="160" stroke="#7EC87E" strokeWidth="1.5" />
                                <path d="M40 200L200 60L360 200" stroke="#7EC87E" strokeWidth="2" />
                                <line x1="200" y1="60" x2="200" y2="200" stroke="#7EC87E" strokeWidth="1" strokeDasharray="6 4" />
                                <rect x="165" y="280" width="70" height="80" stroke="#7EC87E" strokeWidth="1.5" />
                                <circle cx="225" cy="322" r="4" stroke="#7EC87E" strokeWidth="1" />
                                <rect x="80" y="230" width="60" height="50" stroke="#7EC87E" strokeWidth="1.2" />
                                <line x1="110" y1="230" x2="110" y2="280" stroke="#7EC87E" strokeWidth="0.8" />
                                <line x1="80" y1="255" x2="140" y2="255" stroke="#7EC87E" strokeWidth="0.8" />
                                <rect x="260" y="230" width="60" height="50" stroke="#7EC87E" strokeWidth="1.2" />
                                <line x1="290" y1="230" x2="290" y2="280" stroke="#7EC87E" strokeWidth="0.8" />
                                <line x1="260" y1="255" x2="320" y2="255" stroke="#7EC87E" strokeWidth="0.8" />
                                <rect x="270" y="80" width="30" height="60" stroke="#7EC87E" strokeWidth="1.2" />
                                <line x1="20" y1="360" x2="380" y2="360" stroke="#7EC87E" strokeWidth="1.5" />
                                <circle cx="350" cy="90" r="18" stroke="#7EC87E" strokeWidth="0.8" opacity="0.6" />
                                <path d="M350 72v36M332 90h36" stroke="#7EC87E" strokeWidth="0.8" opacity="0.6" />
                                <line x1="30" y1="340" x2="110" y2="340" stroke="#7EC87E" strokeWidth="1" />
                                <line x1="30" y1="336" x2="30" y2="344" stroke="#7EC87E" strokeWidth="1" />
                                <line x1="70" y1="336" x2="70" y2="344" stroke="#7EC87E" strokeWidth="1" />
                                <line x1="110" y1="336" x2="110" y2="344" stroke="#7EC87E" strokeWidth="1" />
                                <rect x="30" y="337" width="40" height="3" fill="#7EC87E" opacity="0.6" />
                            </svg>

                            {/* Stat cards — 3D Neumorphic */}
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", padding: "36px", position: "relative", zIndex: 2 }}>
                                {stats.map((s) => (
                                    <div key={s.lbl} style={{
                                        background: "#0A2A14",
                                        borderRadius: "12px",
                                        padding: "22px 16px",
                                        textAlign: "center",
                                        boxShadow: "6px 6px 12px #061508, -6px -6px 12px #0E3D1E, inset 0 1px 0 rgba(126,200,126,0.1)",
                                    }}>
                                        <div style={{ fontSize: "32px", fontWeight: 700, color: "#7EC87E", textShadow: "0 0 20px rgba(126,200,126,0.4)" }}>{s.num}</div>
                                        <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", marginTop: "5px", letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.lbl}</div>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>

                    {/* Wave — full width */}
                    <div style={{ position: "relative", height: "80px", background: "#F0F7EE", marginTop: "-1px" }}>
                        <svg viewBox="0 0 1200 70" preserveAspectRatio="none" style={{ position: "absolute", top: 0, width: "100%", height: "80px", display: "block" }}>
                            <path d="M0,20 C300,70 900,0 1200,30 L1200,70 L0,70 Z" fill="rgba(255,255,255,0.4)" />
                        </svg>
                        <svg viewBox="0 0 1200 70" preserveAspectRatio="none" style={{ position: "absolute", top: 0, width: "100%", height: "80px", display: "block" }}>
                            <path d="M0,40 C300,10 900,60 1200,20 L1200,70 L0,70 Z" fill="#ffffff" />
                        </svg>
                    </div>
                </>

            )}
        </section>
    );
}