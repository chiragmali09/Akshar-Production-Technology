"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

// Service data
const servicesData: Record<string, {
    title: string;
    description: string;
    icon: string;
    features: string[];
    process: { title: string; description: string }[];
    benefits: string[];
}> = {
    "web-development": {
        title: "Web Development",
        description: "Custom websites and web applications built with cutting-edge technologies. We create responsive, fast, and SEO-optimized websites that convert visitors into customers.",
        icon: "🌐",
        features: [
            "Custom Website Design & Development",
            "E-commerce Solutions",
            "Content Management Systems (CMS)",
            "Progressive Web Apps (PWA)",
            "API Development & Integration",
            "Website Maintenance & Support"
        ],
        process: [
            { title: "Discovery", description: "Understanding your business goals, target audience, and project requirements." },
            { title: "Design", description: "Creating wireframes and mockups that align with your brand identity." },
            { title: "Development", description: "Building your website using modern technologies like React, Next.js, and Node.js." },
            { title: "Launch", description: "Deploying your website and ensuring everything works perfectly." }
        ],
        benefits: [
            "Increased online visibility",
            "Better user experience",
            "Higher conversion rates",
            "Mobile-first responsive design",
            "Fast loading speeds",
            "SEO-optimized structure"
        ]
    },
    "social-media-marketing": {
        title: "Social Media Marketing",
        description: "Strategic social media management that builds your brand, engages your audience, and drives measurable results across all major platforms.",
        icon: "📱",
        features: [
            "Social Media Strategy Development",
            "Content Creation & Curation",
            "Community Management",
            "Influencer Marketing",
            "Social Media Analytics",
            "Brand Monitoring"
        ],
        process: [
            { title: "Audit", description: "Analyzing your current social media presence and competitor landscape." },
            { title: "Strategy", description: "Developing a customized social media strategy aligned with your goals." },
            { title: "Content", description: "Creating engaging content that resonates with your target audience." },
            { title: "Growth", description: "Implementing growth tactics and continuously optimizing performance." }
        ],
        benefits: [
            "Increased brand awareness",
            "Better audience engagement",
            "Higher website traffic",
            "Stronger customer relationships",
            "Lead generation",
            "Improved brand loyalty"
        ]
    },
    "paid-advertising": {
        title: "Paid Advertising",
        description: "Data-driven Google Ads and Meta campaigns that maximize ROI. We optimize every dollar spent to bring you qualified leads and measurable results.",
        icon: "🎯",
        features: [
            "Google Ads Management",
            "Facebook & Instagram Ads",
            "LinkedIn Advertising",
            "YouTube Video Ads",
            "Retargeting Campaigns",
            "Performance Analytics"
        ],
        process: [
            { title: "Research", description: "Identifying target keywords, audiences, and competitive landscape." },
            { title: "Setup", description: "Creating optimized ad campaigns with compelling copy and visuals." },
            { title: "Optimize", description: "Continuous A/B testing and optimization to improve performance." },
            { title: "Scale", description: "Scaling successful campaigns while maintaining ROI targets." }
        ],
        benefits: [
            "Immediate visibility",
            "Targeted reach",
            "Measurable results",
            "Flexible budgets",
            "Quick results",
            "Competitive advantage"
        ]
    },
    "graphic-design": {
        title: "Graphic Design",
        description: "Eye-catching visuals that tell your brand story. From logos to marketing materials, we create designs that leave lasting impressions.",
        icon: "🎨",
        features: [
            "Logo Design & Brand Identity",
            "Marketing Collateral",
            "Social Media Graphics",
            "Packaging Design",
            "Infographics",
            "Print Design"
        ],
        process: [
            { title: "Brief", description: "Understanding your brand, target audience, and design preferences." },
            { title: "Concept", description: "Developing initial design concepts and mood boards." },
            { title: "Refine", description: "Refining designs based on your feedback until perfect." },
            { title: "Deliver", description: "Providing final files in all required formats." }
        ],
        benefits: [
            "Strong brand identity",
            "Professional appearance",
            "Consistent branding",
            "Increased credibility",
            "Better engagement",
            "Stand out from competitors"
        ]
    },
    "video-editing": {
        title: "Video Editing",
        description: "Professional video production and editing that captivates viewers. Perfect for social media, advertisements, and brand storytelling.",
        icon: "🎬",
        features: [
            "Video Editing & Post-Production",
            "Motion Graphics",
            "Color Grading",
            "Sound Design",
            "Social Media Videos",
            "Corporate Videos"
        ],
        process: [
            { title: "Planning", description: "Understanding your video goals and gathering raw footage." },
            { title: "Editing", description: "Crafting a compelling narrative through expert editing." },
            { title: "Polish", description: "Adding effects, music, and color correction." },
            { title: "Export", description: "Delivering videos optimized for your target platforms." }
        ],
        benefits: [
            "Higher engagement",
            "Better storytelling",
            "Professional quality",
            "Platform optimization",
            "Increased conversions",
            "Memorable content"
        ]
    },
    "web-apps": {
        title: "Web Applications",
        description: "Custom web applications tailored to your business needs. From dashboards to full SaaS platforms, we build solutions that scale with your growth.",
        icon: "⚡",
        features: [
            "Custom Web App Development",
            "SaaS Platform Development",
            "Admin Dashboards",
            "CRM & ERP Systems",
            "API Development",
            "Cloud Infrastructure"
        ],
        process: [
            { title: "Requirements", description: "Detailed analysis of your business requirements and workflows." },
            { title: "Architecture", description: "Designing scalable system architecture and database structure." },
            { title: "Development", description: "Agile development with regular updates and feedback cycles." },
            { title: "Deployment", description: "Secure deployment with ongoing maintenance and support." }
        ],
        benefits: [
            "Automated workflows",
            "Improved efficiency",
            "Data-driven insights",
            "Scalable solutions",
            "Competitive edge",
            "Cost reduction"
        ]
    }
};

export default function ServicePage() {
    const params = useParams();
    const slug = params.slug as string;
    const service = servicesData[slug];

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Service Not Found</h1>
                    <Link href="/" className="btn btn-primary">Back to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Header */}
            <header className="header scrolled">
                <div className="container">
                    <div className="header-inner">
                        <Link href="/" className="logo">
                            <div className="logo-icon" style={{ color: '#0a0a0b' }}>A</div>
                            <span>Akshar</span>
                        </Link>
                        <nav className="nav">
                            <Link href="/#products" className="nav-link">Products</Link>
                            <Link href="/#services" className="nav-link">Services</Link>
                            <Link href="/#portfolio" className="nav-link">Portfolio</Link>
                            <Link href="/#process" className="nav-link">Process</Link>
                            <Link href="/#testimonials" className="nav-link">Testimonials</Link>
                            <Link href="/#contact" className="nav-link">Contact</Link>
                        </nav>
                        <div className="header-cta">
                            <Link href="/#contact" className="btn btn-primary">Get Started</Link>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section style={{
                    paddingTop: "160px",
                    paddingBottom: "80px",
                    background: "linear-gradient(180deg, rgba(30, 58, 138, 0.1) 0%, transparent 100%)"
                }}>
                    <div className="container">
                        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
                            <div style={{
                                fontSize: "4rem",
                                marginBottom: "24px"
                            }}>
                                {service.icon}
                            </div>
                            <h1 style={{ marginBottom: "24px" }}>
                                {service.title}
                            </h1>
                            <p className="lead" style={{ maxWidth: "600px", margin: "0 auto 40px" }}>
                                {service.description}
                            </p>
                            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                                <Link href="/#contact" className="btn btn-primary">Get a Quote</Link>
                                <Link href="/#portfolio" className="btn btn-secondary">View Our Work</Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="section" style={{ background: "var(--background-secondary)" }}>
                    <div className="container">
                        <div className="section-header">
                            <span className="section-badge">What We Offer</span>
                            <h2 className="section-title">Our {service.title} Services</h2>
                        </div>
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: "24px"
                        }}>
                            {service.features.map((feature, index) => (
                                <div key={index} className="card" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "24px" }}>
                                    <div style={{
                                        width: "48px",
                                        height: "48px",
                                        background: "var(--gradient-primary)",
                                        borderRadius: "12px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0
                                    }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <span style={{ fontSize: "1.125rem", fontWeight: "500" }}>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="section">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-badge">Our Process</span>
                            <h2 className="section-title">How We Work</h2>
                        </div>
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                            gap: "32px",
                            maxWidth: "1000px",
                            margin: "0 auto"
                        }}>
                            {service.process.map((step, index) => (
                                <div key={index} style={{ textAlign: "center" }}>
                                    <div style={{
                                        width: "64px",
                                        height: "64px",
                                        background: "var(--gradient-primary)",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        margin: "0 auto 20px",
                                        fontSize: "1.5rem",
                                        fontWeight: "700"
                                    }}>
                                        {index + 1}
                                    </div>
                                    <h3 style={{ marginBottom: "12px", fontSize: "1.25rem" }}>{step.title}</h3>
                                    <p style={{ color: "var(--foreground-secondary)" }}>{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="section" style={{ background: "var(--background-secondary)" }}>
                    <div className="container">
                        <div className="section-header">
                            <span className="section-badge">Benefits</span>
                            <h2 className="section-title">Why Choose Our {service.title}</h2>
                        </div>
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "20px",
                            maxWidth: "900px",
                            margin: "0 auto"
                        }}>
                            {service.benefits.map((benefit, index) => (
                                <div key={index} style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                    padding: "16px",
                                    background: "var(--surface)",
                                    borderRadius: "12px",
                                    border: "1px solid var(--border)"
                                }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-light)" strokeWidth="2">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="cta-section section">
                    <div className="container">
                        <div className="cta-wrapper">
                            <h2 className="cta-title">Ready to Get Started?</h2>
                            <p className="cta-description">
                                Let&apos;s discuss how our {service.title.toLowerCase()} services can help grow your business.
                            </p>
                            <div className="cta-buttons">
                                <Link href="/#contact" className="btn btn-white">
                                    Get Free Consultation
                                </Link>
                                <Link href="mailto:work.chiragmali@gmail.com" className="btn btn-outline-white">
                                    Email Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <Link href="/" className="logo">
                                <div className="logo-icon" style={{ color: '#0a0a0b' }}>A</div>
                                <span>Akshar</span>
                            </Link>
                            <p>
                                Your trusted partner for digital transformation. We create exceptional digital experiences that drive growth.
                            </p>
                        </div>

                        <div className="footer-column">
                            <h4>Services</h4>
                            <ul className="footer-links">
                                <li><Link href="/services/web-development">Web Development</Link></li>
                                <li><Link href="/services/social-media-marketing">Social Media Marketing</Link></li>
                                <li><Link href="/services/paid-advertising">Paid Advertising</Link></li>
                                <li><Link href="/services/graphic-design">Graphic Design</Link></li>
                                <li><Link href="/services/video-editing">Video Editing</Link></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Company</h4>
                            <ul className="footer-links">
                                <li><Link href="/about">About Us</Link></li>
                                <li><Link href="/#portfolio">Portfolio</Link></li>
                                <li><Link href="/#process">Our Process</Link></li>
                                <li><Link href="/#testimonials">Testimonials</Link></li>
                                <li><Link href="/#contact">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Contact</h4>
                            <ul className="footer-links">
                                <li><a href="mailto:work.chiragmali@gmail.com">work.chiragmali@gmail.com</a></li>
                                <li>Rajasthan, India</li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>© 2023-2024 Akshar Production and Technology. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
