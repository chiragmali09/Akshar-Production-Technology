"use client";

import { useState, useEffect } from "react";

// Header Component
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-inner">
          <a href="/" className="logo">
            <div className="logo-icon">A</div>
            <span>Akshar</span>
          </a>

          <nav className="nav">
            <a href="#services" className="nav-link">Services</a>
            <a href="#portfolio" className="nav-link">Portfolio</a>
            <a href="#process" className="nav-link">Process</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <div className="header-cta">
            <a href="#contact" className="btn btn-primary">Get Started</a>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-glow"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Available for new projects
          </div>

          <h1 className="hero-title">
            <span>We Create</span>
            <span className="text-gradient">Digital Excellence</span>
          </h1>

          <p className="hero-description lead">
            Transform your brand with cutting-edge web development, strategic marketing,
            and stunning design. We turn your vision into digital reality.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Start Your Project
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#portfolio" className="btn btn-secondary">
              View Our Work
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
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href={service.link} className="service-link">
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Portfolio Data
const portfolioItems = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    title: "Brand Identity Design",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
  },
  {
    title: "Social Media Campaign",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80"
  },
  {
    title: "SaaS Dashboard",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    title: "Product Video",
    category: "Video Production",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80"
  },
  {
    title: "PPC Campaign",
    category: "Paid Advertising",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
  }
];

// Portfolio Section
function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our Work</span>
          <h2 className="section-title">
            Projects That <span className="text-gradient">Speak Results</span>
          </h2>
          <p className="section-description">
            Explore our portfolio of successful projects across various industries
          </p>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-card">
              <img
                src={item.image}
                alt={item.title}
                className="portfolio-image"
              />
              <div className="portfolio-overlay">
                <span className="portfolio-category">{item.category}</span>
                <h3 className="portfolio-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
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

        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <form>
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-input" placeholder="John Doe" required />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-input" placeholder="john@example.com" required />
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input type="tel" className="form-input" placeholder="+91 98765 43210" />
            </div>

            <div className="form-group">
              <label className="form-label">Service Interested In</label>
              <select className="form-input">
                <option value="">Select a service</option>
                <option value="web-development">Web Development</option>
                <option value="social-media">Social Media Marketing</option>
                <option value="paid-ads">Paid Advertising</option>
                <option value="graphic-design">Graphic Design</option>
                <option value="video-editing">Video Editing</option>
                <option value="web-apps">Web Applications</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Your Message</label>
              <textarea className="form-textarea" placeholder="Tell us about your project..." rows={5}></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Send Message
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="logo">
              <div className="logo-icon">A</div>
              <span>Akshar</span>
            </a>
            <p>
              Your trusted partner for digital transformation. We create exceptional digital experiences that drive growth.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="/services/web-development">Web Development</a></li>
              <li><a href="/services/social-media-marketing">Social Media Marketing</a></li>
              <li><a href="/services/paid-advertising">Paid Advertising</a></li>
              <li><a href="/services/graphic-design">Graphic Design</a></li>
              <li><a href="/services/video-editing">Video Editing</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#process">Our Process</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
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
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
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
        <Portfolio />
        <Process />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
