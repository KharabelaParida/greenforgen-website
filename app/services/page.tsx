"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    id: "civil",
    title: "Civil Construction",
    desc: "Complete structural construction from foundation to frame — residential buildings, commercial spaces, industrial facilities, and institutional projects built to last.",
    tags: ["Foundation & RCC", "Structural Framing", "Masonry", "Formwork", "Multi-Storey"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2D5A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "renovation",
    title: "Renovation & Interiors",
    desc: "Transform existing spaces with modern interior design, space planning, modular kitchens, false ceilings, flooring, and complete renovation solutions for homes and offices.",
    tags: ["Space Planning", "Modular Kitchens", "False Ceiling", "Flooring", "Full Renovation"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2D5A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: "electrical",
    title: "Electrical & Utility",
    desc: "Complete electrical infrastructure — wiring, panel boards, earthing, lighting design, generator setups, and plumbing for residential and commercial projects.",
    tags: ["Wiring & Cabling", "Panel Boards", "Earthing", "Plumbing", "Lighting Design"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2D5A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    id: "exterior",
    title: "Exterior & Finishing",
    desc: "The final layer that makes a building shine — waterproofing, exterior cladding, painting, landscaping, boundary walls, and compound development.",
    tags: ["Waterproofing", "Cladding", "Painting", "Landscaping", "Boundary Walls"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2D5A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
];

const processSteps = [
  { num: 1, title: "Consultation", desc: "We sit down with you to understand your project requirements, budget constraints, and desired timeline. Free & no-obligation." },
  { num: 2, title: "Site Survey", desc: "On-ground assessment of your site — soil conditions, access points, measurements, and any constraints before we plan." },
  { num: 3, title: "Planning & BOQ", desc: "Detailed architectural drawings, structural plans, and a transparent Bill of Quantities — so you know exactly what you're paying for." },
  { num: 4, title: "Execution", desc: "On-site construction managed by experienced engineers with rigorous quality checks at every milestone. Regular progress updates." },
  { num: 5, title: "Quality Inspection", desc: "Final walkthrough with you — snag list, fixes, and complete sign-off before we hand over the keys." },
  { num: 6, title: "Handover & Support", desc: "Documentation handover, warranty activation, and responsive after-sales support whenever you need it." },
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

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div
      style={{
        backgroundColor: "#E8F5E0",
        borderRadius: "16px",
        aspectRatio: "16/10",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #D4E8D0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(45,90,39,0.06) 0%, transparent 60%)" }} />
      <div style={{ textAlign: "center", color: "#2D5A27", position: "relative", zIndex: 1 }}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#2D5A27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto 12px", display: "block", opacity: 0.5 }}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <p style={{ fontSize: "14px", fontWeight: 500, opacity: 0.6 }}>{label}</p>
      </div>
    </div>
  );
}

function ProcessImagePlaceholder({ label }: { label: string }) {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "14px",
        aspectRatio: "16/10",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #D4E8D0",
      }}
    >
      <div style={{ textAlign: "center", opacity: 0.5 }}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2D5A27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto 8px", display: "block" }}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <p style={{ fontSize: "12px", fontWeight: 500, color: "#2D5A27" }}>{label}</p>
      </div>
    </div>
  );
}

function PillNav() {
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className="svc-pills-row"
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        padding: "20px 24px",
        flexWrap: "wrap",
        borderBottom: "1px solid #E8F0E6",
        backgroundColor: "#FAFDF8",
      }}
    >
      {services.map((s) => (
        <button
          key={s.id}
          onClick={() => handleClick(s.id)}
          className="svc-pill"
          style={{
            padding: "8px 20px",
            borderRadius: "100px",
            backgroundColor: "rgba(45,90,39,0.08)",
            color: "#2D5A27",
            fontSize: "13px",
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
          }}
        >
          {s.title}
        </button>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main style={{ backgroundColor: "#FAFDF8" }}>

      <style jsx global>{`
        .svc-tag {
          transition: background-color 0.2s ease;
        }
        .svc-tag:hover {
          background-color: #E0EDDC !important;
        }
        .svc-cta-primary {
          transition: background-color 0.2s ease;
        }
        .svc-cta-primary:hover {
          background-color: #234A1F !important;
        }
        .svc-cta-secondary {
          transition: background-color 0.2s ease;
        }
        .svc-cta-secondary:hover {
          background-color: rgba(45, 90, 39, 0.06) !important;
        }
        .svc-pill {
          transition: background-color 0.2s ease, color 0.2s ease;
        }
        .svc-pill:hover {
          background-color: #2D5A27 !important;
          color: #fff !important;
        }
        @media (max-width: 768px) {
          .svc-service-grid {
            grid-template-columns: 1fr !important;
          }
          .svc-process-step {
            grid-template-columns: 1fr !important;
          }
          .svc-process-step .svc-text-right {
            text-align: left !important;
          }
          .svc-process-step .svc-flex-end {
            justify-content: flex-start !important;
          }
          .svc-process-step .svc-pad-right {
            padding-right: 0 !important;
            padding-left: 50px !important;
          }
          .svc-process-line {
            display: none !important;
          }
          .svc-pills-row {
            display: none !important;
          }
          .svc-image-order-first {
            order: -1 !important;
          }
        }
      `}</style>

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
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#2D5A27", letterSpacing: "1.5px", textTransform: "uppercase" }}>Our Services</span>
            </div>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "#1A1A1A", lineHeight: 1.15, marginBottom: "20px" }}>
              End-to-End Construction,<br />
              <span style={{ color: "#2D5A27" }}>All Under One Roof.</span>
            </h1>
            <p style={{ fontSize: "clamp(16px, 2vw, 18px)", color: "#555555", lineHeight: 1.7, maxWidth: "680px", margin: "0 auto" }}>
              From civil works to finishing — we handle every phase of your project with precision, transparency, and quality that comes from 15+ years of industry experience.
            </p>
          </div>
        </section>
      </FadeIn>

      <PillNav />

      {services.map((s, i) => {
        const isReversed = i % 2 !== 0;
        return (
          <FadeIn key={s.id}>
            <section
              id={s.id}
              style={{
                maxWidth: "1100px",
                margin: "0 auto",
                padding: "80px 24px",
                borderBottom: i < services.length - 1 ? "1px solid #E8F0E6" : "none",
              }}
            >
              <div
                className="svc-service-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "48px",
                  alignItems: "center",
                }}
              >
                {isReversed ? (
                  <>
                    <div className="svc-image-order-first">
                      <ImagePlaceholder label={s.title} />
                    </div>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                        <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "rgba(45,90,39,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          {s.icon}
                        </div>
                        <h2 style={{ fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700, color: "#1A1A1A" }}>{s.title}</h2>
                      </div>
                      <p style={{ fontSize: "15px", color: "#555555", lineHeight: 1.8, marginBottom: "20px" }}>{s.desc}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {s.tags.map((tag) => (
                          <span key={tag} className="svc-tag" style={{ padding: "6px 14px", borderRadius: "8px", backgroundColor: "#F0F7EE", fontSize: "13px", fontWeight: 500, color: "#2D5A27" }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                        <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "rgba(45,90,39,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          {s.icon}
                        </div>
                        <h2 style={{ fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700, color: "#1A1A1A" }}>{s.title}</h2>
                      </div>
                      <p style={{ fontSize: "15px", color: "#555555", lineHeight: 1.8, marginBottom: "20px" }}>{s.desc}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {s.tags.map((tag) => (
                          <span key={tag} className="svc-tag" style={{ padding: "6px 14px", borderRadius: "8px", backgroundColor: "#F0F7EE", fontSize: "13px", fontWeight: 500, color: "#2D5A27" }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <ImagePlaceholder label={s.title} />
                    </div>
                  </>
                )}
              </div>
            </section>
          </FadeIn>
        );
      })}

      <FadeIn>
        <section style={{ backgroundColor: "#F0F7EE", padding: "80px 24px" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <div style={{ display: "inline-block", padding: "5px 16px", borderRadius: "100px", backgroundColor: "rgba(45,90,39,0.08)", marginBottom: "16px" }}>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#2D5A27", letterSpacing: "1.5px", textTransform: "uppercase" }}>How We Work</span>
              </div>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.2 }}>
                Our Process
              </h2>
            </div>

            <div style={{ position: "relative" }}>
              <div
                className="svc-process-line"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "20px",
                  bottom: "20px",
                  width: "2px",
                  backgroundColor: "#D4E8D0",
                  transform: "translateX(-1px)",
                  zIndex: 0,
                }}
              />

              <div style={{ display: "flex", flexDirection: "column", gap: "40px", position: "relative", zIndex: 1 }}>
                {processSteps.map((step, i) => {
                  const isLeft = i % 2 === 0;
                  const stepLabel = "Step " + String(step.num).padStart(2, "0");

                  return (
                    <div
                      key={step.num}
                      className="svc-process-step"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "16px",
                        alignItems: "center",
                      }}
                    >
                      {isLeft ? (
                        <>
                          <div className="svc-text-right" style={{ padding: "8px 0", textAlign: "right" }}>
                            <div className="svc-flex-end" style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "flex-end", marginBottom: "10px" }}>
                              <div>
                                <span style={{ fontSize: "11px", fontWeight: 600, color: "#2D5A27", letterSpacing: "1px", textTransform: "uppercase" }}>{stepLabel}</span>
                                <div style={{ fontSize: "18px", fontWeight: 700, color: "#1A1A1A" }}>{step.title}</div>
                              </div>
                              <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#2D5A27", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: 600, flexShrink: 0, border: "3px solid #E8F5E0" }}>
                                {step.num}
                              </div>
                            </div>
                            <p className="svc-pad-right" style={{ fontSize: "14px", color: "#666666", lineHeight: 1.7, paddingRight: "50px" }}>{step.desc}</p>
                          </div>
                          <ProcessImagePlaceholder label={step.title} />
                        </>
                      ) : (
                        <>
                          <ProcessImagePlaceholder label={step.title} />
                          <div style={{ padding: "8px 0" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                              <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#2D5A27", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: 600, flexShrink: 0, border: "3px solid #E8F5E0" }}>
                                {step.num}
                              </div>
                              <div>
                                <span style={{ fontSize: "11px", fontWeight: 600, color: "#2D5A27", letterSpacing: "1px", textTransform: "uppercase" }}>{stepLabel}</span>
                                <div style={{ fontSize: "18px", fontWeight: 700, color: "#1A1A1A" }}>{step.title}</div>
                              </div>
                            </div>
                            <p style={{ fontSize: "14px", color: "#666666", lineHeight: 1.7, paddingLeft: "50px" }}>{step.desc}</p>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section style={{ padding: "80px 24px", textAlign: "center", backgroundColor: "#FAFDF8" }}>
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", padding: "5px 16px", borderRadius: "100px", backgroundColor: "rgba(45,90,39,0.08)", marginBottom: "16px" }}>
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#2D5A27", letterSpacing: "1.5px", textTransform: "uppercase" }}>Get Started</span>
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.2, marginBottom: "16px" }}>
              Need a Custom Solution?<br />
              <span style={{ color: "#2D5A27" }}>Let&apos;s Talk.</span>
            </h2>
            <p style={{ fontSize: "15px", color: "#666666", lineHeight: 1.7, marginBottom: "32px" }}>
              Tell us about your project and we&apos;ll put together a tailored plan with transparent pricing and a clear timeline.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                className="svc-cta-primary"
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
                Get a Free Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="svc-cta-secondary"
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
                Call Us Now
              </Link>
            </div>
            <p style={{ fontSize: "13px", color: "#999999", marginTop: "16px" }}>Free consultation · No commitment required</p>
          </div>
        </section>
      </FadeIn>

    </main>
  );
}
