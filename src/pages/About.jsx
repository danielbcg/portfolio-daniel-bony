import { useLanguage } from "../context/LanguageContext";
import GreenButton from "../components/GreenButton";
import { UserPlus } from "lucide-react";

export default function About() {
  const { toggleLang, t } = useLanguage();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "5rem 8rem",
        flex: 1,
      }}
    >
      <div style={{ maxWidth: "550px" }}>
        <h1 style={{ fontSize: "3.2rem", margin: "0 0 0.5rem 0" }}>
          {t.about.title}
        </h1>
        <h2
          style={{ fontSize: "2.2rem", color: "#fff", margin: "0 0 1.5rem 0" }}
        >
          {t.about.name}
        </h2>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#a0a0a5",
            marginBottom: "2.5rem",
            lineHeight: "1.6",
          }}
        >
          {t.about.desc}
        </p>
        <GreenButton text={t.about.btnLang} onClick={toggleLang} />
      </div>

      <div
        style={{
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          border: "8px solid #fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <UserPlus size={130} color="#fff" strokeWidth={1.5} />
      </div>
    </div>
  );
}
