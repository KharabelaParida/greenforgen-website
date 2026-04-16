"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const services = [
    { label: "Civil Construction", href: "/services#civil" },
    { label: "Renovation & Interiors", href: "/services#renovation" },
    { label: "Electrical & Utility", href: "/services#electrical" },
    { label: "Exterior & Finishing", href: "/services#exterior" },
];

const products = [
    { label: "Prefab Structures", href: "/products#prefab" },
    { label: "Pre-Engineered Buildings", href: "/products#peb" },
    { label: "Site Offices", href: "/products#site-office" },
    { label: "Warehouses & Sheds", href: "/products#warehouse" },
    { label: "Modular Structures", href: "/products#modular" },
    { label: "Farmhouses", href: "/products#farmhouse" },
];

export default function Footer() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return (
        <footer style={{ background: "#F0F7EE", borderTop: "1px solid #D4E8D0" }}>

            <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1.8fr 1fr 1fr 1fr",
                gap: isMobile ? "32px" : "40px",
                padding: isMobile ? "40px 20px 32px" : "56px 60px 40px",
            }}>

                {/* Brand */}
                <div>
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="Greenforgen"
                            width={160}
                            height={44}
                            style={{ width: "auto", height: "44px", objectFit: "contain", marginBottom: "14px", marginLeft: "-13px" }}
                        />
                    </Link>
                    <div style={{ fontSize: "13px", color: "#888", lineHeight: 1.7, marginBottom: "20px", maxWidth: "260px", textAlign: "justify" }}>
                        A trusted construction and infrastructure company delivering quality builds across residential, commercial and industrial sectors.
                    </div>

                    {/* Social icons — hover via CSS */}
                    <div style={{ display: "flex", gap: "10px" }}>
                        <Link href="#" className="social-icon-btn">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="#2D5A27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        <Link href="#" className="social-icon-btn">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <rect x="2" y="2" width="20" height="20" rx="5" stroke="#2D5A27" strokeWidth="1.5" />
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="#2D5A27" strokeWidth="1.5" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#2D5A27" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </Link>
                        <Link href="#" className="social-icon-btn">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke="#2D5A27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="4" cy="4" r="2" stroke="#2D5A27" strokeWidth="1.5" />
                            </svg>
                        </Link>
                        <Link href="https://wa.me/91XXXXXXXXXX" className="social-icon-btn">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="#2D5A27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        <Link href="#" className="social-icon-btn">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" stroke="#2D5A27" strokeWidth="1.5" />
                                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" stroke="#2D5A27" strokeWidth="1.5" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <div style={{ fontSize: "11px", fontWeight: 700, color: "#2D5A27", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
                        Services
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {services.map((item) => (
                            <Link key={item.label} href={item.href} className="footer-nav-link">
                                {item.label}
                                <span className="footer-arrow">→</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Products */}
                <div>
                    <div style={{ fontSize: "11px", fontWeight: 700, color: "#2D5A27", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
                        Products
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {products.map((item) => (
                            <Link key={item.label} href={item.href} className="footer-nav-link">
                                {item.label}
                                <span className="footer-arrow">→</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Contact — no hover */}
                <div>
                    <div style={{ fontSize: "11px", fontWeight: 700, color: "#2D5A27", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
                        Contact
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <Link href="tel:+91XXXXXXXXXX" className="contact-icon-btn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#2D5A27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                            <span style={{ fontSize: "13px", color: "#666" }}>+91 XXXXX XXXXX</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <Link href="mailto:info@greenforgen.com" className="contact-icon-btn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#2D5A27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <polyline points="22,6 12,13 2,6" stroke="#2D5A27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                            <span style={{ fontSize: "13px", color: "#666" }}>info@greenforgen.com</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <Link href="#" className="contact-icon-btn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#2D5A27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="12" cy="10" r="3" stroke="#2D5A27" strokeWidth="1.5" />
                                </svg>
                            </Link>
                            <span style={{ fontSize: "13px", color: "#666" }}>Bhubaneswar, Odisha</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom bar */}
            <div style={{
                borderTop: "1px solid #D4E8D0",
                padding: isMobile ? "16px 20px" : "20px 60px",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                justifyContent: "space-between",
                alignItems: isMobile ? "flex-start" : "center",
                gap: "10px",
            }}>
                <div style={{ fontSize: "11px", color: "#AAA" }}>
                    © 2025 Greenforgen. All rights reserved.
                </div>
                <div style={{ display: "flex", gap: "20px" }}>
                    <Link href="#" className="bottom-nav-link">Privacy Policy</Link>
                    <Link href="#" className="bottom-nav-link">Terms of Service</Link>
                    <Link href="#" className="bottom-nav-link">Sitemap</Link>
                </div>
            </div>

        </footer>
    );
}