"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { getServiceIcon } from "@/components/ServiceIcons";

// Hero Section
function Hero() {
  return (
    <section className="hero">
      {/* Atmospheric Background */}
      <div className="hero-bg">
        {/* Floating orbs for depth */}
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
        {/* Grid pattern */}
        <div className="hero-grid"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Available for new projects
          </div>

          <h1 className="hero-title">
            <span>We Create High-Impact</span>
            <span className="text-gradient">Digital Experiences</span>
          </h1>

          <p className="hero-description lead">
            Transform your brand with cutting-edge web development, strategic marketing,
            and stunning design. We turn your vision into digital reality.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Start Your Project
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#services" className="btn btn-secondary">
              Explore Services
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Data
const services = [
  {
    icon: "🌐",
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies. From landing pages to complex platforms, we deliver scalable solutions.",
    link: "/services/web-development"
  },
  {
    icon: "📱",
    title: "Social Media Marketing",
    description: "Strategic social media management that builds your brand, engages your audience, and drives measurable results across all platforms.",
    link: "/services/social-media-marketing"
  },
  {
    icon: "🎯",
    title: "Paid Advertising",
    description: "Data-driven Google Ads and Meta campaigns that maximize ROI. We optimize every dollar spent to bring you qualified leads.",
    link: "/services/paid-advertising"
  },
  {
    icon: "🎨",
    title: "Graphic Design",
    description: "Eye-catching visuals that tell your brand story. From logos to marketing materials, we create designs that leave lasting impressions.",
    link: "/services/graphic-design"
  },
  {
    icon: "🎬",
    title: "Video Editing",
    description: "Professional video production and editing that captivates viewers. Perfect for social media, ads, and brand storytelling.",
    link: "/services/video-editing"
  },
  {
    icon: "⚡",
    title: "Web Applications",
    description: "Custom web apps tailored to your business needs. From dashboards to SaaS platforms, we build solutions that scale.",
    link: "/services/web-apps"
  }
];

// Services Section
function Services() {
  return (
    <section id="services" className="services-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our Services</span>
          <h2 className="section-title">
            Everything You Need to <span className="text-gradient">Dominate Digital</span>
          </h2>
          <p className="section-description">
            Comprehensive digital solutions designed to elevate your brand and accelerate growth
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-badge">{getServiceIcon(service.title)}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <Link href={service.link} className="service-link">
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Comprehensive Project Types & Data
interface ProjectItem {
  id: string;
  title: string;
  category: "web" | "social" | "video";
  categoryLabel: string;
  tagline: string;
  description: string;
  detailedCase?: {
    client: string;
    objective: string;
    solution: string;
    deliverables: string[];
  };
  image?: string;
  screenshot?: string;
  embedUrl?: string;
  link: string;
  handle?: string;
  followers?: string;
  industry: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  featured?: boolean;
}

const webProjects: ProjectItem[] = [
  {
    id: "ms-realtors",
    title: "MS Realtors",
    category: "web",
    categoryLabel: "Web Development & Platform",
    tagline: "High-Performance Real Estate Platform & Property Engine",
    description: "Engineered a custom full-stack property portal with automated listings, dynamic multi-parameter search, instant lead capture pipelines, and optimized mobile-first performance.",
    detailedCase: {
      client: "MS Realtors Real Estate Group",
      objective: "Build a modern, credible property portal that simplifies buyer inquiries and showcases luxury listings seamlessly.",
      solution: "Developed an ultra-fast responsive web portal featuring intuitive property filtering, high-resolution media galleries, and direct WhatsApp / CRM lead hooks.",
      deliverables: ["Custom Web Architecture", "Property Search & Filter Engine", "Lead Pipeline Automation", "SEO & Page Speed Optimization"]
    },
    image: "/portfolio/msrealtors.png",
    link: "https://msrealtor.in/",
    industry: "Real Estate & Housing",
    metrics: [
      { label: "Lead Inquiries", value: "+350%" },
      { label: "Performance", value: "98/100" },
      { label: "Architecture", value: "Full Stack" }
    ],
    tags: ["Next.js", "Custom UI", "Real Estate", "SEO Optimized", "Lead Engine"],
    featured: true
  },
  {
    id: "lamenda-web",
    title: "Lamenda Fashions Digital Storefront",
    category: "web",
    categoryLabel: "E-Commerce & Digital Experience",
    tagline: "Bespoke Women's Apparel Digital Lookbook",
    description: "Designed and built an engaging digital presence for an expanding women's fashion brand, optimizing visual catalog browsing, social commerce conversion, and modern aesthetic storytelling.",
    detailedCase: {
      client: "Lamenda Fashions",
      objective: "Establish an elevated digital shopping experience that bridges social media traffic into loyal, repeating buyers.",
      solution: "Created high-impact visual lookbooks, catalog showcase galleries, and direct-to-chat checkout funnels.",
      deliverables: ["Digital Lookbook UI/UX", "Social Commerce Funnels", "Product Presentation", "Brand Identity Online"]
    },
    image: "/portfolio/lamenda.png",
    link: "https://www.instagram.com/lamenda.in/",
    industry: "Fashion & Retail",
    metrics: [
      { label: "Audience Growth", value: "10K+ Followers" },
      { label: "Catalog Views", value: "+180%" },
      { label: "Brand Appeal", value: "Premium" }
    ],
    tags: ["E-Commerce", "Digital Brand", "Lookbook UI", "Catalog Design"]
  },
  {
    id: "mrbasrai-cuisines-web",
    title: "Mr Basrai's World Cuisines Portal",
    category: "web",
    categoryLabel: "Restaurant Experience & Brand",
    tagline: "Interactive Culinary Showcase & Table Booking System",
    description: "Crafted a mouthwatering online brand hub showcasing global buffets, live cooking stations, and direct table reservation integrations for international dining patrons.",
    detailedCase: {
      client: "Mr Basrai's World Cuisines",
      objective: "Drive online table reservations and showcase world cuisine variety across multi-city branches.",
      solution: "Implemented interactive digital menus, event banquet showcases, and streamlined booking pathways.",
      deliverables: ["Interactive Menu Showcase", "Branch Booking Integrator", "Culinary Photography Integration", "Local SEO Optimization"]
    },
    image: "/portfolio/mrbasrai-cuisines.png",
    link: "https://www.instagram.com/mrbasraisworldcuisines/",
    industry: "Hospitality & Dining",
    metrics: [
      { label: "Weekend Capacity", value: "Fully Booked" },
      { label: "Engagement", value: "+220%" },
      { label: "Customer Reach", value: "Global Brand" }
    ],
    tags: ["Dining Platform", "Menu Showcase", "Local Brand", "Booking System"]
  }
];

const socialMediaProjects: ProjectItem[] = [
  {
    id: "kr-ayurveda-social",
    title: "KR Ayurveda",
    category: "social",
    categoryLabel: "Social Media Growth & Marketing",
    tagline: "Ayurvedic Healthcare & Organic Product Brand",
    description: "Built a trusted wellness authority from the ground up through educational carousel campaigns, holistic lifestyle reels, and targeted lead generation strategies that tripled patient inquiries.",
    detailedCase: {
      client: "KR Ayurveda",
      objective: "Establish clinical trust in Ayurvedic treatments and drive consultations via social channels.",
      solution: "Engineered an education-first content strategy featuring doctor insights, authentic patient transformations, and high-converting awareness ads.",
      deliverables: ["Content Strategy & Calendar", "Reel Production & Editing", "Doctor Thought Leadership", "Targeted Ad Management"]
    },
    screenshot: "/portfolio/krayurveda.png",
    link: "https://www.instagram.com/krayurveda/",
    handle: "@krayurveda",
    followers: "Rapid Growth",
    industry: "Healthcare & Wellness",
    metrics: [
      { label: "Online Inquiries", value: "3x Growth" },
      { label: "Monthly Reach", value: "85K+ Views" },
      { label: "Engagement", value: "6.8% High" }
    ],
    tags: ["Healthcare", "Reel Marketing", "Content Strategy", "Lead Gen"]
  },
  {
    id: "lamenda-social",
    title: "Lamenda Fashions",
    category: "social",
    categoryLabel: "Social Media Growth & Marketing",
    tagline: "Luxury Women's Apparel & Trend Showcase",
    description: "Curated high-fashion visual narratives, viral outfit transition reels, influencer collabs, and seasonal lookbook releases that built a dedicated 10,000+ fashion community.",
    detailedCase: {
      client: "Lamenda Fashions",
      objective: "Cultivate an aspirational fashion brand persona and accelerate direct Instagram sales.",
      solution: "Executed aesthetic studio video shoots, carousel styling guides, and high-frequency story sales promotions.",
      deliverables: ["Creative Direction", "Fashion Reels & Transitions", "Lookbook Design", "Influencer Campaign Strategy"]
    },
    screenshot: "/portfolio/lamenda.png",
    link: "https://www.instagram.com/lamenda.in/",
    handle: "@lamenda.in",
    followers: "10K+ Community",
    industry: "Fashion & Retail",
    metrics: [
      { label: "Follower Base", value: "10,000+" },
      { label: "Story Engagement", value: "4.5K Daily" },
      { label: "Conversion", value: "Top Tier" }
    ],
    tags: ["Fashion", "Viral Reels", "Lookbook Design", "Influencer Collabs"]
  },
  {
    id: "mrbasrai-cuisines-social",
    title: "Mr Basrai's World Cuisines",
    category: "social",
    categoryLabel: "Social Media Growth & Marketing",
    tagline: "Global Dining & Culinary Experience",
    description: "Captured appetizing culinary videos, celebratory festival events, customer reviews, and hyper-local ads that made the restaurant a viral culinary hotspot.",
    detailedCase: {
      client: "Mr Basrai's Restaurant Group",
      objective: "Maximize table footfall and build excitement around multi-cuisine buffet spreads.",
      solution: "Produced mouthwatering short-form reels focusing on live sizzling food, customer smiles, and weekend promotional packages.",
      deliverables: ["Culinary Video Production", "Festival Campaigns", "Hyper-local Advertising", "Community Engagement"]
    },
    screenshot: "/portfolio/mrbasrai-cuisines.png",
    link: "https://www.instagram.com/mrbasraisworldcuisines/",
    handle: "@mrbasraisworldcuisines",
    followers: "5K+ Food Lovers",
    industry: "Hospitality & Dining",
    metrics: [
      { label: "Video Views", value: "250K+" },
      { label: "Weekend Footfall", value: "Full Capacity" },
      { label: "Local Visibility", value: "#1 Dining Spot" }
    ],
    tags: ["Food Photography", "Hospitality", "Local Ads", "Viral Content"]
  },
  {
    id: "mrbasrai-edinburgh-social",
    title: "Mr Basrai's Edinburgh",
    category: "social",
    categoryLabel: "Social Media Growth & Marketing",
    tagline: "International UK Branch Campaign",
    description: "Executed tailored UK dining promotions, tourist event specials, and high-energy culinary reels crafted specifically for Scotland's vibrant food scene.",
    detailedCase: {
      client: "Mr Basrai's Edinburgh, Scotland",
      objective: "Expand brand reach across Edinburgh and drive party and family dining bookings.",
      solution: "Ran targeted geo-fenced promotions and highlight reels showcasing international dishes and celebration packages.",
      deliverables: ["UK Geo-Targeted Ads", "Short-Form Video Production", "Event Booking Promos", "Review Spotlights"]
    },
    screenshot: "/portfolio/mrbasrai-edinburgh.png",
    link: "https://www.instagram.com/mrbasraiedinburgh/",
    handle: "@mrbasraiedinburgh",
    followers: "UK Local Reach",
    industry: "International Dining",
    metrics: [
      { label: "UK Reach", value: "120K+ Local" },
      { label: "Table Inquiries", value: "+85%" },
      { label: "Target Market", value: "Edinburgh, UK" }
    ],
    tags: ["UK Marketing", "Geo-Targeting", "Restaurant Ads", "Culinary Reels"]
  },
  {
    id: "suresh-mali-social",
    title: "Suresh Kumar Mali",
    category: "social",
    categoryLabel: "Personal Branding & Public Leadership",
    tagline: "Authority Positioning & Community Leadership",
    description: "Strategic executive branding, public keynote speech highlights, philanthropic milestones, and premium visual identity crafting for notable community leadership.",
    detailedCase: {
      client: "Suresh Kumar Mali",
      objective: "Build an inspiring, authentic public leadership brand that connects deeply with people across digital channels.",
      solution: "Designed cohesive typographic quotes, high-impact keynote videos, and event milestone documentaries.",
      deliverables: ["Personal Brand Identity", "Keynote Video Editing", "Milestone Graphics", "Audience Engagement"]
    },
    screenshot: "/portfolio/suresh-mali.png",
    link: "https://www.instagram.com/sureshkumarmali85/",
    handle: "@sureshkumarmali85",
    followers: "Active Public Network",
    industry: "Personal Brand & Leadership",
    metrics: [
      { label: "Community Trust", value: "High Impact" },
      { label: "Engagement", value: "Top 5%" },
      { label: "Content Quality", value: "Premium" }
    ],
    tags: ["Personal Brand", "Leadership", "Event Coverage", "Public PR"]
  }
];

const videoProjects: ProjectItem[] = [
  {
    id: "baps-patotsav",
    title: "BAPS Sirohi - 7th Patotsav Experience",
    category: "video",
    categoryLabel: "Cinematic Video Production",
    tagline: "Minister of State Shri Otaram Ji Dewasi Interview",
    description: "High-production cinematic reel capturing inspiring reflections and interview coverage by Minister of State & MLA Shri Otaram Ji Dewasi during the 7th Patotsav celebration at BAPS Swaminarayan Mandir, Sirohi.",
    detailedCase: {
      client: "BAPS Swaminarayan Sanstha Sirohi",
      objective: "Capture prominent dignitary reflections in a dynamic, broadcast-quality vertical video format.",
      solution: "Utilized cinematic multi-cam angles, noise-isolated audio mastering, professional color grading, and impactful motion subtitles.",
      deliverables: ["4K Color Master", "Voice Audio Enhancement", "Dynamic Subtitles", "Vertical Reel Optimization"]
    },
    link: "https://www.instagram.com/p/DYXdVVDp4SE/",
    embedUrl: "https://www.instagram.com/p/DYXdVVDp4SE/embed",
    industry: "Community & Leadership",
    metrics: [
      { label: "Mastering", value: "4K Color Grade" },
      { label: "Format", value: "9:16 Vertical Reel" },
      { label: "Audio", value: "Studio Voice" }
    ],
    tags: ["Reel", "Event Coverage", "MLA Interview", "Community", "4K Color Grade"]
  },
  {
    id: "baps-mp",
    title: "BAPS Sirohi - MP Lumbaram Ji Choudhary Highlight",
    category: "video",
    categoryLabel: "Cinematic Video Production",
    tagline: "Member of Parliament (MP) Special Interview",
    description: "Engaging interview coverage and sound engineering highlighting the experience shared by Member of Parliament (MP) Shri Lumbaram Ji Choudhary at BAPS Sirohi.",
    detailedCase: {
      client: "BAPS Swaminarayan Sanstha Sirohi",
      objective: "Produce an uplifting and professional social media reel showcasing parliamentarian remarks.",
      solution: "Engineered rhythmic pacing, crisp speech clarity, and seamless transition effects tailored for high Instagram retention.",
      deliverables: ["Cinematic Interview Cut", "Pacing & Sound Design", "Visual Enhancements", "Social Distribution Format"]
    },
    link: "https://www.instagram.com/p/DYPHjXEJvzR/",
    embedUrl: "https://www.instagram.com/p/DYPHjXEJvzR/embed",
    industry: "Community & Leadership",
    metrics: [
      { label: "Retention", value: "High Completion" },
      { label: "Audio Profile", value: "Enhanced Vocal" },
      { label: "Visual Style", value: "Documentary" }
    ],
    tags: ["Reel", "Political Interview", "Sound Engineering", "Social Media", "Fast Cuts"]
  }
];

// Combine all projects for category filtering and modal access
const allProjectsList: ProjectItem[] = [
  ...webProjects,
  ...socialMediaProjects,
  ...videoProjects
];

// Portfolio Section with Category Filtering, Live Device Mockups & Case Study Quick-View
function Portfolio() {
  const [activeTab, setActiveTab] = useState<"all" | "web" | "social" | "video">("all");
  const [activeSocialIndex, setActiveSocialIndex] = useState(0);
  const [activeWebIndex, setActiveWebIndex] = useState(0);
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);

  const activeWeb = webProjects[activeWebIndex] || webProjects[0];
  const activeSocial = socialMediaProjects[activeSocialIndex] || socialMediaProjects[0];

  return (
    <section id="portfolio" className="portfolio-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Client Showcase</span>
          <h2 className="section-title">
            Crafting Digital Solutions That <span className="text-gradient">Drive Real Impact</span>
          </h2>
          <p className="section-description">
            Explore our curated portfolio across web development, social media marketing, and cinematic video production
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="portfolio-nav-tabs">
          <button
            className={`portfolio-tab-btn ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            <span className="tab-icon">✨</span>
            <span>All Projects</span>
            <span className="tab-count">{allProjectsList.length}</span>
          </button>
          <button
            className={`portfolio-tab-btn ${activeTab === "web" ? "active" : ""}`}
            onClick={() => setActiveTab("web")}
          >
            <span className="tab-icon">🌐</span>
            <span>Web Development</span>
            <span className="tab-count">{webProjects.length}</span>
          </button>
          <button
            className={`portfolio-tab-btn ${activeTab === "social" ? "active" : ""}`}
            onClick={() => setActiveTab("social")}
          >
            <span className="tab-icon">📱</span>
            <span>Social Media Marketing</span>
            <span className="tab-count">{socialMediaProjects.length}</span>
          </button>
          <button
            className={`portfolio-tab-btn ${activeTab === "video" ? "active" : ""}`}
            onClick={() => setActiveTab("video")}
          >
            <span className="tab-icon">🎬</span>
            <span>Video & Reels</span>
            <span className="tab-count">{videoProjects.length}</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 1: WEB DEVELOPMENT SHOWCASE (Visible on "all" or "web") */}
        {/* ========================================================================= */}
        {(activeTab === "all" || activeTab === "web") && (
          <div className="portfolio-block">
            <div className="portfolio-block-header">
              <div className="portfolio-block-meta">
                <span className="portfolio-block-pill">Web & Platforms</span>
                <h3 className="portfolio-block-title">Web Development & Digital Architecture</h3>
              </div>
              <p className="portfolio-block-sub">
                Scalable, high-converting platforms built with clean code and intuitive UI
              </p>
            </div>

            {/* Web Project Switcher Selector */}
            <div className="web-project-selector">
              {webProjects.map((proj, idx) => (
                <button
                  key={proj.id}
                  className={`web-selector-pill ${activeWebIndex === idx ? "active" : ""}`}
                  onClick={() => setActiveWebIndex(idx)}
                >
                  <span className="selector-indicator"></span>
                  <span className="selector-title">{proj.title}</span>
                  <span className="selector-tag">{proj.industry}</span>
                </button>
              ))}
            </div>

            {/* Featured Web Browser Frame Card */}
            <div className="web-featured-display">
              <div className="web-browser-container">
                <div className="web-browser-topbar">
                  <div className="browser-window-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <div className="browser-address-bar">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <span>{activeWeb.link}</span>
                  </div>
                  <div className="browser-actions-icon">
                    <a
                      href={activeWeb.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="browser-external-link"
                      title="Open Live Site"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Browser Body Screen */}
                <div className="web-browser-screen">
                  {activeWeb.image && (
                    <img
                      src={activeWeb.image}
                      alt={activeWeb.title}
                      className="web-screen-img"
                    />
                  )}
                  <div className="web-screen-overlay">
                    <a
                      href={activeWeb.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      Visit Live Platform
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12,5 19,12 12,19" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Web Project Info Panel */}
              <div className="web-info-panel">
                <div className="web-info-header">
                  <span className="portfolio-live-badge">
                    <span className="live-dot"></span>
                    Verified Live Project
                  </span>
                  <span className="web-industry-badge">{activeWeb.industry}</span>
                </div>

                <h4 className="web-panel-title">{activeWeb.title}</h4>
                <p className="web-panel-tagline">{activeWeb.tagline}</p>
                <p className="web-panel-desc">{activeWeb.description}</p>

                {/* Metrics Highlights */}
                <div className="web-metrics-grid">
                  {activeWeb.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="metric-chip">
                      <div className="metric-chip-value">{m.value}</div>
                      <div className="metric-chip-label">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="project-tags-list">
                  {activeWeb.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="project-tag-pill">{tag}</span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="web-panel-actions">
                  <a
                    href={activeWeb.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Open Live Platform
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setModalProject(activeWeb)}
                  >
                    View Case Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SECTION 2: SOCIAL MEDIA MARKETING SHOWCASE (Visible on "all" or "social") */}
        {/* ========================================================================= */}
        {(activeTab === "all" || activeTab === "social") && (
          <div className="portfolio-block">
            <div className="portfolio-block-header">
              <div className="portfolio-block-meta">
                <span className="portfolio-block-pill">Social Growth</span>
                <h3 className="portfolio-block-title">Social Media Marketing & Brand Scaling</h3>
              </div>
              <p className="portfolio-block-sub">
                Interactive mobile studio showcasing real brand transformation and high-converting campaigns
              </p>
            </div>

            <div className="social-studio-layout">
              {/* Smartphone Simulator */}
              <div className="phone-studio-column">
                <div className="studio-phone-wrapper">
                  <div className="studio-phone-case">
                    <div className="studio-phone-speaker"></div>
                    <div className="studio-phone-notch"></div>
                    <div className="studio-phone-display">
                      {activeSocial.screenshot && (
                        <img
                          src={activeSocial.screenshot}
                          alt={activeSocial.title}
                          className="studio-phone-screenshot"
                        />
                      )}
                      <div className="phone-bottom-bar"></div>
                    </div>
                  </div>
                  <div className="studio-phone-glow"></div>
                </div>

                {/* Quick Phone Controls Card */}
                <div className="phone-current-meta">
                  <div className="meta-brand-row">
                    <div className="meta-avatar-initial">
                      {activeSocial.title.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="meta-brand-name">{activeSocial.title}</div>
                      <div className="meta-brand-handle">{activeSocial.handle}</div>
                    </div>
                  </div>
                  <a
                    href={activeSocial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="meta-insta-btn"
                  >
                    View Profile
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Client Selector & Case Overview */}
              <div className="social-selector-column">
                <div className="social-list-header">
                  <span className="social-count-badge">
                    <span className="instagram-gradient-dot"></span>
                    {socialMediaProjects.length} Active Client Portfolios
                  </span>
                  <span className="social-hint-text">Select a client to preview live campaign</span>
                </div>

                <div className="social-clients-stack">
                  {socialMediaProjects.map((client, cIdx) => (
                    <div
                      key={client.id}
                      className={`social-client-card ${activeSocialIndex === cIdx ? "active" : ""}`}
                      onClick={() => setActiveSocialIndex(cIdx)}
                      onMouseEnter={() => setActiveSocialIndex(cIdx)}
                    >
                      <div className="social-card-accent"></div>
                      <div className="social-card-main">
                        <div className="social-card-top">
                          <h4 className="social-client-title">{client.title}</h4>
                          <span className="social-client-industry">{client.industry}</span>
                        </div>
                        <p className="social-client-tagline">{client.tagline}</p>
                        
                        {/* Mini Metrics in Card */}
                        <div className="social-mini-metrics">
                          {client.metrics.slice(0, 2).map((m, idx) => (
                            <span key={idx} className="mini-metric-badge">
                              <strong>{m.value}</strong> {m.label}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="social-card-actions">
                        <button
                          className="social-details-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            setModalProject(client);
                          }}
                          title="Open Detailed Case"
                        >
                          Case Details
                        </button>
                        <a
                          href={client.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-insta-icon-btn"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`Open Instagram for ${client.title}`}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SECTION 3: VIDEO & REELS PRODUCTION (Visible on "all" or "video") */}
        {/* ========================================================================= */}
        {(activeTab === "all" || activeTab === "video") && (
          <div className="portfolio-block">
            <div className="portfolio-block-header">
              <div className="portfolio-block-meta">
                <span className="portfolio-block-pill">Video Production</span>
                <h3 className="portfolio-block-title">Cinematic Video Editing & Social Reels</h3>
              </div>
              <p className="portfolio-block-sub">
                Broadcast-grade editing, color grading, sound design, and viral short-form storytelling
              </p>
            </div>

            <div className="video-cards-grid">
              {videoProjects.map((video) => (
                <div key={video.id} className="video-master-card">
                  {/* Vertical Phone Frame with Interactive Embed */}
                  <div className="video-embed-frame">
                    <div className="video-embed-notch"></div>
                    <div className="video-embed-screen">
                      <iframe
                        src={video.embedUrl}
                        className="instagram-media-frame"
                        allowFullScreen={true}
                        scrolling="no"
                        title={video.title}
                      ></iframe>
                    </div>
                    <div className="video-embed-bar"></div>
                  </div>

                  {/* Video Content & Metadata */}
                  <div className="video-info-content">
                    <div className="video-meta-top">
                      <span className="video-category-tag">{video.categoryLabel}</span>
                      <span className="video-badge-pro">4K Master</span>
                    </div>

                    <h4 className="video-project-title">{video.title}</h4>
                    <p className="video-project-tagline">{video.tagline}</p>
                    <p className="video-project-desc">{video.description}</p>

                    {/* Metrics */}
                    <div className="video-metrics-row">
                      {video.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="video-metric-pill">
                          <span className="video-metric-name">{m.label}:</span>
                          <span className="video-metric-val">{m.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="video-tags-container">
                      {video.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="video-tag-item">{tag}</span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="video-action-links">
                      <a
                        href={video.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        Watch on Instagram
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </a>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => setModalProject(video)}
                      >
                        Production Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Banner inside Portfolio */}
        <div className="portfolio-footer-cta">
          <div className="cta-mini-content">
            <h4 className="cta-mini-title">Have a project in mind?</h4>
            <p className="cta-mini-desc">Let&apos;s build a digital experience that transforms your brand and drives measurable growth.</p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Start Your Project Today
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* QUICK-VIEW CASE STUDY MODAL */}
      {/* ========================================================================= */}
      {modalProject && (
        <div className="case-modal-backdrop" onClick={() => setModalProject(null)}>
          <div className="case-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              className="case-modal-close"
              onClick={() => setModalProject(null)}
              aria-label="Close modal"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="case-modal-header">
              <div className="case-modal-category">
                <span className="category-indicator"></span>
                {modalProject.categoryLabel}
              </div>
              <h3 className="case-modal-title">{modalProject.title}</h3>
              <p className="case-modal-subtitle">{modalProject.tagline}</p>
            </div>

            <div className="case-modal-body">
              {/* Media Preview inside Modal */}
              <div className="case-modal-media">
                {modalProject.image ? (
                  <img
                    src={modalProject.image}
                    alt={modalProject.title}
                    className="case-modal-img"
                  />
                ) : modalProject.screenshot ? (
                  <img
                    src={modalProject.screenshot}
                    alt={modalProject.title}
                    className="case-modal-img"
                  />
                ) : modalProject.embedUrl ? (
                  <iframe
                    src={modalProject.embedUrl}
                    className="case-modal-iframe"
                    title={modalProject.title}
                    allowFullScreen={true}
                  ></iframe>
                ) : null}
              </div>

              {/* Case Study Details */}
              <div className="case-modal-content">
                {modalProject.detailedCase && (
                  <>
                    <div className="case-section-item">
                      <h5>Client & Background</h5>
                      <p>{modalProject.detailedCase.client} ({modalProject.industry})</p>
                    </div>

                    <div className="case-section-item">
                      <h5>The Objective</h5>
                      <p>{modalProject.detailedCase.objective}</p>
                    </div>

                    <div className="case-section-item">
                      <h5>Our Solution</h5>
                      <p>{modalProject.detailedCase.solution}</p>
                    </div>

                    <div className="case-section-item">
                      <h5>Key Deliverables</h5>
                      <ul className="case-deliverables-list">
                        {modalProject.detailedCase.deliverables.map((item, dIdx) => (
                          <li key={dIdx}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="2.5">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}

                {/* Metrics */}
                <div className="case-modal-metrics">
                  <h5>Impact Metrics</h5>
                  <div className="case-metrics-grid">
                    {modalProject.metrics.map((m, idx) => (
                      <div key={idx} className="case-metric-box">
                        <span className="case-metric-val">{m.value}</span>
                        <span className="case-metric-lbl">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="case-modal-tags">
                  {modalProject.tags.map((tag, idx) => (
                    <span key={idx} className="case-tag-chip">{tag}</span>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="case-modal-footer">
                  <a
                    href={modalProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Open Live Project
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setModalProject(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// Process Section
const processSteps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your business, goals, and target audience to craft a winning strategy."
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "Our creative team designs stunning visuals and user experiences that align with your brand."
  },
  {
    number: "03",
    title: "Development & Creation",
    description: "We bring designs to life using cutting-edge technology and best practices."
  },
  {
    number: "04",
    title: "Launch & Optimize",
    description: "We launch your project and continuously optimize for maximum performance and results."
  }
];

function Process() {
  return (
    <section id="process" className="process-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our Process</span>
          <h2 className="section-title">
            How We <span className="text-gradient">Deliver Excellence</span>
          </h2>
          <p className="section-description">
            A proven methodology that ensures success for every project
          </p>
        </div>

        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <div key={index} className="process-item">
              <div className="process-number">{step.number}</div>
              <div className="process-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Data
const testimonials = [
  {
    name: "Suresh Mali",
    role: "Owner, KR Ayurveda",
    text: "Akshar Production built our complete online presence from scratch. Their understanding of the Ayurveda industry and ability to create content that resonates with our customers has been phenomenal. We've seen a 3x increase in online inquiries!",
    avatar: "SM"
  },
  {
    name: "Jitendra Singh",
    role: "Founder, Mr Basrai's World Cuisines",
    text: "Working with Akshar Production was a game-changer for our restaurant. Their social media marketing and stunning food photography brought our dishes to life online. Our social following grew massively and we're now fully booked most weekends!",
    avatar: "JS"
  },
  {
    name: "Sourabh Rathore",
    role: "Director, Lamenda Fashions",
    text: "The team at Akshar Production truly understands fashion e-commerce. They designed a beautiful website and ran targeted ad campaigns that increased our sales significantly. Their creative approach to showcasing our collections has been invaluable.",
    avatar: "SR"
  }
];

// Testimonials Section
function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Testimonials</span>
          <h2 className="section-title">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="section-description">
            Don&apos;t just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="testimonial-text">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{testimonial.avatar}</div>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTA() {
  return (
    <section className="cta-section section">
      <div className="container">
        <div className="cta-wrapper">
          <h2 className="cta-title">Ready to Start Your Project?</h2>
          <p className="cta-description">
            Let&apos;s discuss how we can help transform your digital presence and drive real results for your business.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-white">
              Get Free Consultation
            </a>
            <a href="mailto:work.chiragmali@gmail.com" className="btn btn-outline-white">
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Contact Us</span>
          <h2 className="section-title">
            Let&apos;s <span className="text-gradient">Work Together</span>
          </h2>
          <p className="section-description">
            Ready to take your business to the next level? Get in touch with us today.
          </p>
        </div>

        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

// Main Page Component
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        {/* <Portfolio /> */}
        <Process />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
