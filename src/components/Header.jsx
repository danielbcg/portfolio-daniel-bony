import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa6";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const { t } = useLanguage();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.2rem 4rem",
        backgroundColor: "#141416",
        borderBottom: "1px solid #222",
      }}
    >
      <nav style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <ul
          style={{
            display: "flex",
            gap: "3rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <Link to="/" style={linkStyle}>
              {t.nav.about}
            </Link>
          </li>
          <li>
            <Link to="/projetos" style={linkStyle}>
              {t.nav.projects}
            </Link>
          </li>
          <li>
            <Link to="/experiencias" style={linkStyle}>
              {t.nav.exp}
            </Link>
          </li>
          <li>
            <Link to="/contato" style={linkStyle}>
              {t.nav.contact}
            </Link>
          </li>
        </ul>
      </nav>

      <div style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}>
        <a
          href="https://linkedin.com/in/danielbony"
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href="https://instagram.com/danielbony_"
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
        >
          <FaInstagram size={22} />
        </a>
        <a
          href="https://github.com/danielbcg"
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
        >
          <FaGithub size={22} />
        </a>
      </div>
    </header>
  );
}

const linkStyle = {
  color: "#b0b0b0",
  textDecoration: "none",
  fontSize: "0.95rem",
  fontFamily: "monospace",
};
const iconStyle = { color: "#b0b0b0" };
