"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const stats = [
  { number: "15+", label: "Years of Expertise" },
  { number: "4", label: "Service Verticals" },
  { number: "2025", label: "Year Founded" },
  { number: "100%", label: "Commitment" },
];

const journey = [
  {
    period: "~2010",
    title: "Foundations in Construction & Cement",
    desc: "Our founder began his career in India's cement manufacturing and construction industry, gaining hands-on experience in project execution, material science, and structural engineering.",
  },
  {
    period: "2010–2025",
    title: "15+ Years at India's Leading Companies",
    desc: "Over a decade and a half, he held key roles at some of the country's most respected cement and construction companies — managing large-scale residential, commercial, and industrial projects across multiple states.",
  },
  {
    period: "2025",
    title: "Greenforgen Is Born",
    desc: "Armed with deep industry knowledge and a network built over 15+ years, Greenforgen was founded in Bhubaneswar with a clear mission — bring corporate-grade quality, transparent processes, and end-to-end delivery to every construction project.",
  },
];

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2D5A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Uncompromised Quality",
    desc: "Premium-grade materials and rigorous quality checks at every stage of construction — no shortcuts, no compromises.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2D5A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "On-Time Delivery",
    desc: "Disciplined project management and structured timelines ensure every milestone is hit and every handover happens on schedule.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2D5A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Client-First Mindset",
    desc: "Your vision drives every decision. We listen, plan collaboratively, and keep you informed at every stage of the project.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2D5A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Full Transparency",
    desc: "Clear pricing, honest timelines, and open communication throughout. No hidden costs, no surprises — ever.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2D5A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "End-to-End Delivery",
    desc: "From foundation to finishing — one team manages design, fabrication, construction, and handover seamlessly.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2D5A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "Sustainable Building",
    desc: "Eco-conscious materials and green construction practices to reduce environmental impact across all our projects.",
  },
];

const differentiators = [
  { num: "01", title: "Corporate Expertise, Startup Agility", desc: "Quality systems honed over 15+ years at India's top companies — delivered with the speed and focus of a dedicated team." },
  { num: "02", title: "Single Point of Contact", desc: "One dedicated project manager handles everything from start to finish — no chasing multiple vendors or contractors." },
  { num: "03", title: "Transparent Pricing", desc: "Detailed BOQ-based quotations with full cost breakdowns. You know exactly what you're paying for — no hidden charges." },
  { num: "04", title: "Industry-Grade Materials", desc: "15+ years of relationships with top manufacturers mean better materials at better prices for every project." },
  { num: "05", title: "All 4 Verticals In-House", desc: "Civil construction, interiors, electrical, and exterior finishing — all managed under one roof with no subcontracting of critical work." },
  { num: "06", title: "Post-Handover Support", desc: "We don't disappear after delivery. Warranty-backed work with responsive after-sales support whenever you need it." },
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

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: "#FAFDF8" }}>

      <style jsx global>{`
        .about-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .about-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(45, 90, 39, 0.08);
        }
        .about-cta-primary {
          transition: background-color 0.2s ease;
        }
        .about-cta-primary:hover {
          background-color: #234A1F !important;
        }
        .about-cta-secondary {
          transition: background-color 0.2s ease;
        }
        .about-cta-secondary:hover {
          background-color: rgba(45, 90, 39, 0.06) !important;
        }
        @media (max-width: 768px) {
          .about-founder-grid {
            grid-template-columns: 1fr !important;
          }
          .about-values-grid {
            grid-template-columns: 1fr !important;
          }
          .about-diff-grid {
            grid-template-columns: 1fr !important;
          }
          .about-team-grid {
            grid-template-columns: 1fr !important;
          }
          .about-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .about-values-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .about-diff-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .about-team-grid {
            grid-template-columns: repeat(2, 1fr) !important;
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
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#2D5A27", letterSpacing: "1.5px", textTransform: "uppercase" }}>About Greenforgen</span>
            </div>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "#1A1A1A", lineHeight: 1.15, marginBottom: "20px" }}>
              New Company.<br />
              <span style={{ color: "#2D5A27" }}>15+ Years of Expertise.</span>
            </h1>
            <p style={{ fontSize: "clamp(16px, 2vw, 18px)", color: "#555555", lineHeight: 1.7, maxWidth: "680px", margin: "0 auto" }}>
              Greenforgen is a full-service construction company founded in 2025 in Bhubaneswar, Odisha — built on over 15 years of hands-on experience across India&apos;s leading cement and construction companies.
            </p>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px" }}>
          <div
            className="about-founder-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#E8F5E0",
                borderRadius: "16px",
                aspectRatio: "4/3",
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
                <p style={{ fontSize: "14px", fontWeight: 500, opacity: 0.6 }}>Founder Photo</p>
              </div>
            </div>

            <div>
              <div style={{ display: "inline-block", padding: "5px 16px", borderRadius: "100px", backgroundColor: "rgba(45,90,39,0.08)", marginBottom: "16px" }}>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#2D5A27", letterSpacing: "1.5px", textTransform: "uppercase" }}>The Founder</span>
              </div>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.2, marginBottom: "20px" }}>
                15+ Years Building India&apos;s Infrastructure — Now Building Yours.
              </h2>
              <p style={{ fontSize: "15px", color: "#555555", lineHeight: 1.8, marginBottom: "16px" }}>
                Before founding Greenforgen, our founder spent over 15 years working with some of India&apos;s most respected names in cement manufacturing and construction.
              </p>
              <p style={{ fontSize: "15px", color: "#555555", lineHeight: 1.8, marginBottom: "16px" }}>
                From large-scale industrial projects to residential developments, this deep industry experience now powers every Greenforgen project — with the quality standards of a major corporation and the agility of a focused team.
              </p>
              <p style={{ fontSize: "15px", color: "#555555", lineHeight: 1.8 }}>
                That combination is what makes Greenforgen different: we know how to build at scale, and we bring that same discipline and precision to every project — no matter the size.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section style={{ backgroundColor: "#2D5A27", padding: "56px 24px" }}>
          <div
            className="about-stats-grid"
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "32px",
              textAlign: "center",
            }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1 }}>{s.number}</div>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.7)", marginTop: "8px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section style={{ maxWidth: "900px", margin: "0 auto", padding: "80px 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ display: "inline-block", padding: "5px 16px", borderRadius: "100px", backgroundColor: "rgba(45,90,39,0.08)", marginBottom: "16px" }}>
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#2D5A27", letterSpacing: "1.5px", textTransform: "uppercase" }}>The Journey</span>
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.2 }}>
              From Industry Veteran to Entrepreneur
            </h2>
          </div>

          <div style={{ position: "relative", paddingLeft: "36px" }}>
            <div style={{ position: "absolute", left: "11px", top: "8px", bottom: "8px", width: "2px", backgroundColor: "#D4E8D0" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
              {journey.map((m) => (
                <div key={m.period} style={{ position: "relative" }}>
                  <div style={{ position: "absolute", left: "-32px", top: "6px", width: "14px", height: "14px", borderRadius: "50%", backgroundColor: "#2D5A27", border: "3px solid #E8F5E0", zIndex: 1 }} />
                  <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8F0E6", borderRadius: "12px", padding: "24px 28px" }}>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "#2D5A27", letterSpacing: "0.5px" }}>{m.period}</span>
                    <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1A1A1A", marginTop: "4px", marginBottom: "8px" }}>{m.title}</h3>
                    <p style={{ fontSize: "14px", color: "#666666", lineHeight: 1.7 }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section style={{ backgroundColor: "#F0F7EE", padding: "80px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <div style={{ display: "inline-block", padding: "5px 16px", borderRadius: "100px", backgroundColor: "rgba(45,90,39,0.08)", marginBottom: "16px" }}>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#2D5A27", letterSpacing: "1.5px", textTransform: "uppercase" }}>What We Stand For</span>
              </div>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.2 }}>
                Our Core Values
              </h2>
            </div>

            <div
              className="about-values-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
              }}
            >
              {values.map((v) => (
                <div
                  key={v.title}
                  className="about-card"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E0EDDC",
                    borderRadius: "14px",
                    padding: "32px 28px",
                  }}
                >
                  <div style={{ width: "52px", height: "52px", borderRadius: "12px", backgroundColor: "#F0F7EE", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                    {v.icon}
                  </div>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#1A1A1A", marginBottom: "10px" }}>{v.title}</h3>
                  <p style={{ fontSize: "14px", color: "#666666", lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <div style={{ display: "inline-block", padding: "5px 16px", borderRadius: "100px", backgroundColor: "rgba(45,90,39,0.08)", marginBottom: "16px" }}>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#2D5A27", letterSpacing: "1.5px", textTransform: "uppercase" }}>Why Greenforgen</span>
              </div>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.2 }}>
                What Sets Us Apart
              </h2>
            </div>

            <div
              className="about-diff-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
              }}
            >
              {differentiators.map((d) => (
                <div
                  key={d.num}
                  className="about-card"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E8F0E6",
                    borderRadius: "12px",
                    padding: "28px 24px",
                  }}
                >
                  <span style={{ fontSize: "28px", fontWeight: 800, color: "rgba(45,90,39,0.12)", lineHeight: 1 }}>{d.num}</span>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1A1A1A", marginTop: "12px", marginBottom: "8px" }}>{d.title}</h3>
                  <p style={{ fontSize: "14px", color: "#666666", lineHeight: 1.7 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section style={{ backgroundColor: "#F0F7EE", padding: "80px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <div style={{ display: "inline-block", padding: "5px 16px", borderRadius: "100px", backgroundColor: "rgba(45,90,39,0.08)", marginBottom: "16px" }}>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#2D5A27", letterSpacing: "1.5px", textTransform: "uppercase" }}>Our Team</span>
              </div>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.2 }}>
                The People Behind Greenforgen
              </h2>
              <p style={{ fontSize: "15px", color: "#666666", lineHeight: 1.7, maxWidth: "560px", margin: "16px auto 0" }}>
                A growing team of experienced professionals dedicated to delivering excellence on every project.
              </p>
            </div>

            <div
              className="about-team-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
              }}
            >
              {[
                { initials: "F", role: "Founder & Managing Director", desc: "15+ years of experience across India's top cement and construction companies. Leading Greenforgen's vision, strategy, and operations." },
                { initials: "E", role: "Lead Engineer", desc: "Experienced structural engineer overseeing all civil works, prefab projects, and on-site execution quality." },
                { initials: "P", role: "Project Manager", desc: "Ensuring every project stays on time, within budget, and meets Greenforgen's quality benchmarks." },
              ].map((member) => (
                <div
                  key={member.role}
                  className="about-card"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E0EDDC",
                    borderRadius: "14px",
                    padding: "32px 24px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "linear-gradient(135deg, #2D5A27, #4A8F42)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                    <span style={{ fontSize: "24px", fontWeight: 700, color: "#FFFFFF" }}>{member.initials}</span>
                  </div>
                  <p style={{ fontSize: "11px", color: "#999", marginBottom: "12px", fontStyle: "italic" }}>Replace with team photo</p>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1A1A1A", marginBottom: "8px" }}>{member.role}</h3>
                  <p style={{ fontSize: "13px", color: "#666666", lineHeight: 1.6 }}>{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section style={{ padding: "80px 24px", textAlign: "center", backgroundColor: "#FAFDF8" }}>
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", padding: "5px 16px", borderRadius: "100px", backgroundColor: "rgba(45,90,39,0.08)", marginBottom: "16px" }}>
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#2D5A27", letterSpacing: "1.5px", textTransform: "uppercase" }}>Work With Us</span>
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.2, marginBottom: "16px" }}>
              Let&apos;s Build Something<br />
              <span style={{ color: "#2D5A27" }}>Great Together.</span>
            </h2>
            <p style={{ fontSize: "15px", color: "#666666", lineHeight: 1.7, marginBottom: "32px" }}>
              Whether it&apos;s a new construction project, a renovation, or a prefab solution — our team is ready to make it happen.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                className="about-cta-primary"
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
                Book a Free Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="about-cta-secondary"
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
                View Our Services
              </Link>
            </div>
            <p style={{ fontSize: "13px", color: "#999999", marginTop: "16px" }}>Free consultation · No commitment required</p>
          </div>
        </section>
      </FadeIn>

    </main>
  );
}