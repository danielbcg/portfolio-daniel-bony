import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', background: '#1a1a1a', color: '#fff' }}>
      <h2>Daniel Bony</h2>
      <nav>
        <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
          <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Sobre Mim</Link></li>
          <li><Link to="/projetos" style={{ color: '#fff', textDecoration: 'none' }}>Projetos</Link></li>
          <li><Link to="/experiencias" style={{ color: '#fff', textDecoration: 'none' }}>Experiências</Link></li>
          <li><Link to="/contato" style={{ color: '#fff', textDecoration: 'none' }}>Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}