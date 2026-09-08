import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Akshar Production & Technology - Digital Agency",
  description:
    "Learn about Akshar Production & Technology, founded by Chirag Mali. Discover our journey, core values, milestones, and mission to deliver digital excellence in web development and marketing.",
  alternates: {
    canonical: "https://aksharproduction.com/about",
  },
  openGraph: {
    title: "About Us | Akshar Production & Technology",
    description:
      "Learn about Akshar Production & Technology, our founder Chirag Mali, and our mission to transform businesses through cutting-edge digital experiences.",
    url: "https://aksharproduction.com/about",
    type: "website",
    siteName: "Akshar Production & Technology",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Akshar Production & Technology",
    description:
      "Learn about Akshar Production & Technology, our values, and our journey building impactful digital experiences.",
  },
};

const values = [
  {
    icon: "💎",
    title: "Quality First",
    description:
      "We never compromise on craftsmanship. Every project receives rigorous attention to detail, performance, and aesthetic precision.",
  },
  {
    icon: "🤝",
    title: "True Client Partnership",
    description:
      "We treat our clients as collaborative partners, aligning our technical execution directly with your long-term business goals.",
  },
  {
    icon: "🚀",
    title: "Continuous Innovation",
    description:
      "We stay ahead of modern design and engineering trends to deliver solutions that give our clients a decisive competitive advantage.",
  },
  {
    icon: "📊",
    title: "Results-Driven",
    description:
      "We obsess over measurable outcomes: higher conversions, faster load speeds, and real return on marketing investment.",
  },
];

const milestones = [
  {
    year: "2023",
    title: "Agency Founded",
    description:
      "Started with a mission to deliver premium digital solutions and high-performing web platforms for growing brands.",
  },
  {
    year: "2023",
    title: "First Key Client Wins",
    description:
      "Delivered complete online branding and digital infrastructure for early clients across e-commerce, dining, and healthcare.",
  },
  {
    year: "2024",
    title: "Portfolio Expansion & Tech Revamp",
    description:
      "Expanded specialized services across full-stack Next.js web applications, targeted performance advertising, and viral video editing.",
  },
  {
    year: "2024+",
    title: "Scalable Growth & Impact",
    description:
      "Recognized for top-tier client retention and 50+ successful projects delivered across multiple industries.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section
          style={{
            paddingTop: "160px",
            paddingBottom: "80px",
            background:
              "linear-gradient(180deg, rgba(63, 61, 153, 0.15) 0%, transparent 100%)",
          }}
        >
          <div className="container">
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <span className="section-badge">About Our Agency</span>
              <h1 style={{ marginBottom: "24px", marginTop: "20px" }}>
                We&apos;re Building the{" "}
                <span className="text-gradient">Future of Digital</span>
              </h1>
              <p className="lead" style={{ maxWidth: "650px", margin: "0 auto 36px" }}>
                Akshar Production &amp; Technology is a full-service digital agency dedicated
                to helping businesses thrive in the digital age through world-class engineering,
                performance marketing, and cinematic storytelling.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Link href="/#contact" className="btn btn-primary">
                  Work With Us
                </Link>
                <Link href="/#services" className="btn btn-secondary">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section">
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
                gap: "64px",
                alignItems: "center",
              }}
            >
              <div>
                <span className="section-badge">Our Story</span>
                <h2 style={{ marginTop: "20px", marginBottom: "20px" }}>
                  From Passion to <span className="text-gradient">Excellence</span>
                </h2>
                <p style={{ marginBottom: "16px", color: "var(--foreground-secondary)" }}>
                  Founded in 2023, Akshar Production and Technology began with a clear mission:
                  to eliminate technical mediocrity and help ambitious brands build exceptional
                  digital presences that scale.
                </p>
                <p style={{ marginBottom: "16px", color: "var(--foreground-secondary)" }}>
                  What started as a focused endeavor by Chirag Mali has rapidly expanded into a
                  trusted digital partner for clients across retail, fashion, food &amp;
                  beverage, and political media.
                </p>
                <p style={{ color: "var(--foreground-secondary)" }}>
                  We bridge the gap between creative visual artistry and clean, modern code.
                  Every website we launch and every campaign we manage is built to dominate.
                </p>
              </div>

              <div
                style={{
                  background: "var(--gradient-brand-soft)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--card-radius)",
                  padding: "48px 36px",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "32px",
                  boxShadow: "0 0 40px var(--primary-glow)",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "2.8rem",
                      fontWeight: "800",
                      fontFamily: "var(--font-display)",
                      color: "var(--accent-bright)",
                    }}
                  >
                    50+
                  </div>
                  <div style={{ color: "var(--foreground-secondary)", fontSize: "0.95rem" }}>
                    Projects Delivered
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "2.8rem",
                      fontWeight: "800",
                      fontFamily: "var(--font-display)",
                      color: "var(--accent-bright)",
                    }}
                  >
                    20+
                  </div>
                  <div style={{ color: "var(--foreground-secondary)", fontSize: "0.95rem" }}>
                    Happy Clients
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "2.8rem",
                      fontWeight: "800",
                      fontFamily: "var(--font-display)",
                      color: "var(--accent-bright)",
                    }}
                  >
                    2+
                  </div>
                  <div style={{ color: "var(--foreground-secondary)", fontSize: "0.95rem" }}>
                    Years Experience
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "2.8rem",
                      fontWeight: "800",
                      fontFamily: "var(--font-display)",
                      color: "var(--accent-bright)",
                    }}
                  >
                    100%
                  </div>
                  <div style={{ color: "var(--foreground-secondary)", fontSize: "0.95rem" }}>
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section" style={{ background: "var(--background-elevated)" }}>
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Core Principles</span>
              <h2 className="section-title">
                What <span className="text-gradient">Drives Us</span>
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "24px",
              }}
            >
              {values.map((value, index) => (
                <div
                  key={index}
                  className="card"
                  style={{
                    textAlign: "center",
                    padding: "36px 24px",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>{value.icon}</div>
                  <h3 style={{ marginBottom: "10px", fontSize: "1.25rem", color: "#fafaff" }}>
                    {value.title}
                  </h3>
                  <p style={{ color: "var(--foreground-secondary)", fontSize: "0.95rem" }}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Leadership</span>
              <h2 className="section-title">
                Meet <span className="text-gradient">Chirag Mali</span>
              </h2>
              <p className="section-description">
                Founder, Creative Director &amp; Lead Solutions Architect
              </p>
            </div>

            <div style={{ maxWidth: "640px", margin: "0 auto" }}>
              <div
                className="card"
                style={{
                  textAlign: "center",
                  padding: "44px 32px",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    background: "var(--gradient-brand)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    fontSize: "2rem",
                    fontWeight: "800",
                    color: "#ffffff",
                    boxShadow: "0 0 30px var(--primary-glow)",
                  }}
                >
                  CM
                </div>
                <h3 style={{ marginBottom: "6px", fontSize: "1.4rem", color: "#fafaff" }}>
                  Chirag Mali
                </h3>
                <div
                  style={{
                    color: "var(--accent)",
                    marginBottom: "18px",
                    fontWeight: "600",
                    fontSize: "0.95rem",
                  }}
                >
                  Founder &amp; Creative Technologist
                </div>
                <p
                  style={{
                    color: "var(--foreground-secondary)",
                    fontSize: "0.98rem",
                    lineHeight: "1.8",
                  }}
                >
                  Driven by a passion for cutting-edge web architecture and growth marketing,
                  Chirag founded Akshar Production &amp; Technology to deliver solutions that
                  consistently convert. With deep hands-on expertise spanning modern React
                  ecosystems, full-funnel digital advertising, and high-impact media production,
                  he personally directs every project from discovery to deployment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section" style={{ background: "var(--background-elevated)" }}>
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Growth Timeline</span>
              <h2 className="section-title">
                Our <span className="text-gradient">Milestones</span>
              </h2>
            </div>
            <div style={{ maxWidth: "780px", margin: "0 auto" }}>
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    gap: "24px",
                    marginBottom: "32px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      background: "var(--gradient-brand)",
                      padding: "8px 18px",
                      borderRadius: "10px",
                      fontWeight: "700",
                      fontFamily: "var(--font-display)",
                      flexShrink: 0,
                      color: "#ffffff",
                      boxShadow: "0 0 20px var(--primary-glow)",
                    }}
                  >
                    {milestone.year}
                  </div>
                  <div>
                    <h3 style={{ marginBottom: "6px", fontSize: "1.2rem", color: "#fafaff" }}>
                      {milestone.title}
                    </h3>
                    <p style={{ color: "var(--foreground-secondary)", fontSize: "0.95rem" }}>
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section section">
          <div className="container">
            <div className="cta-wrapper">
              <h2 className="cta-title">Ready to Transform Your Business?</h2>
              <p className="cta-description">
                Let&apos;s build a digital presence that engages your market and drives
                measurable revenue.
              </p>
              <div className="cta-buttons">
                <Link href="/#contact" className="btn btn-white">
                  Schedule Free Consultation
                </Link>
                <Link href="/#services" className="btn btn-outline-white">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
