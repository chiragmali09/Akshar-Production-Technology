import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <span className="logo-text">Akshar Production &amp; Technology</span>
            </Link>
            <p>
              Your trusted digital transformation partner. We create exceptional web experiences, 
              data-driven marketing campaigns, and high-converting creative assets that drive sustainable business growth.
            </p>
            <div className="footer-social">
              <a
                href="https://www.facebook.com/profile.php?id=61572490632035"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Follow Akshar Production on Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/aksharproduction/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Follow Akshar Production on Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
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
              <li>
                <Link href="/services/web-development">Web Development</Link>
              </li>
              <li>
                <Link href="/services/social-media-marketing">Social Media Marketing</Link>
              </li>
              <li>
                <Link href="/services/paid-advertising">Paid Advertising</Link>
              </li>
              <li>
                <Link href="/services/graphic-design">Graphic Design</Link>
              </li>
              <li>
                <Link href="/services/video-editing">Video Editing</Link>
              </li>
              <li>
                <Link href="/services/web-apps">Web Applications</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul className="footer-links">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/#services">Our Services</Link>
              </li>
              <li>
                <Link href="/#process">Our Process</Link>
              </li>
              <li>
                <Link href="/#testimonials">Testimonials</Link>
              </li>
              <li>
                <Link href="/#contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li>
                <a href="mailto:work.chiragmali@gmail.com">work.chiragmali@gmail.com</a>
              </li>
              <li>Rajasthan, India</li>
              <li>Mon – Sat: 9:00 AM – 7:00 PM IST</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Akshar Production and Technology. All rights reserved.</p>
          <div className="footer-legal">
            <Link href="/about">About Agency</Link>
            <a href="mailto:work.chiragmali@gmail.com">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
