# 📖 Guia de Preenchimento - Portfólio DSM

Esta é um guia passo a passo para preencher corretamente cada seção do seu portfólio.

## 1️⃣ IDENTIDADE VISUAL PRÓPRIA

Sua identidade visual é definida principalmente pelas **cores** que você escolher.

### Como Personalizar:

**No arquivo `data.json`, seção `student.colors`:**

```json
"colors": {
  "primary": "#6366f1",      // Cor principal (usada em títulos, botões)
  "secondary": "#ec4899",    // Cor secundária (destaques)
  "accent": "#f59e0b"        // Cor de destaque (ênfase)
}
```

### Combinações de Cores Recomendadas:

**Opção 1 - Profissional Moderno**
```json
"colors": {
  "primary": "#1f2937",      // Cinza escuro
  "secondary": "#3b82f6",    // Azul
  "accent": "#fbbf24"        // Ouro
}
```

**Opção 2 - Tech Vibrante**
```json
"colors": {
  "primary": "#7c3aed",      // Roxo
  "secondary": "#06b6d4",    // Ciano
  "accent": "#10b981"        // Verde
}
```

**Opção 3 - Startup Criativa**
```json
"colors": {
  "primary": "#dc2626",      // Vermelho
  "secondary": "#f59e0b",    // Âmbar
  "accent": "#8b5cf6"        // Roxo claro
}
```

---

## 2️⃣ FOTO DO ALUNO

### Requisitos:
- ✅ Foto quadrada (proporção 1:1)
- ✅ Resolução mínima: 150x150 pixels
- ✅ Resolução recomendada: 300x300 pixels
- ✅ Formatos aceitos: JPG, PNG, WebP
- ✅ Tamanho máximo: 500KB

### Onde Colocar:
```
portfolio/
└── assets/
    └── images/
        └── foto-perfil.jpg  ← Aqui!
```

### No `data.json`:
```json
"photo": "assets/images/foto-perfil.jpg"
```

### Dicas:
- Use uma foto limpa e profissional
- Evite fotos muito grandes que deixem o site lento
- Se não tiver foto, deixe em branco e será usada uma foto padrão

---

## 3️⃣ NOME COMPLETO

Seu nome completo será exibido em grande destaque na página principal.

```json
"name": "João da Silva Santos"
```

---

## 4️⃣ LINK PARA GITHUB

Link para seu perfil no GitHub.

```json
"github": "https://github.com/joaodasilva"
```

**Não sabe o seu link?**
- Acesse: https://github.com
- Faça login
- Copie a URL do seu perfil

---

## 5️⃣ DADOS DO CURSO

### Informações Necessárias:

```json
"course": {
  "college": "Faculdade XYZ",
  "name": "Desenvolvimento de Sistemas Multiplataforma",
  "startDate": "2024-01",              // Formato: YYYY-MM (Janeiro de 2024)
  "expectedEndDate": "2026-12",        // Formato: YYYY-MM (Dezembro de 2026)
  "currentSemester": 3                 // Qual semestre você está agora (1-10)
}
```

### Dicas:
- **Nome da Faculdade**: Coloque o nome completo ou sigla conhecida
- **Datas**: Use sempre o formato YYYY-MM (ano-mês)
- **Semestre Atual**: Deve estar entre 1 e 10

---

## 6️⃣ DADOS SOBRE TRABALHOS REALIZADOS

### Estrutura de cada trabalho:

```json
{
  "id": 1,
  "company": "Empresa ABC Ltda",
  "position": "Desenvolvedor Jr",
  "startDate": "2024-06",              // Início
  "endDate": "2024-10",                // Fim (ou "Atual" se ainda trabalha lá)
  "description": "Desenvolvimento de aplicações web usando React e Node.js. Participei da manutenção do sistema legacy e implementação de novas funcionalidades.",
  "isCurrent": false                   // true se ainda está lá, false se saiu
}
```

### Se Ainda Está Trabalhando Lá:

```json
{
  "id": 1,
  "company": "Empresa ABC Ltda",
  "position": "Desenvolvedor Jr",
  "startDate": "2024-06",
  "endDate": "Atual",                  // Escreva "Atual"
  "description": "...",
  "isCurrent": true                    // true!
}
```

### Dicas na Descrição:
- Descreva suas principais atividades
- Mencione tecnologias usadas
- Seja conciso (2-3 linhas máximo)
- Exemplos:
  - "Desenvolvimento de APIs REST com Node.js e Express para e-commerce"
  - "Manutenção e otimização de banco de dados PostgreSQL"
  - "Criação de componentes reutilizáveis em React"

### Se Não Tem Experiência Profissional:
Deixe o array vazio:
```json
"workExperience": []
```

---

## 7️⃣ CURSOS DE EXTENSÃO

### Estrutura de cada curso:

```json
{
  "id": 1,
  "name": "JavaScript Avançado",
  "institution": "Udemy / Alura / Rocketseat",
  "location": "Online / Presencial",
  "hours": 40,                         // Número de horas
  "startDate": "2024-01-15",           // Formato: YYYY-MM-DD
  "endDate": "2024-02-15",             // Formato: YYYY-MM-DD
  "certificate": "https://link.com"    // Link do certificado (opcional)
}
```

### Exemplos:

**Curso Online**
```json
{
  "id": 1,
  "name": "React - Completo",
  "institution": "Udemy",
  "location": "Online",
  "hours": 40,
  "startDate": "2024-03-01",
  "endDate": "2024-04-30",
  "certificate": "https://udemy.com/certificate/xxx"
}
```

**Workshop Presencial**
```json
{
  "id": 2,
  "name": "Git e GitHub - Boas Práticas",
  "institution": "Faculdade XYZ",
  "location": "São Paulo, SP",
  "hours": 8,
  "startDate": "2024-05-10",
  "endDate": "2024-05-10",
  "certificate": ""                    // Deixar vazio se não houver
}
```

### Se Não tem Cursos:
```json
"extensionCourses": []
```

---

## 8️⃣ LÍNGUAS

### Estrutura:

```json
{
  "id": 1,
  "name": "Português",
  "level": "Nativo"
}
```

### Níveis Recomendados:
- **Nativo**: Sua língua materna
- **Fluente**: Fala com total fluência
- **Avançado**: Consegue trabalhar normalmente
- **Intermediário**: Consegue se comunicar bem
- **Básico**: Entende e consegue comunicação simples
- **Beginner**: Iniciante

### Exemplo Completo:

```json
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
]
```

---

## 9️⃣ PORTFÓLIO DE PROJETOS - O PRINCIPAL!

### a) Card para Acessar Projetos

Os cards são criados automaticamente na página. Cada project no `data.json` vira um card.

### b) Tela de Apresentação para Cada Projeto

Quando você clica em um projeto, abre um modal com as informações detalhadas.

### c) ESTRUTURA COMPLETA DE UM PROJETO:

```json
{
  "id": 1,
  "title": "Sistema de Gestão de Tarefas",
  "description": "Aplicação web para gerenciar tarefas pessoais com autenticação de usuários e histórico de atividades.",
  "semester": 1,
  "technologies": ["HTML", "CSS", "JavaScript", "LocalStorage"],
  "githubLink": "https://github.com/usuario/gerenciador-tarefas",
  "liveLink": "https://tarefas.netlify.app",
  "images": [
    "assets/images/tarefas-homepage.png",
    "assets/images/tarefas-dashboard.png",
    "assets/images/tarefas-mobile.png"
  ],
  "participation": "Projeto individual desenvolvido no primeiro semestre. Criei a interface completa usando HTML5 semântico e CSS3 com Flexbox. Implementei funcionalidades de adicionar, editar e deletar tarefas usando JavaScript vanilla. Os dados são persistidos no LocalStorage do navegador.",
  "myRoles": ["Frontend Developer", "UI Designer"],
  "myTechnologies": ["HTML5", "CSS3", "JavaScript ES6", "LocalStorage API", "Responsive Design"]
}
```

### i) NOME DO PROJETO

```json
"title": "Nome do Projeto"
```

**Exemplo:**
- ✅ "Sistema de Gestão de Tarefas"
- ✅ "E-commerce de Eletrônicos"
- ✅ "Aplicativo de Clima"
- ❌ "Projeto 1" (muito genérico!)

### ii) DESCRIÇÃO DO PROJETO

```json
"description": "Descrição breve do projeto (uma ou duas linhas)",
"technologies": ["HTML", "CSS", "JavaScript"]
```

**Exemplo:**
```json
"description": "Plataforma de vendas online com carrinho de compras, sistema de pagamento integrado e painel administrativo.",
"technologies": ["React", "Node.js", "MongoDB", "Stripe API"]
```

### iii) LINK PARA GITHUB

```json
"githubLink": "https://github.com/usuario/nome-do-repositorio"
```

**Como encontrar:**
1. Vá para https://github.com/seu-usuario
2. Clique no repositório do projeto
3. Copie a URL

### iv) SCREENSHOTS DO PROJETO

```json
"images": [
  "assets/images/projeto-tela1.png",
  "assets/images/projeto-tela2.png",
  "assets/images/projeto-tela3.png"
]
```

**Requisitos:**
- Mínimo 1 imagem, máximo recomendado: 5 imagens
- Resolução: 1024x600 ou similar
- Formatos: PNG, JPG
- Tamanho máximo: 500KB por imagem

**Como tirar screenshots:**
- Windows: Use Snip & Sketch (Win+Shift+S)
- Mac: Command+Shift+4
- Linux: Use Print Screen
- Online: https://screenshot.cloud

### v) DESCRIÇÃO DA PARTICIPAÇÃO

```json
"participation": "Descrição de sua participação e tecnologias utilizadas"
```

**Importante:** Descreva especificamente o que VOCÊ fez!

**Exemplo Bom:**
```json
"participation": "Projeto em grupo para a disciplina de Programação Web. Fui responsável pela implementação da interface do usuário usando React Hooks e Context API. Criei componentes reutilizáveis, implementei roteamento com React Router e integrei a página com a API REST fornecida pelos colegas."
```

**Exemplo Ruim:**
```json
"participation": "Fizemos um projeto de vendas com React."
```

### Funções (myRoles)

```json
"myRoles": [
  "Frontend Developer",
  "UI Designer",
  "Project Manager"
]
```

**Existem várias possibilidades:**

**Frontend:**
- Frontend Developer
- UI/UX Designer
- CSS Specialist
- JavaScript Developer

**Backend:**
- Backend Developer
- API Developer
- Database Administrator
- DevOps Engineer

**Full Stack:**
- Full Stack Developer
- Full Stack Engineer

**Gerenciamento:**
- Project Manager
- Team Lead
- Tech Lead

**Teste:**
- QA Engineer
- Test Automation Engineer

### Tecnologias Utilizadas (myTechnologies)

```json
"myTechnologies": [
  "React",
  "JavaScript ES6",
  "CSS3",
  "API REST",
  "MongoDB"
]
```

**Importante:** Liste APENAS as tecnologias que você realmente usou!

**Exemplo Completo:**
```json
"myTechnologies": [
  "HTML5",
  "CSS3 (Grid, Flexbox)",
  "JavaScript ES6+",
  "React 18",
  "Hooks",
  "Context API",
  "Axios",
  "JSON",
  "REST API",
  "Git/GitHub"
]
```

### EXEMPLO COMPLETO DE PROJETO (COPIAR E ADAPTAR):

```json
{
  "id": 1,
  "title": "Loja Virtual de Eletrônicos",
  "description": "E-commerce responsivo com catálogo de produtos, carrinho de compras, checkout seguro e sistema de avaliações.",
  "semester": 4,
  "technologies": [
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Stripe",
    "Bootstrap"
  ],
  "githubLink": "https://github.com/m143bruno/loja-eletronica",
  "liveLink": "https://loja-eletronica.vercel.app",
  "images": [
    "assets/images/loja-home.png",
    "assets/images/loja-produto.png",
    "assets/images/loja-checkout.png"
  ],
  "participation": "Desenvolvi o frontend completo da aplicação usando React, implementando componentes para catálogo de produtos, carrinho de compras e página de checkout. No backend, criei APIs em Node.js com Express para gerenciar produtos e pedidos. Integrei o sistema de pagamento com a API do Stripe. Implementei autenticação JWT e validações de dados.",
  "myRoles": [
    "Full Stack Developer",
    "Frontend Developer"
  ],
  "myTechnologies": [
    "React 18",
    "React Router",
    "Context API",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Stripe API",
    "JWT Authentication",
    "Axios",
    "Bootstrap",
    "CSS3",
    "Git/GitHub",
    "Postman",
    "Vercel Deploy"
  ]
}
```

---

## 🔟 HOSPEDAGEM (GitHub Pages)

### Passos Simples:

1. **Crie um repositório vazio** em: https://github.com/new
   - Nome: `seu-usuario.github.io` (exatamente assim!)
   - Exemplo: `joaodasilva.github.io`

2. **Upload dos arquivos**
   - Coloque TODOS os arquivos dentro do repositório
   - Certifique-se de que `index.html` está na raiz

3. **Acesse seu portfólio**
   - URL: `https://seu-usuario.github.io`
   - Pronto! Seu portfólio está online 🎉

## ✅ CHECKLIST FINAL

Antes de enviar para seus professores/recrutadores, verifique:

- [ ] Todas as informações pessoais corretas
- [ ] Foto de perfil carregando
- [ ] Cores personalizadas definidas
- [ ] Links do GitHub funcionando
- [ ] Todos os 5+ projetos adicionados
- [ ] Descrições claras e sem erros de digitação
- [ ] Screenshots dos projetos visíveis
- [ ] Links dos projetos funcionando
- [ ] Informações de experiência/cursos completas
- [ ] Testado em celular (responsivo)
- [ ] Hospedado online (GitHub Pages ou similar)

---

**Parabéns! Seu portfólio está pronto! 🚀**
