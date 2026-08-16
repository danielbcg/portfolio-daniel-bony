export default function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', background: '#111', color: '#888', marginTop: 'auto' }}>
      <p>&copy; {new Date().getFullYear()} Daniel Bony — Engenharia de Software (PUC Minas)</p>
    </footer>
  );
}