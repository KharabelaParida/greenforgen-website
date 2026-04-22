"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const categories = ["All", "Residential", "Commercial", "Industrial", "Prefab", "Interior"];

const projects = [
  {
    id: "project-1",
    title: "2BHK Residential Complex",
    category: "Residential",
    location: "Bhubaneswar",
    area: "4,500 sq ft",
    status: "Completed",
    desc: "A modern 2BHK residential complex with 8 units, featuring RCC structure, premium flooring, modular kitchens, and complete electrical and plumbing work. Delivered on time with zero defects.",
    tags: ["Civil Construction", "Interiors", "Electrical"],
    duration: "5 months",
    year: "2024",
  },
  {
    id: "project-2",
    title: "PEB Warehouse",
    category: "Industrial",
    location: "Cuttack",
    area: "10,000 sq ft",
    status: "Completed",
    desc: "A 10,000 sq ft pre-engineered steel warehouse built for a logistics company. The project included foundation work, PEB erection, roofing, flooring, and electrical setup. Delivered 2 weeks ahead of schedule.",
    tags: ["PEB Structure", "Electrical", "Flooring"],
    duration: "8 weeks",
    year: "2024",
  },
  {
    id: "project-3",
    title: "Corporate Office Fit-out",
    category: "Commercial",
    location: "Bhubaneswar",
    area: "3,200 sq ft",
    status: "Ongoing",
    desc: "Complete interior fit-out for a tech company's new office space. Includes open-plan workstations, conference rooms, false ceiling, modular furniture, and smart lighting systems.",
    tags: ["Interiors", "Electrical", "False Ceiling"],
    duration: "3 months",
    year: "2025",
  },
  {
    id: "project-4",
    title: "Modular Site Office",
    category: "Prefab",
    location: "Rourkela",
    area: "400 sq ft",
    status: "Completed",
    desc: "A portable modular site office cabin deployed for a highway construction project. Fully furnished with AC, electrical fittings, workstations, and washroom. Delivered and installed in 10 days.",
    tags: ["Prefab", "Electrical", "Furnishing"],
    duration: "10 days",
    year: "2024",
  },
  {
    id: "project-5",
    title: "Prefab Farmhouse",
    category: "Residential",
    location: "Puri",
    area: "2,800 sq ft",
    status: "Completed",
    desc: "A premium prefab farmhouse with modern aesthetics built as a weekend retreat. Features include open living spaces, wooden cladding, landscaped garden, and complete waterproofing.",
    tags: ["Prefab", "Exterior", "Landscaping"],
    duration: "6 weeks",
    year: "2024",
  },
  {
    id: "project-6",
    title: "Luxury Home Renovation",
    category: "Interior",
    location: "Bhubaneswar",
    area: "1,800 sq ft",
    status: "Ongoing",
    desc: "Complete renovation of a 3BHK apartment including kitchen remodeling, bathroom upgrades, new flooring, false ceiling with cove lighting, and custom wardrobes throughout.",
    tags: ["Renovation", "Interiors", "Electrical"],
    duration: "2.5 months",
    year: "2025",
  },
  {
    id: "project-7",
    title: "Industrial Shed",
    category: "Industrial",
    location: "Sambalpur",
    area: "8,000 sq ft",
    status: "Completed",
    desc: "A large-span industrial shed for a manufacturing unit. Steel structure with insulated roofing, heavy-duty flooring, roller shutter doors, and complete electrical panel setup.",
    tags: ["PEB Structure", "Electrical", "Roofing"],
    duration: "10 weeks",
    year: "2023",
  },
  {
    id: "project-8",
    title: "Retail Showroom",
    category: "Commercial",
    location: "Bhubaneswar",
    area: "2,500 sq ft",
    status: "Completed",
    desc: "A high-end retail showroom with glass facade, custom display units, spot lighting, AC ducting, and premium flooring. Designed for maximum product visibility and customer flow.",
    tags: ["Interiors", "Exterior", "Electrical"],
    duration: "4 months",
    year: "2024",
  },
  {
    id: "project-9",
    title: "Prefab Guard Cabins",
    category: "Prefab",
    location: "Jharsuguda",
    area: "6 units",
    status: "Completed",
    desc: "Six portable guard cabins manufactured and deployed for a mining site. Weather-resistant construction with electrical fittings and ventilation. All units delivered within 2 weeks.",
    tags: ["Prefab", "Electrical", "Batch delivery"],
    duration: "2 weeks",
    year: "2024",
  },
];

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "15+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "4", label: "States Served" },
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

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [expanded, setExpanded] = useState(false);
  const isCompleted = project.status === "Completed";

  return (
    <div
      className="project-card"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E0EDDC",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      {/* Image */}
      <div
        style={{
          backgroundColor: "#E8F5E0",
          aspectRatio: "16/10",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid #D4E8D0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(45,90,39,0.06) 0%, transparent 60%)" }} />
        <span
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            padding: "4px 12px",
            borderRadius: "100px",
            backgroundColor: isCompleted ? "#2D5A27" : "rgba(45,90,39,0.08)",
            color: isCompleted ? "#FFFFFF" : "#2D5A27",
            fontSize: "11px",
            fontWeight: 600,
            zIndex: 1,
          }}
        >
          {project.status}
        </span>
        <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2D5A27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto", display: "block", opacity: 0.4 }}>
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "20px" }}>
        <span style={{ fontSize: "12px", fontWeight: 600, color: "#2D5A27" }}>{project.category}</span>
        <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1A1A1A", marginTop: "4px", marginBottom: "8px" }}>{project.title}</h3>
        <div style={{ display: "flex", gap: "16px", fontSize: "13px", color: "#888888", marginBottom: "14px" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {project.location}
          </span>
          <span>{project.area}</span>
        </div>

        {/* Expandable Details */}
        <div
          style={{
            maxHeight: expanded ? "400px" : "0",
            opacity: expanded ? 1 : 0,
            overflow: "hidden",
            transition: "max-height 0.3s ease, opacity 0.3s ease",
          }}
        >
          <div style={{ borderTop: "1px solid #E8F0E6", paddingTop: "14px", marginBottom: "14px" }}>
            <p style={{ fontSize: "14px", color: "#666666", lineHeight: 1.7, marginBottom: "14px" }}>{project.desc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "14px" }}>
              {project.tags.map((t) => (
                <span key={t} style={{ padding: "4px 12px", borderRadius: "8px", backgroundColor: "#F0F7EE", fontSize: "12px", fontWeight: 500, color: "#2D5A27" }}>
                  {t}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "20px", fontSize: "13px", color: "#888888" }}>
              <span>Duration: {project.duration}</span>
              <span>Year: {project.year}</span>
            </div>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="proj-detail-btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "13px",
            fontWeight: 600,
            color: "#2D5A27",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          {expanded ? "Show less" : "View details"}
          <span className="proj-arrow" style={{ fontSize: "14px" }}>
            {expanded ? "\u2191" : "\u2192"}
          </span>
        </button>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <main style={{ backgroundColor: "#FAFDF8" }}>

      <style jsx global>{`
        .project-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(45, 90, 39, 0.08);
        }
        .proj-detail-btn .proj-arrow {
          opacity: 0;
          transform: translateX(-4px);
          transition: all 0.2s ease;
        }
        .proj-detail-btn:hover .proj-arrow {
          opacity: 1;
          transform: translateX(0);
        }
        .proj-filter-btn {
          transition: background-color 0.2s ease, color 0.2s ease;
          cursor: pointer;
        }
        .proj-filter-btn:hover {
          background-color: #2D5A27 !important;
          color: #fff !important;
        }
        .proj-cta-primary {
          transition: background-color 0.2s ease;
        }
        .proj-cta-primary:hover {
          background-color: #234A1F !important;
        }
        .proj-cta-secondary {
          transition: background-color 0.2s ease;
        }
        .proj-cta-secondary:hover {
          background-color: rgba(45, 90, 39, 0.06) !important;
        }
        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
          .projects-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: 1fr 1fr !important;
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
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#2D5A27", letterSpacing: "1.5px", textTransform: "uppercase" }}>Our Projects</span>
            </div>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "#1A1A1A", lineHeight: 1.15, marginBottom: "20px" }}>
              Built With Precision,<br />
              <span style={{ color: "#2D5A27" }}>Delivered With Pride.</span>
            </h1>
            <p style={{ fontSize: "clamp(16px, 2vw, 18px)", color: "#555555", lineHeight: 1.7, maxWidth: "680px", margin: "0 auto" }}>
              A showcase of our completed and ongoing projects across residential, commercial, industrial, and prefab construction.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* ══ FILTER TABS ══ */}
      <div
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
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className="proj-filter-btn"
            style={{
              padding: "8px 20px",
              borderRadius: "100px",
              backgroundColor: activeFilter === cat ? "#2D5A27" : "rgba(45,90,39,0.08)",
              color: activeFilter === cat ? "#FFFFFF" : "#2D5A27",
              fontSize: "13px",
              fontWeight: 600,
              border: "none",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ══ PROJECT CARDS ══ */}
      <FadeIn>
        <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 24px 80px" }}>
          <div
            className="projects-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {filteredProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <p style={{ fontSize: "16px", color: "#999999" }}>No projects found in this category yet.</p>
            </div>
          )}
        </section>
      </FadeIn>

      {/* ══ STATS BAR ══ */}
      <FadeIn>
        <section style={{ backgroundColor: "#2D5A27", padding: "56px 24px" }}>
          <div
            className="projects-stats-grid"
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

      {/* ══ CTA ══ */}
      <FadeIn>
        <section style={{ padding: "80px 24px", textAlign: "center", backgroundColor: "#FAFDF8" }}>
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", padding: "5px 16px", borderRadius: "100px", backgroundColor: "rgba(45,90,39,0.08)", marginBottom: "16px" }}>
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#2D5A27", letterSpacing: "1.5px", textTransform: "uppercase" }}>Start Your Project</span>
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.2, marginBottom: "16px" }}>
              Have a Project in Mind?<br />
              <span style={{ color: "#2D5A27" }}>Let&apos;s Build It Together.</span>
            </h2>
            <p style={{ fontSize: "15px", color: "#666666", lineHeight: 1.7, marginBottom: "32px" }}>
              Tell us about your vision and we&apos;ll bring it to life with the same quality and commitment you see in our portfolio.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                className="proj-cta-primary"
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
                Start Your Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="proj-cta-secondary"
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
                View Services
              </Link>
            </div>
            <p style={{ fontSize: "13px", color: "#999999", marginTop: "16px" }}>Free consultation &middot; No commitment required</p>
          </div>
        </section>
      </FadeIn>

    </main>
  );
}
