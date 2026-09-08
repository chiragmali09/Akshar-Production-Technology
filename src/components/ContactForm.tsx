"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "5e40aef4-2df8-4d0a-9137-198eced2cfaf",
          subject: `New Inquiry from ${formData.name} - Akshar Production`,
          from_name: "Akshar Production Website",
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(
          result.message || "Something went wrong. Please try again or email us directly."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network connection error. Please try again or email us directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="form-status-alert success" role="alert" style={{ flexDirection: "column", alignItems: "center", textAlign: "center", padding: "40px 24px" }}>
        <div style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "rgba(16, 185, 129, 0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "16px"
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 style={{ fontSize: "1.35rem", marginBottom: "8px", color: "#fafaff" }}>
          Message Received!
        </h3>
        <p style={{ color: "var(--foreground-secondary)", maxWidth: "420px", marginBottom: "24px" }}>
          Thank you for reaching out to Akshar Production. Our team will review your requirements and respond within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn btn-secondary"
          style={{ padding: "10px 24px" }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false}>
      {status === "error" && (
        <div className="form-status-alert error" role="alert">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <div>
            <strong>Error: </strong>
            {errorMessage}{" "}
            <a href="mailto:work.chiragmali@gmail.com" style={{ color: "inherit", textDecoration: "underline" }}>
              work.chiragmali@gmail.com
            </a>
          </div>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="contact-name" className="form-label">
          Your Name <span style={{ color: "var(--accent)" }}>*</span>
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
          placeholder="e.g. Chirag Mali"
          required
          disabled={status === "submitting"}
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact-email" className="form-label">
          Email Address <span style={{ color: "var(--accent)" }}>*</span>
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          placeholder="e.g. chirag@example.com"
          required
          disabled={status === "submitting"}
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact-phone" className="form-label">
          Phone Number (Optional)
        </label>
        <input
          type="tel"
          id="contact-phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="form-input"
          placeholder="+91 98765 43210"
          disabled={status === "submitting"}
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact-service" className="form-label">
          Service Interested In
        </label>
        <select
          id="contact-service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="form-input"
          disabled={status === "submitting"}
        >
          <option value="">Select a service</option>
          <option value="Web Development">Web Development</option>
          <option value="Social Media Marketing">Social Media Marketing</option>
          <option value="Paid Advertising">Paid Advertising</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="Video Editing">Video Editing</option>
          <option value="Web Applications">Web Applications</option>
          <option value="Other">Other / Comprehensive Growth</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="contact-message" className="form-label">
          Your Message <span style={{ color: "var(--accent)" }}>*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="form-textarea"
          placeholder="Tell us about your project, timeline, and goals..."
          rows={5}
          required
          disabled={status === "submitting"}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: "100%", justifyContent: "center" }}
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <span className="spinner" aria-hidden="true" />
            <span>Submitting Inquiry...</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
