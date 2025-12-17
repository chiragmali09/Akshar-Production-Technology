import Link from "next/link";

// Values data
const values = [
    {
        icon: "💎",
        title: "Quality First",
        description: "We never compromise on quality. Every project receives our full dedication and expertise."
    },
    {
        icon: "🤝",
        title: "Client Partnership",
        description: "We treat our clients as partners, working closely to understand and achieve their goals."
    },
    {
        icon: "🚀",
        title: "Innovation",
        description: "We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions."
    },
    {
        icon: "📊",
        title: "Results-Driven",
        description: "We focus on measurable outcomes that directly impact your business growth."
    }
];

// Timeline data
const milestones = [
    { year: "2023", title: "Founded", description: "Started with a vision to transform digital experiences" },
    { year: "2023", title: "First Clients", description: "Delivered successful projects for early clients" },
    { year: "2024", title: "Growing Portfolio", description: "Expanded services and built a strong portfolio" },
    { year: "2024", title: "Industry Recognition", description: "Recognized for quality work and client satisfaction" }
];

export default function AboutPage() {
    return (
        <>
            {/* Header */}
            <header className="header scrolled">
                <div className="container">
                    <div className="header-inner">
                        <Link href="/" className="logo">
                            <div className="logo-icon">A</div>
                            <span>Akshar</span>
                        </Link>
                        <nav className="nav">
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
                    background: "linear-gradient(180deg, rgba(99, 102, 241, 0.1) 0%, transparent 100%)"
                }}>
                    <div className="container">
                        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
                            <span className="section-badge">About Us</span>
                            <h1 style={{ marginBottom: "24px", marginTop: "24px" }}>
                                We&apos;re Building the <span className="text-gradient">Future of Digital</span>
                            </h1>
                            <p className="lead" style={{ maxWidth: "600px", margin: "0 auto" }}>
                                Akshar Production and Technology is a full-service digital agency dedicated to helping businesses
                                thrive in the digital age. With passion, expertise, and innovation, we transform
                                visions into reality.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="section">
                    <div className="container">
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                            gap: "64px",
                            alignItems: "center"
                        }}>
                            <div>
                                <span className="section-badge">Our Story</span>
                                <h2 style={{ marginTop: "24px", marginBottom: "24px" }}>
                                    From Passion to <span className="text-gradient">Excellence</span>
                                </h2>
                                <p style={{ marginBottom: "20px", color: "var(--foreground-secondary)" }}>
                                    Founded in 2023, Akshar Production and Technology began with a simple mission: to help businesses
                                    succeed in the digital world. What started as a passionate solo venture by Chirag Mali
                                    has grown into a trusted digital agency serving clients across industries.
                                </p>
                                <p style={{ marginBottom: "20px", color: "var(--foreground-secondary)" }}>
                                    With 2+ years of experience in digital marketing and web development, we&apos;ve helped
                                    numerous clients achieve their digital goals. From startups to established businesses,
                                    we bring the same level of dedication and expertise to every project.
                                </p>
                                <p style={{ color: "var(--foreground-secondary)" }}>
                                    We combine creativity with technical excellence to deliver solutions that
                                    not only look stunning but also drive real business results.
                                </p>
                            </div>
                            <div style={{
                                background: "var(--gradient-primary)",
                                borderRadius: "var(--card-radius)",
                                padding: "60px",
                                display: "grid",
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gap: "40px"
                            }}>
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ fontSize: "3rem", fontWeight: "700", fontFamily: "var(--font-display)" }}>50+</div>
                                    <div style={{ opacity: "0.8" }}>Projects Delivered</div>
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ fontSize: "3rem", fontWeight: "700", fontFamily: "var(--font-display)" }}>20+</div>
                                    <div style={{ opacity: "0.8" }}>Happy Clients</div>
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ fontSize: "3rem", fontWeight: "700", fontFamily: "var(--font-display)" }}>2+</div>
                                    <div style={{ opacity: "0.8" }}>Years Experience</div>
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ fontSize: "3rem", fontWeight: "700", fontFamily: "var(--font-display)" }}>100%</div>
                                    <div style={{ opacity: "0.8" }}>Client Satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="section" style={{ background: "var(--background-secondary)" }}>
                    <div className="container">
                        <div className="section-header">
                            <span className="section-badge">Our Values</span>
                            <h2 className="section-title">What Drives Us</h2>
                        </div>
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: "24px"
                        }}>
                            {values.map((value, index) => (
                                <div key={index} className="card" style={{ textAlign: "center", padding: "40px" }}>
                                    <div style={{ fontSize: "3rem", marginBottom: "20px" }}>{value.icon}</div>
                                    <h3 style={{ marginBottom: "12px" }}>{value.title}</h3>
                                    <p style={{ color: "var(--foreground-secondary)" }}>{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Founder Section */}
                <section className="section">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-badge">Founder</span>
                            <h2 className="section-title">Meet <span className="text-gradient">Chirag Mali</span></h2>
                            <p className="section-description">
                                The driving force behind Akshar Production and Technology
                            </p>
                        </div>
                        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
                            <div className="card" style={{ textAlign: "center", padding: "40px" }}>
                                <div style={{
                                    width: "120px",
                                    height: "120px",
                                    background: "var(--gradient-primary)",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "0 auto 24px",
                                    fontSize: "2.5rem",
                                    fontWeight: "700"
                                }}>
                                    CM
                                </div>
                                <h3 style={{ marginBottom: "8px", fontSize: "1.5rem" }}>Chirag Mali</h3>
                                <div style={{ color: "var(--primary-light)", marginBottom: "16px", fontSize: "1rem" }}>
                                    Founder & CEO
                                </div>
                                <p style={{ color: "var(--foreground-secondary)", fontSize: "1rem", lineHeight: "1.8" }}>
                                    With 2+ years of experience in digital marketing and web development, Chirag founded
                                    Akshar Production and Technology with a vision to help businesses thrive in the digital age.
                                    Passionate about creating impactful digital experiences, he brings creativity, technical expertise,
                                    and dedication to every project.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="section" style={{ background: "var(--background-secondary)" }}>
                    <div className="container">
                        <div className="section-header">
                            <span className="section-badge">Our Journey</span>
                            <h2 className="section-title">Milestones</h2>
                        </div>
                        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                            {milestones.map((milestone, index) => (
                                <div key={index} style={{
                                    display: "flex",
                                    gap: "24px",
                                    marginBottom: "32px",
                                    alignItems: "flex-start"
                                }}>
                                    <div style={{
                                        background: "var(--gradient-primary)",
                                        padding: "8px 16px",
                                        borderRadius: "8px",
                                        fontWeight: "700",
                                        fontFamily: "var(--font-display)",
                                        flexShrink: 0
                                    }}>
                                        {milestone.year}
                                    </div>
                                    <div>
                                        <h3 style={{ marginBottom: "4px", fontSize: "1.25rem" }}>{milestone.title}</h3>
                                        <p style={{ color: "var(--foreground-secondary)" }}>{milestone.description}</p>
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
                            <h2 className="cta-title">Want to Work With Us?</h2>
                            <p className="cta-description">
                                Join our growing list of happy clients and let&apos;s build something amazing together.
                            </p>
                            <div className="cta-buttons">
                                <Link href="/#contact" className="btn btn-white">
                                    Start a Project
                                </Link>
                                <Link href="/#services" className="btn btn-outline-white">
                                    View Services
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
                                <div className="logo-icon">A</div>
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
