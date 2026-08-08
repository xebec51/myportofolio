import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Muh. Rinaldi Ruslan - Full Stack Developer dan Machine Learning Engineer";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 78% 30%, rgba(220,38,38,0.35), transparent 55%), radial-gradient(circle at 15% 85%, rgba(220,38,38,0.18), transparent 45%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              backgroundColor: "#ffffff",
              color: "#111827",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              fontWeight: 800,
            }}
          >
            N
          </div>
          <div style={{ display: "flex", color: "#9ca3af", fontSize: "26px", letterSpacing: "0.08em" }}>
            NALDIPORTO.VERCEL.APP
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#ffffff",
          }}
        >
          <div style={{ display: "flex", fontSize: "68px", fontWeight: 800, lineHeight: 1.1 }}>
            Muh. Rinaldi Ruslan
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "24px",
              fontSize: "34px",
              fontWeight: 600,
              color: "#f87171",
            }}
          >
            Full Stack Developer &amp; Machine Learning Engineer
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "28px",
              fontSize: "26px",
              color: "#d1d5db",
            }}
          >
            Makassar, Indonesia
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
