"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    q: "Can I get a free consultation?",
    a: "Absolutely. Your first consultation is completely free with no obligation. We\u2019ll discuss your requirements, visit the site if needed, and provide an initial estimate.",
  },
  {
    q: "How does pricing work?",
    a: "We provide detailed BOQ-based (Bill of Quantities) quotations with full cost breakdowns. No hidden charges \u2014 you know exactly what you\u2019re paying for before work begins.",
  },
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary based on scope. A standard residential project takes 4\u20136 months, while commercial or industrial projects may take 6\u201312 months. We provide a detailed timeline during the planning phase.",
  },
  {
    q: "What types of projects do you handle?",
    a: "We handle residential, commercial, and industrial projects \u2014 including new builds, renovations, prefab structures, interiors, electrical work, and exterior finishing.",
  },
  {
    q: "What areas do you currently serve?",
    a: "We are based in Bhubaneswar, Odisha and currently serve clients across Odisha and neighboring states. We are actively expanding our operational footprint.",
  },
  {
    q: "Is there a warranty on your work?",
    a: "Yes, all our projects come with a warranty. The duration and coverage depend on the type of work \u2014 structural, interior, or exterior. Details are shared in the project agreement.",
  },
  {
    q: "Do you handle all permissions and approvals?",
    a: "Yes, we assist with all necessary municipal approvals, building permits, and regulatory clearances as part of our end-to-end project management service.",
  },
  {
    q: "How do I track my project progress?",
    a: "We provide regular progress updates via WhatsApp and scheduled site visits. You will always know exactly where your project stands.",
  },
  {
    q: "What is the minimum project size you take on?",
    a: "We take on projects of all sizes \u2014 from a single-room interior fit-out to a 10,000+ sq ft commercial or industrial build. No project is too small or too large.",
  },
  {
    q: "What happens after project handover?",
    a: "We provide post-handover support including warranty coverage, maintenance guidance, and responsive after-sales service. We don\u2019t disappear after delivery.",
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

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E0EDDC",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 22px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{ fontSize: "15px", fontWeight: 600, color: "#1A1A1A", paddingRight: "16px" }}>{q}</span>
        <span
          style={{
            fontSize: "20px",
            color: "#2D5A27",
            flexShrink: 0,
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? "300px" : "0",
          opacity: open ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.3s ease, opacity 0.3s ease",
        }}
      >
        <p style={{ fontSize: "14px", color: "#666666", lineHeight: 1.7, padding: "0 22px 18px" }}>{a}</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main style={{ backgroundColor: "#FAFDF8" }}>

      <style jsx global>{`
        .contact-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .contact-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(45, 90, 39, 0.08);
        }
        .contact-input {
          width: 100%;
          height: 44px;
          padding: 0 14px;
          border-radius: 10px;
          border: 1px solid #D4E8D0;
          background-color: #FAFDF8;
          font-size: 14px;
          color: #1A1A1A;
          outline: none;
          transition: border-color 0.2s ease;
          font-family: inherit;
        }
        .contact-input:focus {
          border-color: #2D5A27;
        }
        .contact-textarea {
          width: 100%;
          min-height: 120px;
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid #D4E8D0;
          background-color: #FAFDF8;
          font-size: 14px;
          color: #1A1A1A;
          outline: none;
          resize: vertical;
          transition: border-color 0.2s ease;
          font-family: inherit;
        }
        .contact-textarea:focus {
          border-color: #2D5A27;
        }
        .contact-select {
          width: 100%;
          height: 44px;
          padding: 0 14px;
          border-radius: 10px;
          border: 1px solid #D4E8D0;
          background-color: #FAFDF8;
          font-size: 14px;
          color: #1A1A1A;
          outline: none;
          appearance: none;
          cursor: pointer;
          transition: border-color 0.2s ease;
          font-family: inherit;
        }
        .contact-select:focus {
          border-color: #2D5A27;
        }
        .contact-submit {
          width: 100%;
          height: 48px;
          background-color: #2D5A27;
          color: #FFFFFF;
          font-size: 15px;
          font-weight: 600;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background-color 0.2s ease;
          font-family: inherit;
        }
        .contact-submit:hover {
          background-color: #234A1F;
        }
        @media (max-width: 768px) {
          .contact-info-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .contact-main-grid {
            grid-template-columns: 1fr !important;
          }
            .faq-grid {
    grid-template-columns: 1fr !important;
  }
        }
        @media (max-width: 480px) {
          .contact-info-grid {
            grid-template-columns: 1fr !important;
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
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#2D5A27", letterSpacing: "1.5px", textTransform: "uppercase" }}>Contact Us</span>
            </div>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "#1A1A1A", lineHeight: 1.15, marginBottom: "20px" }}>
              Let&apos;s Discuss<br />
              <span style={{ color: "#2D5A27" }}>Your Project.</span>
            </h1>
            <p style={{ fontSize: "clamp(16px, 2vw, 18px)", color: "#555555", lineHeight: 1.7, maxWidth: "680px", margin: "0 auto" }}>
              Get in touch for a free consultation and project estimate. Our team responds within 24 hours.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* ══ 4 CONTACT INFO CARDS ══ */}
      <FadeIn>
        <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 24px 60px" }}>
          <div
            className="contact-info-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
            }}
          >
            {/* Phone */}
            <Link href="tel:+91XXXXXXXXXX" style={{ textDecoration: "none" }}>
              <div className="contact-card" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0EDDC", borderRadius: "14px", padding: "28px 20px", textAlign: "center" }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "12px", backgroundColor: "rgba(45,90,39,0.08)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2D5A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1A1A1A", marginBottom: "4px" }}>Call Us</h3>
                <p style={{ fontSize: "13px", color: "#666666" }}>+91 XXXXX XXXXX</p>
              </div>
            </Link>

            {/* Email */}
            <Link href="mailto:info@greenforgen.com" style={{ textDecoration: "none" }}>
              <div className="contact-card" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0EDDC", borderRadius: "14px", padding: "28px 20px", textAlign: "center" }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "12px", backgroundColor: "rgba(45,90,39,0.08)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2D5A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1A1A1A", marginBottom: "4px" }}>Email Us</h3>
                <p style={{ fontSize: "13px", color: "#666666" }}>info@greenforgen.com</p>
              </div>
            </Link>

            {/* Location */}
            <div className="contact-card" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0EDDC", borderRadius: "14px", padding: "28px 20px", textAlign: "center" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "12px", backgroundColor: "rgba(45,90,39,0.08)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2D5A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1A1A1A", marginBottom: "4px" }}>Visit Us</h3>
              <p style={{ fontSize: "13px", color: "#666666" }}>Bhubaneswar, Odisha</p>
            </div>

            {/* WhatsApp */}
            <Link href="https://wa.me/91XXXXXXXXXX" style={{ textDecoration: "none" }}>
              <div className="contact-card" style={{ backgroundColor: "#2D5A27", border: "1px solid #2D5A27", borderRadius: "14px", padding: "28px 20px", textAlign: "center" }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "12px", backgroundColor: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#FFFFFF", marginBottom: "4px" }}>WhatsApp</h3>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>Chat with us directly</p>
              </div>
            </Link>
          </div>
        </section>
      </FadeIn>

      {/* ══ FORM + MAP ══ */}
      <FadeIn>
        <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 80px" }}>
          <div
            className="contact-main-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px",
              alignItems: "start",
            }}
          >
            {/* Contact Form */}
            <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0EDDC", borderRadius: "16px", padding: "36px 32px" }}>
              <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#1A1A1A", marginBottom: "24px" }}>Send us a message</h2>

              <form onSubmit={handleSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                  <div>
                    <label style={{ fontSize: "13px", fontWeight: 600, color: "#555555", display: "block", marginBottom: "6px" }}>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="contact-input"
                      required
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: "13px", fontWeight: 600, color: "#555555", display: "block", marginBottom: "6px" }}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="contact-input"
                      required
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label style={{ fontSize: "13px", fontWeight: 600, color: "#555555", display: "block", marginBottom: "6px" }}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="contact-input"
                    required
                  />
                </div>

                <div style={{ marginBottom: "16px", position: "relative" }}>
                  <label style={{ fontSize: "13px", fontWeight: 600, color: "#555555", display: "block", marginBottom: "6px" }}>Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="contact-select"
                    required
                  >
                    <option value="">Select a service...</option>
                    <option value="civil">Civil Construction</option>
                    <option value="renovation">Renovation &amp; Interiors</option>
                    <option value="electrical">Electrical &amp; Utility</option>
                    <option value="exterior">Exterior &amp; Finishing</option>
                    <option value="prefab">Prefab &amp; Modular Structures</option>
                    <option value="other">Other</option>
                  </select>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: "absolute", right: "14px", top: "38px", pointerEvents: "none" }}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label style={{ fontSize: "13px", fontWeight: 600, color: "#555555", display: "block", marginBottom: "6px" }}>Project Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project \u2014 type, location, approximate size, timeline..."
                    className="contact-textarea"
                  />
                </div>

                <button type="submit" className="contact-submit">
                  {submitted ? "Message Sent!" : "Send Message"}
                </button>
                <p style={{ fontSize: "13px", color: "#999999", textAlign: "center", marginTop: "10px" }}>We respond within 24 hours</p>
              </form>
            </div>

            {/* Right Column: Map + Hours */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", height: "100%" }}>
              {/* Map Placeholder */}
              <div
                style={{
                  backgroundColor: "#E8F5E0",
                  borderRadius: "16px",
                  border: "1px solid #D4E8D0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                  minHeight: "280px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(45,90,39,0.06) 0%, transparent 60%)" }} />
                <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#2D5A27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto 12px", display: "block", opacity: 0.5 }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p style={{ fontSize: "14px", fontWeight: 500, color: "#2D5A27", opacity: 0.6 }}>Google Maps Embed</p>
                </div>
              </div>

              {/* Working Hours */}
              <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0EDDC", borderRadius: "16px", padding: "28px 24px" }}>
                <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#1A1A1A", marginBottom: "16px" }}>Working Hours</h3>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", paddingBottom: "10px", borderBottom: "1px solid #F0F7EE" }}>
                  <span style={{ fontSize: "14px", color: "#666666" }}>Monday - Saturday</span>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "#1A1A1A" }}>9:00 AM - 6:00 PM</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "14px", color: "#666666" }}>Sunday</span>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "#CC3333" }}>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ══ FAQ ══ */}
      <FadeIn>
        <section style={{ backgroundColor: "#F0F7EE", padding: "80px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <div style={{ display: "inline-block", padding: "5px 16px", borderRadius: "100px", backgroundColor: "rgba(45,90,39,0.08)", marginBottom: "16px" }}>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#2D5A27", letterSpacing: "1.5px", textTransform: "uppercase" }}>FAQ</span>
              </div>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.2 }}>
                Frequently Asked Questions
              </h2>
            </div>

            <div className="faq-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

    </main>
  );
}
