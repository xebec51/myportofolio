import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Profil Muh. Rinaldi Ruslan";

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
            color: "#f87171",
            fontSize: "26px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            marginBottom: "24px",
          }}
        >
          PROFIL
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#ffffff",
          }}
        >
          <div style={{ display: "flex", fontSize: "64px", fontWeight: 800, lineHeight: 1.1 }}>
            Muh. Rinaldi Ruslan
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "24px",
              fontSize: "30px",
              fontWeight: 500,
              color: "#d1d5db",
              maxWidth: "900px",
            }}
          >
            Pendidikan, pengalaman, dan keahlian Full Stack Development &amp; Machine Learning.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
