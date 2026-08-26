import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import GreenButton from "../components/GreenButton";

export default function Experience() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? t.exp.items.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === t.exp.items.length - 1 ? 0 : i + 1));

  return (
    <div style={{ padding: "4rem 8rem", flex: 1, textAlign: "center" }}>
      <h1 style={{ fontSize: "2.8rem", marginBottom: "0.5rem" }}>
        {t.exp.title}
      </h1>
      <p style={{ color: "#a0a0a5", marginBottom: "3rem" }}>{t.exp.sub}</p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <button onClick={prev} style={arrowStyle}>
          <ChevronLeft size={30} />
        </button>
        <div style={{ display: "flex", gap: "2rem", maxWidth: "800px" }}>
          {t.exp.items.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "#121214",
                padding: "1.5rem",
                borderRadius: "12px",
                textAlign: "left",
                flex: 1,
                border: "1px solid #222",
              }}
            >
              <img
                src={
                  item.id === 1
                    ? "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500"
                    : "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500"
                }
                alt={item.title}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  height: "180px",
                  objectFit: "cover",
                }}
              />
              <h3
                style={{ marginTop: "1rem", color: "#fff", fontSize: "1.1rem" }}
              >
                {item.title}
              </h3>
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "#489700",
                  fontWeight: "bold",
                }}
              >
                {item.period}
              </span>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "#aaa",
                  margin: "0.8rem 0 1.5rem 0",
                  lineHeight: "1.5",
                }}
              >
                {item.desc}
              </p>
              <GreenButton
                text={t.exp.btnDetails}
                onClick={() => window.open(item.githubUrl, "_blank")}
              />
            </div>
          ))}
        </div>
        <button onClick={next} style={arrowStyle}>
          <ChevronRight size={30} />
        </button>
      </div>
    </div>
  );
}

const arrowStyle = {
  background: "none",
  border: "1px solid #444",
  color: "#fff",
  borderRadius: "50%",
  width: "45px",
  height: "45px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
