import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const translations = {
  pt: {
    nav: {
      about: "Sobre Mim",
      projects: "Projetos",
      exp: "Experiências",
      contact: "Contato",
    },
    about: {
      title: "Sobre Mim",
      name: "Daniel Bony",
      desc: "Estudante de Engenharia de Software na PUC Minas, focado em desenvolvimento web moderno, arquitetura backend com Java/Spring Boot e React.",
      btnLang: "English",
    },
    projects: {
      title: "Projetos",
      sub: "Projetos Pessoais & Acadêmicos",
      btnView: "Ver no GitHub",
      descLabel: "Descrição:",
      periodLabel: "Período:",
      techLabel: "Tech Stack:",
      items: [
        {
          id: 1,
          company: "BONYWEAR (E-Commerce de Roupas)",
          desc: "Aplicação web completa com arquitetura robusta. Conta com autenticação e autorização segura via Spring Security e RBAC (Role-Based Access Control) para múltiplos perfis de acesso, além de controle de produtos e pedidos.",
          period: "2026",
          role: "Java + Spring Boot | React | Spring Security",
          githubUrl: "https://github.com/danielbcg/loja-de-roupas-api-daniel",
        },
        {
          id: 2,
          company: "CanDonate",
          desc: "Plataforma web acadêmica focada em facilitar o processo de doações, integrando APIs JavaScript no front-end com camadas de serviço em Java e Spring Boot no back-end.",
          period: "2025",
          role: "Java | Spring Boot | JavaScript | HTML/CSS",
          githubUrl:
            "https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-2-ti2-3687100-candonate",
        },
      ],
    },
    exp: {
      title: "Experiências",
      sub: "Vivência Acadêmica & Projetos Práticos",
      btnDetails: "Detalhes Técnicos",
      items: [
        {
          id: 1,
          title: "BONYWEAR - E-Commerce Fullstack (Spring Boot & React)",
          period: "2026 - Presente",
          desc: "Desenvolvimento autônomo com foco em arquitetura backend com Java / Spring Boot e frontend com React. Implementação de controle de acesso refinado (RBAC), manipulação de banco de dados e APIs RESTful.",
          githubUrl: "https://github.com/danielbcg/loja-de-roupas-api-daniel",
        },
        {
          id: 2,
          title: "CanDonate & Projetos Acadêmicos (PUC Minas)",
          period: "2025 - Presente",
          desc: "Desenvolvimento de software em equipe utilizando metodologias ágeis, modelagem UML, integração de APIs REST e versionamento com Git/GitHub dentro da Engenharia de Software.",
          githubUrl:
            "https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-2-ti2-3687100-candonate",
        },
      ],
    },
    contact: {
      title: "Contato",
      sub: "Resumo Básico",
      email: "Email *",
      phone: "Telefone",
      msg: "Mensagem *",
      phEmail: "Escreva seu E-Mail",
      phPhone: "Escreva seu Telefone",
      phMsg: "Escreva uma mensagem:",
      btnSend: "Enviar",
      successMsg: "Mensagem enviada com sucesso!",
      errMsg: "Preencha os campos obrigatórios!",
    },
  },
  en: {
    nav: {
      about: "About Me",
      projects: "Projects",
      exp: "Experience",
      contact: "Contact",
    },
    about: {
      title: "About Me",
      name: "Daniel Bony",
      desc: "Software Engineering student at PUC Minas, focused on modern web development, backend architecture with Java/Spring Boot and React.",
      btnLang: "Português",
    },
    projects: {
      title: "Projects",
      sub: "Personal & Academic Projects",
      btnView: "View on GitHub",
      descLabel: "Description:",
      periodLabel: "Period:",
      techLabel: "Tech Stack:",
      items: [
        {
          id: 1,
          company: "BONYWEAR (Clothing E-Commerce)",
          desc: "Complete web application with robust architecture. Features secure authentication and authorization via Spring Security and RBAC (Role-Based Access Control) for multiple access roles, along with product and order management.",
          period: "2026",
          role: "Java + Spring Boot | React | Spring Security",
          githubUrl: "https://github.com/danielbcg/loja-de-roupas-api-daniel",
        },
        {
          id: 2,
          company: "CanDonate",
          desc: "Academic web platform focused on facilitating the donation process, integrating JavaScript APIs on the front-end with Java and Spring Boot service layers on the back-end.",
          period: "2025",
          role: "Java | Spring Boot | JavaScript | HTML/CSS",
          githubUrl:
            "https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-2-ti2-3687100-candonate",
        },
      ],
    },
    exp: {
      title: "Experience",
      sub: "Academic Experience & Practical Projects",
      btnDetails: "Technical Details",
      items: [
        {
          id: 1,
          title: "BONYWEAR - Fullstack E-Commerce (Spring Boot & React)",
          period: "2025 - Present",
          desc: "Autonomous development focused on backend architecture with Java / Spring Boot and React frontend. Implementation of fine-grained access control (RBAC), database management, and RESTful APIs.",
          githubUrl: "https://github.com/danielbcg/loja-de-roupas-api-daniel",
        },
        {
          id: 2,
          title: "CanDonate & Academic Projects (PUC Minas)",
          period: "2024 - Present",
          desc: "Team software development using agile methodologies, UML modeling, REST API integration, and version control with Git/GitHub within Software Engineering.",
          githubUrl:
            "https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-2-ti2-3687100-candonate",
        },
      ],
    },
    contact: {
      title: "Contact",
      sub: "Basic Summary",
      email: "Email *",
      phone: "Phone",
      msg: "Message *",
      phEmail: "Enter your E-Mail",
      phPhone: "Enter your Phone",
      phMsg: "Write a message:",
      btnSend: "Send",
      successMsg: "Message sent successfully!",
      errMsg: "Please fill in the required fields!",
    },
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("pt");
  const toggleLang = () => setLang((prev) => (prev === "pt" ? "en" : "pt"));

  return (
    <LanguageContext.Provider
      value={{ lang, toggleLang, t: translations[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
