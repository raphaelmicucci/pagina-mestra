# 📋 EXEMPLOS PRÁTICOS COMPLETOS

Este arquivo contém exemplos realistas que você pode copiar e adaptar.

## 📌 EXEMPLO 1: ALUNO SEM EXPERIÊNCIA (1º-2º SEMESTRE)

```json
{
  "student": {
    "name": "Maria Silva Santos",
    "photo": "assets/images/foto-perfil.jpg",
    "github": "https://github.com/mariasilva",
    "email": "maria.silva@example.com",
    "phone": "(11) 98765-4321",
    "bio": "Estudante de Desenvolvimento de Sistemas Multiplataforma apaixonada por web design e programação.",
    "colors": {
      "primary": "#7c3aed",
      "secondary": "#06b6d4",
      "accent": "#10b981"
    }
  },
  "course": {
    "college": "FATEC São Paulo",
    "name": "Desenvolvimento de Sistemas Multiplataforma",
    "startDate": "2024-02",
    "expectedEndDate": "2027-06",
    "currentSemester": 2
  },
  "workExperience": [],
  "extensionCourses": [
    {
      "id": 1,
      "name": "JavaScript Essencial",
      "institution": "Alura",
      "location": "Online",
      "hours": 20,
      "startDate": "2024-01-10",
      "endDate": "2024-02-15",
      "certificate": "https://cursos.alura.com.br/certificate/maria-silva/javascript"
    }
  ],
  "languages": [
    {
      "id": 1,
      "name": "Português",
      "level": "Nativo"
    },
    {
      "id": 2,
      "name": "Inglês",
      "level": "Intermediário"
    }
  ],
  "projects": [
    {
      "id": 1,
      "title": "Calculadora Interativa",
      "description": "Calculadora web funcional com interface moderna e suporte a operações básicas",
      "semester": 1,
      "technologies": ["HTML", "CSS", "JavaScript"],
      "githubLink": "https://github.com/mariasilva/calculadora",
      "liveLink": "https://mariasilva-calculadora.netlify.app",
      "images": [
        "assets/images/calculadora-tela1.png",
        "assets/images/calculadora-tela2.png"
      ],
      "participation": "Projeto individual para a disciplina de Programação Básica. Desenvolvi toda a interface usando HTML5 semântico e CSS3 com Flexbox para garantir responsividade. Implementei todas as operações matemáticas utilizando JavaScript vanilla.",
      "myRoles": ["Frontend Developer"],
      "myTechnologies": ["HTML5", "CSS3", "JavaScript ES6", "Responsive Design"]
    },
    {
      "id": 2,
      "title": "To-Do List com LocalStorage",
      "description": "Gerenciador de tarefas com persistência de dados no navegador",
      "semester": 2,
      "technologies": ["HTML", "CSS", "JavaScript", "LocalStorage"],
      "githubLink": "https://github.com/mariasilva/todo-list",
      "liveLink": "https://mariasilva-todolist.netlify.app",
      "images": [
        "assets/images/todo-tela1.png",
        "assets/images/todo-tela2.png",
        "assets/images/todo-tela3.png"
      ],
      "participation": "Desenvolvi um aplicativo completo onde pude aplicar conceitos de DOM manipulation e LocalStorage. Implementei funções para adicionar, editar, deletar e marcar tarefas como concluídas. Os dados persistem entre sessões do navegador.",
      "myRoles": ["Frontend Developer"],
      "myTechnologies": ["HTML5", "CSS3", "JavaScript ES6", "LocalStorage API", "DOM Manipulation"]
    }
  ],
  "socialLinks": {
    "linkedin": "https://linkedin.com/in/maria-silva-santos",
    "instagram": "https://instagram.com/mariasilva.dev",
    "twitter": "",
    "portfolio": ""
  }
}
```

---

## 📌 EXEMPLO 2: ALUNO COM EXPERIÊNCIA (3º-4º SEMESTRE)

```json
{
  "student": {
    "name": "João Pedro dos Santos",
    "photo": "assets/images/foto-perfil.jpg",
    "github": "https://github.com/joaopedro.dev",
    "email": "joao.pedro@email.com",
    "phone": "(21) 99876-5432",
    "bio": "Desenvolvedor Full Stack em formação. Apaixonado por criar soluções web e mobile. Atualmente estagiário em startup de tecnologia.",
    "colors": {
      "primary": "#1f2937",
      "secondary": "#3b82f6",
      "accent": "#fbbf24"
    }
  },
  "course": {
    "college": "FATEC Rio de Janeiro",
    "name": "Desenvolvimento de Sistemas Multiplataforma",
    "startDate": "2023-08",
    "expectedEndDate": "2026-12",
    "currentSemester": 4
  },
  "workExperience": [
    {
      "id": 1,
      "company": "TechStart Solutions",
      "position": "Desenvolvedor Júnior Estagiário",
      "startDate": "2024-08",
      "endDate": "Atual",
      "description": "Desenvolvimento de aplicações web usando React e Node.js. Participação ativa em code reviews e manutenção de sistema legado. Implementação de novas funcionalidades e correção de bugs em plataforma SaaS.",
      "isCurrent": true
    },
    {
      "id": 2,
      "company": "Freelancer",
      "position": "Desenvolvedor Web Freelancer",
      "startDate": "2024-05",
      "endDate": "2024-08",
      "description": "Desenvolvimento de websites para pequenos negócios. Criação de landing pages responsivas e blogs em WordPress. Consultoria de UX/UI para clientes.",
      "isCurrent": false
    }
  ],
  "extensionCourses": [
    {
      "id": 1,
      "name": "React - Completão Developer",
      "institution": "Udemy",
      "location": "Online",
      "hours": 30,
      "startDate": "2024-03-01",
      "endDate": "2024-04-15",
      "certificate": "https://udemy.com/certificate/react-joao"
    },
    {
      "id": 2,
      "name": "Node.js e Express - API REST",
      "institution": "Rocketseat",
      "location": "Online",
      "hours": 25,
      "startDate": "2024-05-01",
      "endDate": "2024-06-10",
      "certificate": "https://rocketseat.com.br/certificate/node-joao"
    },
    {
      "id": 3,
      "name": "Git e GitHub para Iniciantes",
      "institution": "FATEC RJ",
      "location": "Presencial",
      "hours": 8,
      "startDate": "2024-04-20",
      "endDate": "2024-04-20",
      "certificate": ""
    }
  ],
  "languages": [
    {
      "id": 1,
      "name": "Português",
      "level": "Nativo"
    },
    {
      "id": 2,
      "name": "Inglês",
      "level": "Intermediário"
    },
    {
      "id": 3,
      "name": "Espanhol",
      "level": "Básico"
    }
  ],
  "projects": [
    {
      "id": 1,
      "title": "API de Gerenciamento de Biblioteca",
      "description": "API REST para gerenciar livros, autores e empréstimos com autenticação JWT",
      "semester": 3,
      "technologies": ["Node.js", "Express", "MongoDB", "JWT"],
      "githubLink": "https://github.com/joaopedro.dev/biblioteca-api",
      "liveLink": "",
      "images": [
        "assets/images/biblioteca-api-docs.png",
        "assets/images/biblioteca-postman.png"
      ],
      "participation": "Projeto em grupo para a disciplina de Backend. Fui responsável pela arquitetura da API e implementação do sistema de autenticação. Criei endpoints para CRUD de livros, autores e empréstimos. Implementei validações e tratamento de erros.",
      "myRoles": ["Backend Developer", "Tech Lead"],
      "myTechnologies": ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Postman", "REST API"]
    },
    {
      "id": 2,
      "title": "E-commerce Meu Bairro",
      "description": "Plataforma de vendas online para pequenos comerciantes locais com sistema de pagamento integrado",
      "semester": 4,
      "technologies": ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      "githubLink": "https://github.com/joaopedro.dev/ecommerce-meu-bairro",
      "liveLink": "https://meu-bairro-shop.vercel.app",
      "images": [
        "assets/images/meubairro-home.png",
        "assets/images/meubairro-produto.png",
        "assets/images/meubairro-checkout.png",
        "assets/images/meubairro-admin.png"
      ],
      "participation": "Projeto de conclusão parcial do 4º semestre. Desenvolvi o frontend completo usando React com Redux para gerenciamento de estado. Implementei o backend Em Node.js com Express, criando APIs para produtos, usuários e pedidos. Integrei Stripe para processamento de pagamentos.",
      "myRoles": ["Full Stack Developer", "Frontend Developer", "Backend Developer"],
      "myTechnologies": ["React", "Redux", "React Router", "Axios", "Node.js", "Express", "MongoDB", "Stripe API", "JWT", "Vercel", "Heroku"]
    },
    {
      "id": 3,
      "title": "Dashboard Administrativo",
      "description": "Painel de controle para monitorar vendas e gerenciar produtos do e-commerce",
      "semester": 4,
      "technologies": ["React", "Chart.js", "Tailwind CSS"],
      "githubLink": "https://github.com/joaopedro.dev/dashboard-admin",
      "liveLink": "https://meu-bairro-admin.vercel.app",
      "images": [
        "assets/images/dashboard-vendas.png",
        "assets/images/dashboard-produtos.png"
      ],
      "participation": "Desenvolvi o dashboard administrativo como complemento do e-commerce. Criei gráficos em tempo real com Chart.js e tabelas interativas para gerenciamento de produtos. Utilizei Tailwind CSS para criar uma interface moderna e responsiva.",
      "myRoles": ["Frontend Developer", "UI Designer"],
      "myTechnologies": ["React", "Chart.js", "Tailwind CSS", "Context API", "Responsive Design"]
    },
    {
      "id": 4,
      "title": "Aplicativo de Clima",
      "description": "App mobile que consulta API de clima e mostra previsão em tempo real",
      "semester": 3,
      "technologies": ["React Native", "Expo", "OpenWeatherMap API"],
      "githubLink": "https://github.com/joaopedro.dev/app-clima",
      "liveLink": "",
      "images": [
        "assets/images/clima-app-tela1.png",
        "assets/images/clima-app-tela2.png"
      ],
      "participation": "Projeto para aprender React Native. Criei um aplicativo que consulta a OpenWeatherMap API e exibe a previsão de tempo. Implementei geolocalização para pegar localização do usuário automaticamente.",
      "myRoles": ["Mobile Developer"],
      "myTechnologies": ["React Native", "Expo", "JavaScript", "API Integration", "Geolocation API"]
    }
  ],
  "socialLinks": {
    "linkedin": "https://linkedin.com/in/joao-pedro-santos",
    "instagram": "https://instagram.com/joaopedro.dev",
    "twitter": "https://twitter.com/joaopedro_dev",
    "portfolio": ""
  }
}
```

---

## 📌 EXEMPLO 3: ALUNO AVANÇADO (5º SEMESTRE COM PORTFOLIO COMPLETO)

```json
{
  "student": {
    "name": "Ana Carolina Ferreira Silva",
    "photo": "assets/images/foto-perfil.jpg",
    "github": "https://github.com/anacarolina-dev",
    "email": "ana.ferreira@email.com",
    "phone": "(85) 99888-7777",
    "bio": "Desenvolvedora Full Stack apaixonada por tecnologia, inovação e mentoria. Fundadora do projeto CodeWeekend. Experiência em startups e empresas de tecnologia.",
    "colors": {
      "primary": "#dc2626",
      "secondary": "#f59e0b",
      "accent": "#8b5cf6"
    }
  },
  "course": {
    "college": "FATEC Ceará",
    "name": "Desenvolvimento de Sistemas Multiplataforma",
    "startDate": "2022-08",
    "expectedEndDate": "2025-12",
    "currentSemester": 5
  },
  "workExperience": [
    {
      "id": 1,
      "company": "InnovateTech Solutions",
      "position": "Desenvolvedora Full Stack Pleno",
      "startDate": "2024-01",
      "endDate": "Atual",
      "description": "Desenvolvimento de sistemas web em larga escala. Mentoria de desenvolvedores juniores. Arquitetura e implementação de microserviços com Node.js e Docker. Otimização de performance e implementação de práticas DevOps.",
      "isCurrent": true
    },
    {
      "id": 2,
      "company": "StartUp Ventures",
      "position": "Desenvolvedora Full Stack Júnior",
      "startDate": "2023-03",
      "endDate": "2023-12",
      "description": "Desenvolvimento de MVP em React e Node.js. Implementação de autenticação OAuth2. Deployment em AWS. Participação em sprints agile e daily standups.",
      "isCurrent": false
    },
    {
      "id": 3,
      "company": "Agência Digital MKT360",
      "position": "Desenvolvedora Frontend",
      "startDate": "2022-09",
      "endDate": "2023-02",
      "description": "Desenvolvimento de websites em WordPress e Vue.js. Otimização de SEO. Integração com Google Analytics e sistemas de CRM.",
      "isCurrent": false
    }
  ],
  "extensionCourses": [
    {
      "id": 1,
      "name": "AWS Solutions Architect Associate",
      "institution": "AWS",
      "location": "Online",
      "hours": 40,
      "startDate": "2024-06-01",
      "endDate": "2024-07-31",
      "certificate": "https://aws.amazon.com/certification/ana-carolina"
    },
    {
      "id": 2,
      "name": "Docker e Kubernetes para Desenvolvimento",
      "institution": "Udemy",
      "location": "Online",
      "hours": 32,
      "startDate": "2024-04-15",
      "endDate": "2024-05-30",
      "certificate": "https://udemy.com/certificate/docker-k8s-ana"
    },
    {
      "id": 3,
      "name": "React Advanced Patterns",
      "institution": "EggHead.io",
      "location": "Online",
      "hours": 20,
      "startDate": "2024-02-01",
      "endDate": "2024-03-15",
      "certificate": ""
    },
    {
      "id": 4,
      "name": "MongoDB Advanced Course",
      "institution": "MongoDB University",
      "location": "Online",
      "hours": 24,
      "startDate": "2023-11-01",
      "endDate": "2024-01-15",
      "certificate": "https://university.mongodb.com/certificate/ana"
    }
  ],
  "languages": [
    {
      "id": 1,
      "name": "Português",
      "level": "Nativo"
    },
    {
      "id": 2,
      "name": "Inglês",
      "level": "Fluente"
    },
    {
      "id": 3,
      "name": "Espanhol",
      "level": "Intermediário"
    }
  ],
  "projects": [
    {
      "id": 1,
      "title": "Calculadora Avançada com Histórico",
      "description": "Calculadora web com suporte a expressões complexas e histórico de operações",
      "semester": 1,
      "technologies": ["HTML", "CSS", "JavaScript"],
      "githubLink": "https://github.com/anacarolina-dev/calculadora-avancada",
      "liveLink": "https://ana-calculadora.netlify.app",
      "images": [
        "assets/images/calc-tela1.png",
        "assets/images/calc-tela2.png"
      ],
      "participation": "Primeiro projeto do curso. Criei uma calculadora que suporta operações matemáticas complexas e mantém histórico de cálculos. Implementei validação de entrada e tratamento de erros.",
      "myRoles": ["Frontend Developer"],
      "myTechnologies": ["HTML5", "CSS3", "JavaScript ES6", "DOM API", "LocalStorage"]
    },
    {
      "id": 2,
      "title": "Blog Pessoal com CMS",
      "description": "Blog dinâmico com sistema de gerenciamento de posts, comentários e categorias",
      "semester": 2,
      "technologies": ["HTML", "CSS", "JavaScript", "JSON"],
      "githubLink": "https://github.com/anacarolina-dev/blog-pessoal",
      "liveLink": "https://ana-blog.netlify.app",
      "images": [
        "assets/images/blog-home.png",
        "assets/images/blog-post.png",
        "assets/images/blog-admin.png"
      ],
      "participation": "Desenvolvi um blog com interface administratsimples. Os dados são armazenados em JSON e manipulados com JavaScript. Implementei sistema de categorias, busca e filtros.",
      "myRoles": ["Frontend Developer", "Full Stack Developer"],
      "myTechnologies": ["HTML5", "CSS3", "JavaScript ES6", "JSON", "DOM Manipulation"]
    },
    {
      "id": 3,
      "title": "Rede Social CodeWeekend",
      "description": "Plataforma social para conectar desenvolvedores com foco em eventos e networking",
      "semester": 3,
      "technologies": ["React", "Node.js", "PostgreSQL", "Socket.io"],
      "githubLink": "https://github.com/anacarolina-dev/codeweekend",
      "liveLink": "https://codeweekend.io",
      "images": [
        "assets/images/codeweekend-feed.png",
        "assets/images/codeweekend-eventos.png",
        "assets/images/codeweekend-perfil.png",
        "assets/images/codeweekend-chat.png"
      ],
      "participation": "Projeto de conclusão do 3º semestre desenvolvido em grupo. Fui tech lead e desenvolvedora full stack. Arquiteturei o banco de dados em PostgreSQL, implementei APIs RESTful em Node.js/Express, desenvolvi o frontend em React com Redux e integrei Socket.io para chat em tempo real.",
      "myRoles": ["Full Stack Developer", "Tech Lead", "Database Designer"],
      "myTechnologies": ["React", "Redux", "React Router", "Node.js", "Express", "PostgreSQL", "Socket.io", "JWT", "Postman", "Docker"]
    },
    {
      "id": 4,
      "title": "Sistema de Ponto Eletrônico",
      "description": "Sistema empresarial para controle de ponto com mobile e dashboard administrativo",
      "semester": 4,
      "technologies": ["React", "React Native", "Node.js", "MongoDB", "AWS"],
      "githubLink": "https://github.com/anacarolina-dev/sistema-ponto",
      "liveLink": "https://sistema-ponto.invertech.ai",
      "images": [
        "assets/images/ponto-web-tela1.png",
        "assets/images/ponto-web-tela2.png",
        "assets/images/ponto-mobile-tela1.png"
      ],
      "participation": "Projeto em parceria com empresa real. Desenvolvi tanto a versão web quanto mobile do sistema. Criei APIs para registro de ponto com geolocalização, dashboard para visualización de dados e relatórios automatizados. Deploy em AWS com CI/CD.",
      "myRoles": ["Full Stack Developer", "Mobile Developer", "DevOps Engineer"],
      "myTechnologies": ["React", "React Native", "Node.js", "MongoDB", "Geolocation API", "Chart.js", "AWS EC2", "Docker", "GitHub Actions", "CI/CD"]
    },
    {
      "id": 5,
      "title": "Plataforma de Cursos Online",
      "description": "Plataforma SaaS de educação online com streaming de vídeo, quizzes e certificados",
      "semester": 5,
      "technologies": ["React", "Node.js", "MongoDB", "Stripe", "AWS S3"],
      "githubLink": "https://github.com/anacarolina-dev/edu-platform",
      "liveLink": "https://eduplatform.io",
      "images": [
        "assets/images/edu-dashboard.png",
        "assets/images/edu-aula.png",
        "assets/images/edu-quiz.png",
        "assets/images/edu-admin.png"
      ],
      "participation": "Projeto atual na empresa. Desenvolvi a plataforma de cursos com suporte a vídeo streaming, quizzes interativos, certificações e sistema de pagamento integrado. Implementei microserviços com Docker para escalabilidade. Otimizei performance com implementação de cache e CDN.",
      "myRoles": ["Full Stack Developer", "Tech Lead", "Performance Engineer"],
      "myTechnologies": [
        "React 18",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Stripe API",
        "AWS S3",
        "CloudFront",
        "Docker",
        "Kubernetes",
        "Redis",
        "Nginx",
        "JWT",
        "OAuth2",
        "WebSocket"
      ]
    }
  ],
  "socialLinks": {
    "linkedin": "https://linkedin.com/in/ana-carolina-ferreira",
    "instagram": "https://instagram.com/anacarolina.dev",
    "twitter": "https://twitter.com/ana_dev",
    "portfolio": "https://ana-carolina.dev"
  }
}
```

---

## 📌 DICAS DE CADA EXEMPLO

### Exemplo 1 (Iniciante):
- ❌ Sem experiência profissional (normal!)
- ✅ Apenas cursos de extensão
- ✅ Projetos simples mas bem documentados
- ✅ 1-2 projetos é suficiente

### Exemplo 2 (Intermediário):
- ✅ Experiência profissional relevante
- ✅ Estágio + freelancer
- ✅ Vários cursos de extensão
- ✅ 3-4 projetos bem variados
- ✅ Múltiplas tecnologias

### Exemplo 3 (Avançado):
- ✅ Experiência profissional sólida
- ✅ Crescimento de carreira (Junior → Pleno)
- ✅ Múltiplos cursos e certificações
- ✅ Todos os 5 projetos de qualidade
- ✅ Tecnologias modernas e cloud

---

## 📊 COMPARAÇÃO

| Aspecto | Exemplo 1 | Exemplo 2 | Exemplo 3 |
|---------|----------|----------|----------|
| **Projetos** | 2 | 4 | 5 |
| **Experiência** | Nenhuma | Sim | Sim (avançada) |
| **Tecnologias** | Básico | Intermediário | Avançado |
| **Bio** | Simples | Descritiva | Detalhada |
| **Semestre** | 1-2 | 3-4 | 5 |

---

## 🎯 QUAL ESCOLHER?

- **Você está no 1º-2º semestre?** → Use Exemplo 1
- **Você está no 3º-4º semestre?** → Use Exemplo 2
- **Você está no 5º semestre?** → Use Exemplo 3

**Mas lembre-se:** Adapte para SUA realidade! Não copie exatamente. Use como inspiração e personalize com seus dados reais. 🚀

---

Boa sorte com seu portfólio! 👩‍💻👨‍💻
