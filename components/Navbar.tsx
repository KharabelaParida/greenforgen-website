"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services", href: "/services", submenu: [
      { label: "Civil Construction", href: "/services#civil" },
      { label: "Renovation & Interiors", href: "/services#renovation" },
      { label: "Electrical & Utility", href: "/services#electrical" },
      { label: "Exterior & Finishing", href: "/services#exterior" },
    ]
  },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      <header style={{ backgroundColor: "#F0F7EE", position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, borderBottom: "1px solid #D4E8D0" }}>

        {isMobile ? (
          /* ── MOBILE NAV ── */
          <>
            <div style={{ padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Link href="/" onClick={closeMobile}>
                <Image src="/logo.png" alt="Greenforgen" width={130} height={36} style={{ width: "auto", height: "36px", objectFit: "contain" }} priority />
              </Link>
              <button onClick={() => setMobileOpen(!mobileOpen)} style={{ background: "none", border: "none", cursor: "pointer", color: "#2D5A27", padding: "4px" }} aria-label="Toggle menu">
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile dropdown */}
            <div style={{ overflow: "hidden", maxHeight: mobileOpen ? "100vh" : "0", opacity: mobileOpen ? 1 : 0, transition: "max-height 0.3s ease, opacity 0.3s ease" }}>
              <div style={{ backgroundColor: "#F0F7EE", borderTop: "1px solid #D4E8D0", padding: "12px 16px 24px", display: "flex", flexDirection: "column", gap: "2px" }}>
                {navLinks.map((link) =>
                  link.submenu ? (
                    <div key={link.label}>
                      <button onClick={() => setServicesOpen(!servicesOpen)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "14px 16px", borderRadius: "10px", fontSize: "15px", fontWeight: 600, color: servicesOpen ? "#2D5A27" : "#333333", backgroundColor: servicesOpen ? "#EAF4E6" : "transparent", border: "none", cursor: "pointer" }}>
                        {link.label}
                        <ChevronDown size={18} style={{ color: servicesOpen ? "#2D5A27" : "#333333", transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
                      </button>
                      <div style={{ overflow: "hidden", maxHeight: servicesOpen ? "400px" : "0", opacity: servicesOpen ? 1 : 0, transition: "max-height 0.3s ease, opacity 0.3s ease" }}>
                        <div style={{ marginLeft: "16px", paddingLeft: "12px", borderLeft: "2px solid #C8E0C4", marginBottom: "8px", marginTop: "2px", display: "flex", flexDirection: "column", gap: "2px" }}>
                          {link.submenu.map((sub) => (
                            <Link key={sub.href} href={sub.href} onClick={closeMobile} style={{ display: "block", padding: "10px 12px", borderRadius: "8px", fontSize: "14px", fontWeight: 500, color: "#333333", textDecoration: "none" }}>
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link key={link.href} href={link.href} onClick={closeMobile} style={{ display: "block", padding: "14px 16px", borderRadius: "10px", fontSize: "15px", fontWeight: 600, color: "#333333", textDecoration: "none" }}>
                      {link.label}
                    </Link>
                  )
                )}
                <div style={{ borderTop: "1px solid #D4E8D0", margin: "10px 0" }} />
                <Link href="/contact" onClick={closeMobile} style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#2D5A27", color: "white", fontWeight: 600, fontSize: "15px", padding: "16px", borderRadius: "10px", textDecoration: "none" }}>
                  Get a Quote
                </Link>
              </div>
            </div>
          </>
        ) : (
          /* ── DESKTOP NAV ── */
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 60px", width: "100%" }}>
            <Link href="/">
              <Image src="/logo.png" alt="Greenforgen" width={160} height={44} style={{ width: "auto", height: "44px", objectFit: "contain" }} priority />
            </Link>

            <nav style={{ display: "flex", alignItems: "center", gap: "32px" }}>
              {navLinks.map((link) =>
                link.submenu ? (
                  <div key={link.label} style={{ position: "relative", paddingBottom: "12px", marginBottom: "-12px" }} onMouseEnter={() => setDesktopServicesOpen(true)} onMouseLeave={() => setDesktopServicesOpen(false)}>
                    <button style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "14px", fontWeight: 500, color: desktopServicesOpen ? "#2D5A27" : "#333333", background: "none", border: "none", cursor: "pointer", transition: "color 0.2s" }}>
                      {link.label}
                      <ChevronDown size={15} style={{ transition: "transform 0.2s", transform: desktopServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
                    </button>
                    {desktopServicesOpen && (
                      <div style={{ position: "absolute", top: "calc(100% + 4px)", left: 0, width: "240px", background: "#fff", border: "1px solid #D4E8D0", borderRadius: "12px", boxShadow: "0 8px 24px rgba(0,0,0,0.08)", overflow: "hidden", zIndex: 50 }}>
                        {link.submenu.map((sub, index) => (
                          <Link key={sub.href} href={sub.href}
                            style={{ display: "block", padding: "14px 20px", fontSize: "13px", fontWeight: 500, color: "#333333", textDecoration: "none", borderBottom: index < link.submenu!.length - 1 ? "1px solid #F0F7EE" : "none", transition: "all 0.15s" }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#F4F8F2"; (e.currentTarget as HTMLElement).style.color = "#2D5A27"; (e.currentTarget as HTMLElement).style.paddingLeft = "24px"; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#333333"; (e.currentTarget as HTMLElement).style.paddingLeft = "20px"; }}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={link.href} href={link.href} style={{ fontSize: "14px", fontWeight: 500, color: "#333333", textDecoration: "none" }}>
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            <Link href="/contact" style={{ background: "#2D5A27", color: "white", fontWeight: 600, fontSize: "13px", padding: "10px 24px", borderRadius: "6px", textDecoration: "none", whiteSpace: "nowrap" }}>
              Get a Quote
            </Link>
          </div>
        )}

      </header>

      {/* Backdrop */}
      {mobileOpen && (
        <div onClick={closeMobile} aria-hidden="true" style={{ position: "fixed", inset: 0, zIndex: 40, backgroundColor: "rgba(0,0,0,0.2)" }} />
      )}
    </>
  );
}