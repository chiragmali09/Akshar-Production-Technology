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
            <img src="/logo.png" alt="Akshar Production" className="logo-img" />
          </a>

          <nav className="nav">
            <a href="#products" className="nav-link">Products</a>
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
            className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <a href="#products" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Products</a>
          <a href="#services" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#portfolio" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
          <a href="#process" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Process</a>
          <a href="#testimonials" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
          <a href="#contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <div style={{ marginTop: '24px' }}>
            <a href="#contact" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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

// Products Section
function Products() {
  return (
    <section id="products" className="products-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our Products</span>
          <h2 className="section-title">
            Apps We've <span className="text-gradient">Built & Launched</span>
          </h2>
          <p className="section-description">
            Experience our passion for creating engaging digital experiences
          </p>
        </div>

        {/* Featured Product - Color Flood Game */}
        <div className="product-showcase">
          <div className="product-card-featured">
            {/* Game Visual Side */}
            <div className="product-visual">
              <div className="product-device">
                <div className="product-screen">
                  {/* Colorful grid representation */}
                  <div className="game-preview">
                    {[...Array(36)].map((_, i) => (
                      <div
                        key={i}
                        className="game-cell"
                        style={{
                          background: ['#f59e0b', '#a855f7', '#06b6d4', '#ec4899', '#84cc16', '#3b82f6'][i % 6],
                          animationDelay: `${i * 0.05}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="product-badge product-badge-1">🎮 Puzzle</div>
              <div className="product-badge product-badge-2">🧠 Strategy</div>
            </div>

            {/* Game Info Side */}
            <div className="product-info">
              <div className="product-platform">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 2.469c-.627-.313-1.393-.157-1.879.374L12 7.111l-3.644-4.268c-.486-.531-1.252-.687-1.879-.374-.627.313-1.017.97-.956 1.652l.583 6.51-5.086 5.086c-.364.364-.555.857-.522 1.362.033.505.288.971.7 1.279l6.086 4.552c.337.252.75.39 1.175.39.229 0 .459-.04.677-.122l9.586-3.592c.605-.227 1.018-.783 1.063-1.426.045-.643-.289-1.253-.86-1.568L12.5 11.8l3.644-4.268c.486-.531.594-1.297.267-1.879-.327-.582-.888-.939-1.518-.939-.203 0-.406.039-.599.119l-.291.122 3.644 4.268c.486.531.594 1.297.267 1.879a1.51 1.51 0 0 1-1.518.939c-.203 0-.406-.039-.599-.119L12 8.889l-3.644 4.268c-.486.531-1.252.687-1.879.374-.627-.313-1.017-.97-.956-1.652l.583-6.51 5.086-5.086c.364-.364.555-.857.522-1.362a1.51 1.51 0 0 0-.7-1.279L5.018 3.194c-.337-.252-.75-.39-1.175-.39-.229 0-.459.04-.677.122L3.475 2.8c.486-.531 1.252-.687 1.879-.374z" />
                </svg>
                Available on Google Play
              </div>

              <h3 className="product-title">Color Flood: 25-Move Puzzle</h3>

              <p className="product-description">
                Flood the board in 25 moves—a relaxing, brainy color strategy puzzle that challenges
                your mind while keeping you entertained. Simple to learn, satisfying to master!
              </p>

              <ul className="product-features">
                <li>
                  <span className="feature-icon">🎨</span>
                  <span>Vibrant colorful gameplay</span>
                </li>
                <li>
                  <span className="feature-icon">🧩</span>
                  <span>Strategic puzzle solving</span>
                </li>
                <li>
                  <span className="feature-icon">✨</span>
                  <span>Clean, minimal design</span>
                </li>
                <li>
                  <span className="feature-icon">🏆</span>
                  <span>Challenge yourself in 25 moves</span>
                </li>
              </ul>

              <div className="product-actions">
                <a
                  href="https://play.google.com/store/apps/details?id=com.secretspidey.colorfloodclassicpuzzle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  Get it on Play Store
                </a>
                <div className="product-meta">
                  <span>Free to play</span>
                  <span>•</span>
                  <span>By Akshar Production</span>
                </div>
              </div>
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

// Portfolio Data - Web Development Projects
const webProjects = [
  {
    title: "MS Realtors",
    category: "Web Development",
    description: "Complete real estate platform with property listings, search, and inquiry system",
    image: "/portfolio/msrealtors.png",
    link: "https://msrealtor.in/",
    featured: true
  }
];

// Social Media Portfolio Data with real screenshots
const socialMediaProjects = [
  {
    title: "KR Ayurveda",
    description: "Ayurvedic Healthcare Brand",
    screenshot: "/portfolio/krayurveda.png",
    link: "https://www.instagram.com/krayurveda/",
    followers: "Growing",
    industry: "Healthcare"
  },
  {
    title: "Mr Basrai's World Cuisines",
    description: "Multi-cuisine Restaurant Chain",
    screenshot: "/portfolio/mrbasrai-cuisines.png",
    link: "https://www.instagram.com/mrbasraiworldcuisines/",
    followers: "Active",
    industry: "Food & Dining"
  },
  {
    title: "Mr Basrai's Edinburgh",
    description: "Fine Dining Restaurant",
    screenshot: "/portfolio/mrbasrai-edinburgh.png",
    link: "https://www.instagram.com/mrbasraiedinburgh/",
    followers: "Engaged",
    industry: "Hospitality"
  },
  {
    title: "Lamenda Fashions",
    description: "Women's Fashion E-commerce",
    screenshot: "/portfolio/lamenda.png",
    link: "https://www.instagram.com/lamenda.in/",
    followers: "10K+",
    industry: "Fashion"
  },
  {
    title: "Suresh Kumar Mali",
    description: "Personal Branding & Lifestyle",
    screenshot: "/portfolio/suresh-mali.png",
    link: "https://www.instagram.com/sureshkumarmali85/",
    followers: "Growing",
    industry: "Personal Brand"
  }
];

// Portfolio Section with Interactive Showcase
function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="portfolio" className="portfolio-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our Work</span>
          <h2 className="section-title">
            Projects That <span className="text-gradient">Speak Results</span>
          </h2>
          <p className="section-description">
            Real results from real clients - explore our portfolio of successful digital transformations
          </p>
        </div>

        {/* Featured Web Project */}
        <div className="portfolio-featured-section">
          <h3 className="portfolio-section-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="9" y1="21" x2="9" y2="9" />
            </svg>
            Web Development
          </h3>
          {webProjects.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-featured-card"
            >
              <div className="portfolio-featured-image-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="portfolio-featured-image"
                />
                <div className="portfolio-browser-frame">
                  <div className="browser-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <div className="browser-url">{item.link}</div>
                </div>
              </div>
              <div className="portfolio-featured-content">
                <span className="portfolio-live-badge">
                  <span className="live-dot"></span>
                  Live Project
                </span>
                <h4 className="portfolio-featured-title">{item.title}</h4>
                <p className="portfolio-featured-desc">{item.description}</p>
                <span className="portfolio-visit-btn">
                  Visit Website
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12,5 19,12 12,19" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Social Media Showcase */}
        <div className="social-media-showcase">
          <h3 className="portfolio-section-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Social Media Marketing
          </h3>

          <div className="social-showcase-wrapper">
            {/* Phone Mockup Display */}
            <div className="phone-mockup-container">
              <div className="phone-mockup">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <img
                    src={socialMediaProjects[activeIndex].screenshot}
                    alt={socialMediaProjects[activeIndex].title}
                    className="phone-screen-image"
                  />
                </div>
                <div className="phone-home-indicator"></div>
              </div>
              <div className="phone-glow"></div>
            </div>

            {/* Client Selector */}
            <div className="social-clients-list">
              <div className="clients-header">
                <span className="clients-count">{socialMediaProjects.length} Active Clients</span>
              </div>
              {socialMediaProjects.map((client, index) => (
                <div
                  key={index}
                  className={`client-card ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <div className="client-info">
                    <h4 className="client-name">{client.title}</h4>
                    <p className="client-desc">{client.description}</p>
                    <span className="client-industry">{client.industry}</span>
                  </div>
                  <a
                    href={client.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="client-instagram-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
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
          <form action="https://api.web3forms.com/submit" method="POST">
            {/* Web3Forms Access Key */}
            <input type="hidden" name="access_key" value="5e40aef4-2df8-4d0a-9137-198eced2cfaf" />

            {/* Redirect after submission (optional) */}
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />

            {/* Email subject */}
            <input type="hidden" name="subject" value="New Contact Form Submission - Akshar Production" />

            {/* From name in email */}
            <input type="hidden" name="from_name" value="Akshar Production Website" />

            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input type="text" name="name" className="form-input" placeholder="John Doe" required />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" name="email" className="form-input" placeholder="john@example.com" required />
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input type="tel" name="phone" className="form-input" placeholder="+91 98765 43210" />
            </div>

            <div className="form-group">
              <label className="form-label">Service Interested In</label>
              <select name="service" className="form-input">
                <option value="">Select a service</option>
                <option value="Web Development">Web Development</option>
                <option value="Social Media Marketing">Social Media Marketing</option>
                <option value="Paid Advertising">Paid Advertising</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Video Editing">Video Editing</option>
                <option value="Web Applications">Web Applications</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Your Message</label>
              <textarea name="message" className="form-textarea" placeholder="Tell us about your project..." rows={5}></textarea>
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
              <img src="/logo.png" alt="Akshar Production" className="logo-img" />
            </a>
            <p>
              Your trusted partner for digital transformation. We create exceptional digital experiences that drive growth.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/profile.php?id=61572490632035" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/aksharproduction/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
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
        <Products />
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
