import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export function WebDevIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <path d="M7 8l-2 2 2 2" />
      <path d="M17 8l2 2-2 2" />
      <line x1="13" y1="7" x2="11" y2="13" />
    </svg>
  );
}

export function SocialMediaIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="5" y="2" width="14" height="20" rx="3" ry="3" />
      <path d="M12 18h.01" />
      <path d="M9 7h6" />
      <path d="M9 11h4" />
    </svg>
  );
}

export function PaidAdsIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

export function GraphicDesignIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}

export function VideoEditingIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2.18" ry="2.18" />
      <line x1="7" y1="4" x2="7" y2="20" />
      <line x1="17" y1="4" x2="17" y2="20" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="2" y1="8" x2="7" y2="8" />
      <line x1="2" y1="16" x2="7" y2="16" />
      <line x1="17" y1="8" x2="22" y2="8" />
      <line x1="17" y1="16" x2="22" y2="16" />
    </svg>
  );
}

export function WebAppsIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export function getServiceIcon(slugOrTitle: string) {
  const normalized = slugOrTitle.toLowerCase().replace(/\s+/g, "-");
  if (normalized.includes("web-dev") || normalized.includes("development")) {
    return <WebDevIcon />;
  }
  if (normalized.includes("social")) {
    return <SocialMediaIcon />;
  }
  if (normalized.includes("ad") || normalized.includes("paid")) {
    return <PaidAdsIcon />;
  }
  if (normalized.includes("graphic") || normalized.includes("design")) {
    return <GraphicDesignIcon />;
  }
  if (normalized.includes("video")) {
    return <VideoEditingIcon />;
  }
  if (normalized.includes("app")) {
    return <WebAppsIcon />;
  }
  return <WebDevIcon />;
}
