import { ImageResponse } from "next/og";

export const alt = "Akshar Production & Technology | Digital Agency";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #080814 0%, #0f0f1a 50%, #171728 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(72, 69, 179, 0.35) 0%, transparent 70%)",
            filter: "blur(40px)",
            top: "-100px",
            left: "-100px",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
            padding: "8px 24px",
            borderRadius: "9999px",
            border: "1px solid rgba(0, 212, 255, 0.3)",
            background: "rgba(0, 212, 255, 0.1)",
            color: "#00D4FF",
            fontSize: "20px",
            fontWeight: 600,
            letterSpacing: "0.05em",
          }}
        >
          AKSHAR PRODUCTION &amp; TECHNOLOGY
        </div>
        <div
          style={{
            fontSize: "54px",
            fontWeight: 800,
            color: "#fafaff",
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: "920px",
            marginBottom: "24px",
          }}
        >
          We Build High-Impact Digital Experiences &amp; Scalable Web Solutions
        </div>
        <div
          style={{
            fontSize: "22px",
            color: "#8B89F0",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          Web Development • Social Media Marketing • Paid Advertising • Video Production
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
