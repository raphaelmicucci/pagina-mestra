# 📚 Portfólio de Projetos - DSM

Um template moderno e responsivo de portfólio web para apresentar seus projetos dos 5 primeiros semestres do curso de Desenvolvimento de Sistemas Multiplataforma.

## 📋 Estrutura do Projeto

```
portfolio/
├── index.html                 # Página principal
├── data.json                  # Arquivo de dados (preencha aqui!)
├── README.md                  # Este arquivo
├── assets/
│   ├── css/
│   │   └── style.css         # Estilos CSS
│   ├── js/
│   │   └── script.js         # Lógica JavaScript
│   └── images/               # Pasta para suas imagens
│       ├── foto-perfil.jpg   # Sua foto (150x150)
│       ├── projeto1-screenshot1.png
│       ├── projeto1-screenshot2.png
│       └── ...
└── projects/                  # Pasta para arquivos dos projetos (opcional)
```

## 🚀 Como Usar

### 1. **Preencha o arquivo `data.json`**

Este é o arquivo principal onde você adicionará todas as informações do seu portfólio. As seções são:

#### a) **Informações Pessoais** (`student`)
```json
"student": {
  "name": "Seu Nome Completo",
  "photo": "assets/images/foto-perfil.jpg",
  "github": "https://github.com/seuusuario",
  "email": "seu.email@example.com",
  "phone": "(XX) XXXXX-XXXX",
  "bio": "Breve descrição sobre você",
  "colors": {
    "primary": "#6366f1",      // Cor principal
    "secondary": "#ec4899",    // Cor secundária
    "accent": "#f59e0b"        // Cor de destaque
  }
}
```

#### b) **Informações do Curso** (`course`)
```json
"course": {
  "college": "Nome da Faculdade",
  "name": "Desenvolvimento de Sistemas Multiplataforma",
  "startDate": "2024-01",        // Formato: YYYY-MM
  "expectedEndDate": "2026-12",  // Formato: YYYY-MM
  "currentSemester": 3
}
```

#### c) **Experiência Profissional** (`workExperience`)
```json
"workExperience": [
  {
    "id": 1,
    "company": "Nome da Empresa",
    "position": "Cargo/Função",
    "startDate": "2024-01",
    "endDate": "Atual",           // ou data no formato YYYY-MM
    "description": "Descrição das atividades...",
    "isCurrent": true             // true se ainda está trabalhando lá
  }
]
```

#### d) **Cursos de Extensão** (`extensionCourses`)
```json
"extensionCourses": [
  {
    "id": 1,
    "name": "Nome do Curso",
    "institution": "Instituição",
    "location": "Local",
    "hours": 40,
    "startDate": "2024-01-15",
    "endDate": "2024-02-15",
    "certificate": "https://link-do-certificado.com"
  }
]
```

#### e) **Línguas** (`languages`)
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
    "level": "Intermediário"  // Nativo, Fluente, Intermediário, Básico
  }
]
```

#### f) **Projetos** (`projects`) - O MAIS IMPORTANTE!
```json
"projects": [
  {
    "id": 1,
    "title": "Nome do Projeto",
    "description": "Descrição breve (uma ou duas linhas)",
    "semester": 1,                // Qual semestre foi realizado
    "technologies": [
      "HTML", "CSS", "JavaScript" // Tecnologias usadas no projeto
    ],
    "githubLink": "https://github.com/usuario/projeto1",
    "liveLink": "",               // Link para o projeto online (opcional)
    "images": [
      "assets/images/projeto1-screenshot1.png",
      "assets/images/projeto1-screenshot2.png",
      "assets/images/projeto1-screenshot3.png"
    ],
    "participation": "Descrição detalhada da sua participação no projeto...",
    "myRoles": [
      "Frontend Developer",
      "UI/UX Designer"
    ],
    "myTechnologies": [
      "HTML5",
      "CSS3",
      "JavaScript ES6",
      "Responsive Design"
    ]
  }
]
```

#### g) **Links Sociais** (`socialLinks`)
```json
"socialLinks": {
  "linkedin": "https://linkedin.com/in/seuusuario",
  "instagram": "https://instagram.com/seuusuario",
  "twitter": "https://twitter.com/seuusuario",
  "portfolio": "https://seuusuario.com"
}
```

### 2. **Adicione suas Imagens**

1. Coloque sua foto de perfil em: `assets/images/foto-perfil.jpg`
   - Recomendado: 150x150 pixels, formato JPG ou PNG
   
2. Adicione screenshots dos seus projetos em: `assets/images/`
   - Nomes sugeridos: `projeto1-screenshot1.png`, `projeto1-screenshot2.png`, etc.
   - Recomendado: 1024x600 pixels ou maior

### 3. **Customize as Cores**

No arquivo `data.json`, seção `student.colors`:

```json
"colors": {
  "primary": "#6366f1",      // Azul-Índigo (padrão)
  "secondary": "#ec4899",    // Rosa (padrão)
  "accent": "#f59e0b"        // Âmbar (padrão)
}
```

Você pode usar qualquer cor hexadecimal. Algumas sugestões:

- **Professional**: `#003d82`, `#1e40af`, `#0369a1`
- **Vibrant**: `#dc2626`, `#f59e0b`, `#10b981`
- **Modern**: `#7c3aed`, `#06b6d4`, `#ec4899`

### 4. **Abra no Navegador**

Simplesmente abra o arquivo `index.html` no seu navegador:

- **Windows**: Double-click no arquivo `index.html`
- **Mac/Linux**: Use um servidor local (recomendado):
  ```bash
  python -m http.server 8000
  # ou
  npx http-server
  ```

## 🎨 Personalizando o Design

### Alterar o Logo/Ícone da Navbar
No arquivo `index.html`, linha 40:
```html
<a href="#" class="nav-brand">💼 Meu Portfólio</a>
```

Você pode trocar o emoji `💼` por outro de sua preferência ou adicionar uma imagem.

### Alterar Títulos das Seções
No arquivo `index.html`, procure pelos `<h2 class="section-title">` e altere conforme necessário.

### Adicionar Mais Seções
Se quiser adicionar novas seções, siga o padrão:

1. Adicione a HTML em `index.html`
2. Crie uma função `renderNovaSecao()` em `assets/js/script.js`
3. Chame a função em `renderPortfolio()`

## 📱 Sobre Responsividade

O portfólio é totalmente responsivo e funciona bem em:
- Desktop (1920px+)
- Tablets (768px - 1024px)
- Celulares (até 480px)

## 🌐 Deploy (Colocar Online)

### Opção 1: GitHub Pages (Grátis!)

1. Crie um repositório no GitHub chamado `seu-usuario.github.io`
2. Faça upload dos arquivos do portfólio
3. Acesse: `https://seu-usuario.github.io`

### Opção 2: Qualquer Hosting

- Netlify (grátis)
- Vercel (grátis)
- Firebase Hosting (grátis)
- Heroku (pago)

## 🔍 Verificando o Portfólio

Antes de colocar online, verifique:

- [ ] Foto de perfil carregando
- [ ] Links do GitHub funcionando
- [ ] Todas as informações corretas
- [ ] Screenshots dos projetos visíveis
- [ ] Cores personalizadas aplicadas
- [ ] Links dos projetos funcionando
- [ ] No celular, tudo responsivo

## ⚠️ Dicas Importantes

1. **JSON válido**: Use um validador online se tiver dúvidas
2. **Caminhos de imagens**: Use sempre `/assets/images/` (relativo)
3. **Links**: Comece com `https://`
4. **Descrições**: Seja conciso mas informativo
5. **Tecnologias**: Liste apenas as que você realmente usou
6. **Participação**: Explique sua contribuição específica

## 📧 Precisa de Ajuda?

### Problemas Comuns

**Imagens não aparecem:**
- Verifique se o caminho está correto
- Verifique a extensão do arquivo (.jpg, .png, etc.)
- Tente usar caminhos absolutos

**JSON dá erro:**
- Valide em: https://jsonlint.com
- Certifique-se de usar aspas duplas `"`
- Cuidado com vírgulas extras

**Cores não mudam:**
- Use formato hexadecimal válido: `#RRGGBB`
- Teste em: https://htmlcolorcodes.com

## 📚 Recursos Úteis

- **Cores**: https://htmlcolorcodes.com
- **Ícones**: https://www.webfx.com/tools/emoji-cheat-sheet/
- **JSON Validator**: https://jsonlint.com
- **Screenshot Tools**:
  - Windows: Snip & Sketch
  - Mac: Screenshot
  - Online: https://screenshot.cloud

## 📝 Exemplo Completo de Projeto

```json
{
  "id": 1,
  "title": "Sistema de Vendas",
  "description": "Aplicação web para gerenciamento de vendas com autenticação de usuários",
  "semester": 3,
  "technologies": ["React", "Node.js", "PostgreSQL", "Docker"],
  "githubLink": "https://github.com/usuario/sistema-vendas",
  "liveLink": "https://sistema-vendas.netlify.app",
  "images": [
    "assets/images/vendas-tela1.png",
    "assets/images/vendas-tela2.png",
    "assets/images/vendas-tela3.png"
  ],
  "participation": "Desenvolvedor Full Stack. Trabalhei principalmente com React para criar a interface do usuário e Node.js para desenvolver a API REST. Implementei autenticação JWT, validação de formulários e integração com banco de dados PostgreSQL.",
  "myRoles": ["Full Stack Developer", "Database Designer"],
  "myTechnologies": [
    "React Hooks",
    "Context API",
    "Node.js/Express",
    "PostgreSQL",
    "RESTful API",
    "JWT Authentication",
    "Docker"
  ]
}
```

## 📄 Licença

Este template é livre para usar e modificar.

---

**Bom trabalho com seu portfólio! 🚀**
