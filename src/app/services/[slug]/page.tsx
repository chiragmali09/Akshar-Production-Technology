import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getServiceIcon } from "@/components/ServiceIcons";

interface ServiceData {
  title: string;
  tagline: string;
  description: string;
  icon: string;
  features: string[];
  process: { title: string; description: string }[];
  benefits: string[];
}

export const servicesData: Record<string, ServiceData> = {
  "web-development": {
    title: "Web Development",
    tagline: "High-Performance, Scalable & Conversion-Engineered Websites",
    description:
      "Custom websites, modern landing pages, and enterprise web applications built with Next.js, React, and cutting-edge frontend architecture. We turn web visitors into active paying clients.",
    icon: "web-dev",
    features: [
      "Custom Full-Stack Next.js & React Development",
      "Headless E-commerce & Shopify Solutions",
      "Progressive Web Apps (PWA) with Offline Support",
      "High-Converting Landing Pages",
      "API Development, Microservices & Database Design",
      "Continuous Website Performance, Maintenance & SEO Audits",
    ],
    process: [
      {
        title: "Discovery & Architecture",
        description:
          "Analyzing your business goals, target audience, conversion funnels, and technical specifications.",
      },
      {
        title: "Wireframing & UI/UX Design",
        description:
          "Crafting responsive prototypes in Figma that reflect your brand identity with flawless user journeys.",
      },
      {
        title: "Production Engineering",
        description:
          "Developing clean, accessible, and ultra-fast code using modern frameworks and rigorous testing.",
      },
      {
        title: "Deployment & Optimization",
        description:
          "Launching on scalable cloud infrastructure (Vercel / AWS) with 95+ Google Lighthouse scores.",
      },
    ],
    benefits: [
      "Dominant organic search rankings through technical SEO",
      "Sub-second page load times that maximize retention",
      "Superior conversion rates through UX psychology",
      "Flawless responsiveness across all mobile and desktop screens",
      "Bank-grade security and automated continuous backups",
      "Scalable infrastructure designed for exponential business growth",
    ],
  },
  "social-media-marketing": {
    title: "Social Media Marketing",
    tagline: "Organic Virality, Audience Growth & High-Impact Brand Storytelling",
    description:
      "Strategic social media management that builds undeniable brand authority, engages your ideal customers, and drives measurable revenue across Instagram, Facebook, and LinkedIn.",
    icon: "social",
    features: [
      "Comprehensive Social Media Strategy & Growth Blueprint",
      "High-Engagement Content Creation (Reels, Carousels, Stories)",
      "Daily Community Management & Audience Nurturing",
      "Targeted Influencer Partnerships & Outreach",
      "In-Depth Analytics, Competitor Tracking & ROI Reports",
      "Social Commerce Setup & Shoppable Catalog Integration",
    ],
    process: [
      {
        title: "Brand & Competitor Audit",
        description:
          "Analyzing your current social performance, industry benchmarks, and target demographic psychology.",
      },
      {
        title: "Editorial Strategy & Planning",
        description:
          "Developing a content calendar aligned with your product launches, seasonal trends, and revenue goals.",
      },
      {
        title: "Creative Production & Copywriting",
        description:
          "Producing studio-grade graphics, viral video formats, and compelling copywriting that stops the scroll.",
      },
      {
        title: "Engagement & Community Scaling",
        description:
          "Managing outbound engagement, comments, DMs, and community building to turn followers into advocates.",
      },
    ],
    benefits: [
      "Rapid follower growth with genuine target demographic accounts",
      "Significantly elevated engagement rates and story retention",
      "Consistent, predictable organic lead generation",
      "Stronger customer trust and brand credibility",
      "Multi-channel visibility across Instagram, Facebook, and LinkedIn",
      "Data-backed adjustments based on weekly metrics analysis",
    ],
  },
  "paid-advertising": {
    title: "Paid Advertising",
    tagline: "ROI-Focused Google Ads, Meta Ads & Retargeting Campaigns",
    description:
      "Data-driven ad campaigns designed to maximize return on ad spend (ROAS). We eliminate ad budget waste and consistently acquire qualified customers at scale.",
    icon: "ads",
    features: [
      "Full-Funnel Google Search & Display Ads Management",
      "Meta Ads (Instagram & Facebook) with Dynamic Creative Testing",
      "High-Value Retargeting & Abandoned Cart Funnels",
      "High-Converting Landing Page Design & A/B Testing",
      "Conversion API (CAPI) & Pixel Setup with Attribution Tracking",
      "Weekly Spend & Return Optimization Reports",
    ],
    process: [
      {
        title: "Market & Keyword Intelligence",
        description:
          "Conducting deep keyword research, competitor ad scraping, and audience persona modeling.",
      },
      {
        title: "Funnel Setup & Asset Creation",
        description:
          "Building targeted campaign structures, persuasive ad copy, and high-converting creative variants.",
      },
      {
        title: "A/B Testing & Bid Optimization",
        description:
          "Continuous testing of hooks, angles, landing pages, and bid algorithms to minimize acquisition cost.",
      },
      {
        title: "Profitable Scaling",
        description:
          "Gradually increasing budgets on top-performing ad sets while strictly preserving target ROAS margins.",
      },
    ],
    benefits: [
      "Instant traffic and predictable qualified customer leads",
      "Laser-targeted demographic, behavioral, and intent reach",
      "Transparent reporting: clear cost-per-lead and ROAS metrics",
      "Full control over ad spend with scalable daily budgets",
      "Omnichannel retargeting that recovers lost prospects",
      "Continuous multivariate creative and headline experiments",
    ],
  },
  "graphic-design": {
    title: "Graphic Design",
    tagline: "Bespoke Brand Identities, Marketing Collateral & Visual Systems",
    description:
      "Eye-catching visual designs that communicate your brand narrative with clarity, elegance, and distinction. From complete brand guidelines to high-converting packaging.",
    icon: "graphic",
    features: [
      "Comprehensive Logo Design & Brand Identity Systems",
      "High-Converting Marketing Collateral & Brochures",
      "Social Media Graphic Templates & Content Bundles",
      "Product Packaging, Label & Box Design",
      "Infographics & Data Visualization",
      "Print-Ready Materials & Vector Illustrations",
    ],
    process: [
      {
        title: "Creative Brief & Moodboard",
        description:
          "Understanding your company mission, color psychology, and aesthetic vision through moodboard curation.",
      },
      {
        title: "Concept Exploration",
        description:
          "Developing multiple distinct design directions, logo marks, typography scales, and color schemes.",
      },
      {
        title: "Iterative Refinement",
        description:
          "Refining your chosen concept through iterative feedback cycles until every detail is pixel-perfect.",
      },
      {
        title: "Asset Delivery & Brand Guidelines",
        description:
          "Providing master vector files (SVG, AI, EPS, PNG, PDF) alongside a comprehensive brand style guide.",
      },
    ],
    benefits: [
      "Cohesive, unmistakable brand identity across all touchpoints",
      "Instant credibility that justifies premium service pricing",
      "Memorable visual impression that outperforms competitors",
      "Print-ready CMYK and digital RGB files optimized for any medium",
      "Full ownership of all original source design files",
      "Flexible templates that accelerate internal team workflows",
    ],
  },
  "video-editing": {
    title: "Video Editing",
    tagline: "Cinematic Post-Production, Reels & Dynamic Social Storytelling",
    description:
      "Professional video editing and motion graphics that grip viewer attention within the first 3 seconds. Perfect for viral Reels, commercial ads, and brand documentaries.",
    icon: "video",
    features: [
      "Viral Short-Form Video Editing (Instagram Reels, YouTube Shorts)",
      "Motion Graphics, Kinetic Typography & Visual Effects (VFX)",
      "High-End Color Grading & Cinematic Tone Mapping",
      "Professional Sound Design, Foley & Audio Mixing",
      "Corporate Promo Videos & Client Interview Production",
      "High-Resolution Exporting Optimized for Every Platform",
    ],
    process: [
      {
        title: "Footage Ingestion & Narrative Pacing",
        description:
          "Reviewing raw footage, selecting the strongest takes, and crafting a rhythmic story arc.",
      },
      {
        title: "Rough Cut & Assembly",
        description:
          "Structuring scene transitions, hook placement, and pacing to maximize audience watch time.",
      },
      {
        title: "Sound Design & Color Grading",
        description:
          "Balancing audio frequencies, adding immersive soundscapes, and grading colors to industry standards.",
      },
      {
        title: "Final Export & Multi-Format Delivery",
        description:
          "Delivering master vertical 9:16 and horizontal 16:9 files ready for immediate deployment.",
      },
    ],
    benefits: [
      "Higher retention and completion rates on social algorithms",
      "Viral potential with hook-optimized narrative structures",
      "Broadcast-quality video aesthetics that elevate brand authority",
      "Crisp audio leveling that ensures effortless listening anywhere",
      "Platform-specific aspect ratios and compression optimization",
      "Faster turnaround times for rapid content production cycles",
    ],
  },
  "web-apps": {
    title: "Web Applications",
    tagline: "Robust Full-Stack Web Apps, Dashboards & Scalable Platforms",
    description:
      "Custom web applications engineered to solve complex operational challenges. From real-time admin portals to SaaS MVPs, we deliver performant, future-proof code.",
    icon: "apps",
    features: [
      "Custom SaaS Product & MVP Development",
      "Real-Time Admin Dashboards & Analytics Portals",
      "Custom CRM, ERP & Workflow Automation Tools",
      "RESTful & GraphQL API Architecture",
      "Cloud Database Engineering (PostgreSQL, MongoDB, Supabase)",
      "Role-Based Access Control (RBAC) & Secure Authentication",
    ],
    process: [
      {
        title: "Technical Requirements & Wireframing",
        description:
          "Mapping out database entities, user flows, permission matrices, and system architecture.",
      },
      {
        title: "Frontend & Backend Architecture",
        description:
          "Developing modular UI components coupled with resilient serverless and backend endpoints.",
      },
      {
        title: "Quality Assurance & Security Auditing",
        description:
          "Comprehensive integration testing, vulnerability scans, and load testing for peak reliability.",
      },
      {
        title: "CI/CD Deployment & Scaling",
        description:
          "Setting up continuous integration pipelines and automated monitoring for zero-downtime releases.",
      },
    ],
    benefits: [
      "Custom automated workflows that save hundreds of manual hours",
      "Enterprise-grade security and compliant data protection",
      "Blazing-fast response times powered by modern edge architecture",
      "Seamless integration with third-party APIs and payment processors",
      "Complete ownership of code with zero vendor lock-in",
      "Architected to scale seamlessly from 100 to 1,000,000+ active users",
    ],
  },
};

const videoEditingProjects = [
  {
    title: "BAPS Sirohi - 7th Patotsav Experience",
    description:
      "Reel featuring experiences shared by Minister of State & MLA Shri Otaram Ji Dewasi at BAPS Swaminarayan Mandir, Sirohi.",
    link: "https://www.instagram.com/p/DYXdVVDp4SE/",
    embedUrl: "https://www.instagram.com/p/DYXdVVDp4SE/embed",
    tags: ["Reel", "Event Coverage", "MLA Interview", "Community"],
  },
  {
    title: "BAPS Sirohi - MP Lumbaram Ji Choudhary Interview",
    description:
      "Reel highlighting the experience shared by Member of Parliament (MP) Shri Lumbaram Ji Choudhary at BAPS Sirohi.",
    link: "https://www.instagram.com/p/DYPHjXEJvzR/",
    embedUrl: "https://www.instagram.com/p/DYPHjXEJvzR/embed",
    tags: ["Reel", "Political Interview", "Event Promo", "Social Media"],
  },
];

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested digital service could not be found.",
    };
  }

  const title = `${service.title} Services | Akshar Production & Technology`;
  const description = `${service.description} Proven results and expert solutions.`;
  const canonicalUrl = `https://aksharproduction.com/services/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      siteName: "Akshar Production & Technology",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        {/* Service Hero */}
        <section
          style={{
            paddingTop: "160px",
            paddingBottom: "80px",
            background:
              "linear-gradient(180deg, rgba(63, 61, 153, 0.15) 0%, transparent 100%)",
            position: "relative",
          }}
        >
          <div className="container">
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "72px",
                  height: "72px",
                  borderRadius: "20px",
                  background: "var(--gradient-brand-soft)",
                  border: "1px solid var(--border-hover)",
                  color: "var(--accent)",
                  marginBottom: "24px",
                  boxShadow: "0 0 30px var(--primary-glow)",
                }}
              >
                {getServiceIcon(service.title)}
              </div>

              <span className="section-badge" style={{ display: "block", marginBottom: "16px" }}>
                Expert Agency Services
              </span>

              <h1 style={{ marginBottom: "20px", fontSize: "clamp(2.2rem, 4vw, 3.4rem)" }}>
                {service.title}
              </h1>

              <p
                style={{
                  color: "var(--accent-bright)",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  marginBottom: "16px",
                }}
              >
                {service.tagline}
              </p>

              <p className="lead" style={{ maxWidth: "680px", margin: "0 auto 36px" }}>
                {service.description}
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
                  Start Your Project
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/#services" className="btn btn-secondary">
                  Explore All Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section" style={{ background: "var(--background-elevated)" }}>
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Core Capabilities</span>
              <h2 className="section-title">
                What We Deliver in <span className="text-gradient">{service.title}</span>
              </h2>
              <p className="section-description">
                Tailored execution engineered to meet your brand&apos;s unique growth metrics
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "24px",
              }}
            >
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="card"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    padding: "24px",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "var(--gradient-brand)",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: "#ffffff",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <span style={{ fontSize: "1.1rem", fontWeight: "600", color: "#fafaff" }}>
                      {feature}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Proven Methodology</span>
              <h2 className="section-title">
                Our {service.title} <span className="text-gradient">Workflow</span>
              </h2>
              <p className="section-description">
                A transparent, agile process ensuring on-time delivery with zero surprises
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "32px",
                maxWidth: "1100px",
                margin: "0 auto",
              }}
            >
              {service.process.map((step, index) => (
                <div
                  key={index}
                  style={{
                    textAlign: "center",
                    padding: "24px",
                    background: "var(--surface)",
                    borderRadius: "16px",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      background: "var(--gradient-brand)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                      fontSize: "1.35rem",
                      fontWeight: "800",
                      color: "#ffffff",
                      boxShadow: "0 0 25px var(--primary-glow)",
                    }}
                  >
                    0{index + 1}
                  </div>
                  <h3 style={{ marginBottom: "12px", fontSize: "1.2rem", color: "#fafaff" }}>
                    {step.title}
                  </h3>
                  <p style={{ color: "var(--foreground-secondary)", fontSize: "0.95rem" }}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section" style={{ background: "var(--background-elevated)" }}>
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Business Impact</span>
              <h2 className="section-title">
                Why Partner With <span className="text-gradient">Akshar Production</span>
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "20px",
                maxWidth: "1000px",
                margin: "0 auto",
              }}
            >
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "18px 22px",
                    background: "var(--surface)",
                    borderRadius: "14px",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: "rgba(0, 212, 255, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: "var(--accent)",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span style={{ fontSize: "1rem", color: "var(--foreground)" }}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Editing Portfolio Section */}
        {slug === "video-editing" && (
          <section className="section" id="portfolio" style={{ background: "var(--background)" }}>
            <div className="container">
              <div className="section-header">
                <span className="section-badge">Client Showcase</span>
                <h2 className="section-title">
                  Featured <span className="text-gradient">Video Productions</span>
                </h2>
                <p className="section-description">
                  Recent high-engagement event coverage and short-form storytelling
                </p>
              </div>

              <div className="video-grid">
                {videoEditingProjects.map((project, index) => (
                  <div key={index} className="video-card">
                    <div className="video-phone-mockup">
                      <div className="video-phone-notch" />
                      <div className="video-phone-screen">
                        <iframe
                          src={project.embedUrl}
                          className="instagram-media instagram-media-rendered"
                          allowFullScreen={true}
                          title={project.title}
                          style={{
                            background: "transparent",
                            border: "none",
                            overflow: "hidden",
                            height: "100%",
                            width: "100%",
                            display: "block",
                          }}
                        />
                      </div>
                      <div className="video-phone-indicator" />
                    </div>

                    <div className="video-card-content" style={{ textAlign: "left" }}>
                      <h3 className="video-card-title">{project.title}</h3>
                      <p className="video-card-desc">{project.description}</p>

                      <div className="video-card-tags">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="video-tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="video-link-btn"
                        aria-label={`Watch ${project.title} on Instagram`}
                      >
                        Watch on Instagram
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden="true"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="cta-section section">
          <div className="container">
            <div className="cta-wrapper">
              <h2 className="cta-title">Ready to Elevate Your {service.title}?</h2>
              <p className="cta-description">
                Schedule a consultation to discuss your vision, scope, and strategic roadmap.
              </p>
              <div className="cta-buttons">
                <Link href="/#contact" className="btn btn-white">
                  Get Free Consultation
                </Link>
                <a href="mailto:work.chiragmali@gmail.com" className="btn btn-outline-white">
                  Email Us Directly
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
