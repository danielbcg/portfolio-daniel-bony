export default function GreenButton({ text, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        backgroundColor: "#489700",
        color: "#ffffff",
        border: "none",
        borderRadius: "6px",
        padding: "0.75rem 1.6rem",
        fontSize: "0.95rem",
        fontWeight: "bold",
        fontFamily: "monospace",
        cursor: "pointer",
        boxShadow: "0 0 15px rgba(72, 151, 0, 0.45)",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      {text} &gt;
    </button>
  );
}
