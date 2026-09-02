import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa6";
import { useLanguage } from "../context/LanguageContext";
import GreenButton from "../components/GreenButton";

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.message) {
      setStatus(t.contact.errMsg);
      return;
    }

    setLoading(true);
    setStatus("");

    // Suas chaves do EmailJS configuradas
    const SERVICE_ID = "service_czoffhc";
    const TEMPLATE_ID = "template_x4jtt4o";
    const PUBLIC_KEY = "oxEKSXKOgKbJ42fwd";

    const templateParams = {
      from_email: form.email,
      phone: form.phone || "Não informado",
      message: form.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setStatus(t.contact.successMsg);
        setForm({ email: "", phone: "", message: "" });
      })
      .catch((err) => {
        console.error("Erro ao enviar email:", err);
        setStatus("Erro ao enviar a mensagem. Tente novamente mais tarde.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div style={{ padding: "4rem 8rem", flex: 1, textAlign: "center" }}>
      <h1 style={{ fontSize: "2.8rem", marginBottom: "0.5rem" }}>
        {t.contact.title}
      </h1>
      <p style={{ color: "#a0a0a5", marginBottom: "2.5rem" }}>
        {t.contact.sub}
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
          textAlign: "left",
        }}
      >
        <div>
          <label
            style={{ display: "block", color: "#fff", marginBottom: "0.4rem" }}
          >
            {t.contact.email}
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder={t.contact.phEmail}
            style={inputStyle}
            required
          />
        </div>
        <div>
          <label
            style={{ display: "block", color: "#fff", marginBottom: "0.4rem" }}
          >
            {t.contact.phone}
          </label>
          <input
            type="text"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder={t.contact.phPhone}
            style={inputStyle}
          />
        </div>
        <div>
          <label
            style={{ display: "block", color: "#fff", marginBottom: "0.4rem" }}
          >
            {t.contact.msg}
          </label>
          <textarea
            rows="4"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder={t.contact.phMsg}
            style={inputStyle}
            required
          />
        </div>
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <GreenButton
            text={loading ? "Enviando..." : t.contact.btnSend}
            type="submit"
            disabled={loading}
          />
        </div>
        {status && (
          <p
            style={{
              color:
                status.includes("sucesso") || status.includes("success")
                  ? "#489700"
                  : "#ff4d4d",
              textAlign: "center",
              marginTop: "1rem",
            }}
          >
            {status}
          </p>
        )}
      </form>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
          marginTop: "4rem",
        }}
      >
        <a
          href="https://linkedin.com/in/danielbony"
          target="_blank"
          rel="noreferrer"
          style={bigIconStyle}
        >
          <FaLinkedin size={40} />
        </a>
        <a
          href="https://instagram.com/danielbony_"
          target="_blank"
          rel="noreferrer"
          style={bigIconStyle}
        >
          <FaInstagram size={40} />
        </a>
        <a
          href="https://github.com/danielbcg"
          target="_blank"
          rel="noreferrer"
          style={bigIconStyle}
        >
          <FaGithub size={40} />
        </a>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.8rem",
  borderRadius: "6px",
  border: "1px solid #333",
  backgroundColor: "#f5f5f5",
  color: "#000",
  fontFamily: "monospace",
};
const bigIconStyle = { color: "#666" };
