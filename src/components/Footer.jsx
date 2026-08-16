export default function Footer() {
  return (
    <footer style={
        { textAlign: 'center',
        padding: '1.5rem', 
        background: '#111', 
        color: '#888', 
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
        alignItems: 'center'
    }}>
      <p style={{ margin: 0 }}>
        &copy; {new Date().getFullYear()} Daniel Bony — Engenharia de Software (PUC Minas)
      </p>

      <div style={{ display: 'flex', gap: '1.2rem' }}>
        <a 
          href="https://github.com/danielbcg" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: '#fff', textDecoration: 'none' }}
        >
          GitHub
        </a>
        <a 
          href="https://linkedin.com/in/danielbony" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: '#0077b5', textDecoration: 'none' }}
        >
          LinkedIn
        </a>
        <a 
          href="https://instagram.com/danielbony_" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: '#e1306c', textDecoration: 'none' }}
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}