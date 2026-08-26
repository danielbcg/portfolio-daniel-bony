import { useLanguage } from "../context/LanguageContext";
import GreenButton from "../components/GreenButton";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <div style={{ padding: "4rem 8rem", flex: 1, textAlign: "center" }}>
      <h1 style={{ fontSize: "2.8rem", marginBottom: "0.5rem" }}>
        {t.projects.title}
      </h1>
      <p style={{ color: "#a0a0a5", marginBottom: "4rem" }}>{t.projects.sub}</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
        {t.projects.items.map((proj, idx) => (
          <div
            key={proj.id}
            style={{
              display: "flex",
              flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "3rem",
            }}
          >
            <div style={{ flex: 1, textAlign: "left" }}>
              <span
                style={{
                  backgroundColor: "#489700",
                  color: "#fff",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "12px",
                  fontSize: "0.85rem",
                  fontWeight: "bold",
                }}
              >
                {proj.company}
              </span>
              <p style={{ marginTop: "1.5rem", color: "#ccc" }}>
                <strong>{t.projects.descLabel}</strong> {proj.desc}
              </p>
              <p style={{ color: "#aaa", marginTop: "0.5rem" }}>
                <strong>{t.projects.periodLabel}</strong> {proj.period}
              </p>
              <p style={{ color: "#aaa", marginBottom: "1.5rem" }}>
                <strong>{t.projects.techLabel}</strong> {proj.role}
              </p>
              <GreenButton
                text={t.projects.btnView}
                onClick={() => window.open(proj.githubUrl, "_blank")}
              />
            </div>
            <div style={{ flex: 1 }}>
              <img
                src={
                  proj.id === 1
                    ? "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500"
                    : "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500"
                }
                alt={proj.company}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  border: "1px solid #333",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
