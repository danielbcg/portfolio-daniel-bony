import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Sobre Mim</h1>
      <p>Estudante de Engenharia de Software na PUC Minas.</p>
    </div>
  );
}

function Projects() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Projetos</h1>
      <p>Estrutura para a linha do tempo de projetos.</p>
    </div>
  );
}

function Experience() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Experiências</h1>
      <p>Espaço reservado para histórico de experiências e estágios.</p>
    </div>
  );
}

function Contact() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Contato</h1>
      <p>Formulário e redes sociais.</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/experiencias" element={<Experience />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}