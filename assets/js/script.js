// ===================================
// PORTFOLIO - MANIPULAÇÃO DE DADOS
// ===================================

let portfolioData = {};

// Carrega os dados do arquivo JSON
async function loadData() {
  try {
    const response = await fetch('data.json');
    portfolioData = await response.json();
    updateCustomColors();
    renderPortfolio();
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
  }
}

// Atualiza as cores CSS customizadas
function updateCustomColors() {
  const { colors } = portfolioData.student;
  if (colors) {
    document.documentElement.style.setProperty('--primary', colors.primary);
    document.documentElement.style.setProperty('--secondary', colors.secondary);
    document.documentElement.style.setProperty('--accent', colors.accent);
  }
}

// ===================================
// RENDERIZAÇÃO PRINCIPAL
// ===================================

function renderPortfolio() {
  renderHero();
  renderCourseInfo();
  renderWorkExperience();
  renderExtensionCourses();
  renderLanguages();
  renderProjects();
}

// ===================================
// RENDERIZAR HERO/HEADER
// ===================================

function renderHero() {
  const { name, photo, github, bio } = portfolioData.student;
  const heroContent = document.querySelector('.hero-content');

  heroContent.innerHTML = `
    <img src="${photo}" alt="${name}" class="hero-image" onerror="this.src='https://via.placeholder.com/150'">
    <h1>${name}</h1>
    <p>${bio || 'Desenvolvedor de Sistemas Multiplataforma'}</p>
    <div class="social-links-hero">
      <a href="${github}" target="_blank" title="GitHub">
        <span class="icon">🐙</span>
      </a>
      ${portfolioData.socialLinks?.linkedin ? `<a href="${portfolioData.socialLinks.linkedin}" target="_blank" title="LinkedIn">💼</a>` : ''}
      ${portfolioData.socialLinks?.instagram ? `<a href="${portfolioData.socialLinks.instagram}" target="_blank" title="Instagram">📷</a>` : ''}
      ${portfolioData.student.email ? `<a href="mailto:${portfolioData.student.email}" title="Email">✉️</a>` : ''}
    </div>
  `;
}

// ===================================
// RENDERIZAR INFORMAÇÕES DO CURSO
// ===================================

function renderCourseInfo() {
  const { course } = portfolioData;
  const courseSection = document.querySelector('#course-info');

  if (!courseSection) return;

  const startDate = new Date(course.startDate + '-01');
  const endDate = new Date(course.expectedEndDate + '-01');

  courseSection.innerHTML = `
    <div class="course-info">
      <h3>Informações do Curso</h3>
      <div class="info-grid">
        <div class="info-item">
          <div class="info-label">Faculdade</div>
          <div class="info-value">${course.college}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Curso</div>
          <div class="info-value">${course.name}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Semestre Atual</div>
          <div class="info-value">${course.currentSemester}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Previsão de Conclusão</div>
          <div class="info-value">${formatMonth(endDate)}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Data de Início</div>
          <div class="info-value">${formatMonth(startDate)}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Telefone</div>
          <div class="info-value">${portfolioData.student.phone || 'Não informado'}</div>
        </div>
      </div>
    </div>
  `;
}

// ===================================
// RENDERIZAR EXPERIÊNCIA PROFISSIONAL
// ===================================

function renderWorkExperience() {
  const { workExperience } = portfolioData;
  const experienceSection = document.querySelector('#work-experience');

  if (!experienceSection) return;

  if (!workExperience || workExperience.length === 0) {
    experienceSection.innerHTML = '<p style="text-align: center; color: #999;">Nenhuma experiência profissional adicionada ainda.</p>';
    return;
  }

  let html = '';
  workExperience.forEach(exp => {
    const startDate = formatDate(exp.startDate);
    const endDate = exp.isCurrent ? 'Atual' : formatDate(exp.endDate);

    html += `
      <div class="experience-card">
        <div class="experience-header">
          <h3>${exp.company}</h3>
          <span class="position">${exp.position}</span>
        </div>
        <div class="experience-meta">
          <span class="date-badge">📅 ${startDate} - ${endDate}</span>
        </div>
        <p class="experience-description">${exp.description}</p>
      </div>
    `;
  });

  experienceSection.innerHTML = html;
}

// ===================================
// RENDERIZAR CURSOS DE EXTENSÃO
// ===================================

function renderExtensionCourses() {
  const { extensionCourses } = portfolioData;
  const coursesSection = document.querySelector('#extension-courses');

  if (!coursesSection) return;

  if (!extensionCourses || extensionCourses.length === 0) {
    coursesSection.innerHTML = '<p style="text-align: center; color: #999;">Nenhum curso de extensão adicionado ainda.</p>';
    return;
  }

  let html = '';
  extensionCourses.forEach(course => {
    const startDate = formatDate(course.startDate);
    const endDate = formatDate(course.endDate);

    html += `
      <div class="course-card">
        <h4>📚 ${course.name}</h4>
        <div class="course-meta">
          <span>🏢 ${course.institution}</span>
          <span>📍 ${course.location}</span>
          <span>⏱️ ${course.hours}h</span>
        </div>
        <div class="course-meta">
          <span>${startDate} - ${endDate}</span>
        </div>
        ${course.certificate ? `<p><a href="${course.certificate}" target="_blank" class="btn btn-secondary">Certificado</a></p>` : ''}
      </div>
    `;
  });

  coursesSection.innerHTML = html;
}

// ===================================
// RENDERIZAR LÍNGUAS
// ===================================

function renderLanguages() {
  const { languages } = portfolioData;
  const languagesSection = document.querySelector('#languages');

  if (!languagesSection) return;

  if (!languages || languages.length === 0) {
    languagesSection.innerHTML = '<p style="text-align: center; color: #999;">Nenhuma língua adicionada ainda.</p>';
    return;
  }

  let html = '<div class="languages-grid">';
  languages.forEach(lang => {
    html += `
      <div class="language-card">
        <h3>${lang.name}</h3>
        <span class="language-level">${lang.level}</span>
      </div>
    `;
  });
  html += '</div>';

  languagesSection.innerHTML = html;
}

// ===================================
// RENDERIZAR PROJETOS
// ===================================

function renderProjects() {
  const { projects } = portfolioData;
  const projectsGrid = document.querySelector('.projects-grid');
  const statsGrid = document.querySelector('.stats-grid');

  if (!projectsGrid) return;

  if (!projects || projects.length === 0) {
    projectsGrid.innerHTML = '<p style="text-align: center; color: #999; grid-column: 1/-1;">Nenhum projeto adicionado ainda.</p>';
    return;
  }

  // Renderizar cards dos projetos
  let projectsHtml = '';
  projects.forEach(project => {
    const hasImage = project.images && project.images.length > 0;
    const imageUrl = hasImage ? project.images[0] : '';

    projectsHtml += `
      <div class="project-card" onclick="openProjectModal(${project.id})">
        ${hasImage ? `<img src="${imageUrl}" alt="${project.title}" class="project-image" onerror="this.parentElement.classNameList.add('no-image')">` : '<div class="project-image">📁</div>'}
        <div class="project-content">
          <div class="project-title">${project.title}</div>
          <div class="project-semester">Semestre ${project.semester}</div>
          <p class="project-description">${project.description}</p>
          <div class="project-technologies">
            ${project.technologies.slice(0, 3).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
  });

  projectsGrid.innerHTML = projectsHtml;

  // Renderizar estatísticas
  if (statsGrid) {
    const totalProjects = projects.length;
    const averageTechPerProject = Math.round(projects.reduce((sum, p) => sum + p.technologies.length, 0) / totalProjects);
    const allTechs = [...new Set(projects.flatMap(p => p.technologies))];

    statsGrid.innerHTML = `
      <div class="stat-card">
        <div class="stat-number">${totalProjects}</div>
        <div class="stat-label">Projetos</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">${allTechs.length}</div>
        <div class="stat-label">Tecnologias</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">${portfolioData.course.currentSemester}</div>
        <div class="stat-label">Semestres</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">${averageTechPerProject}</div>
        <div class="stat-label">Tecnologias/Projeto</div>
      </div>
    `;
  }
}

// ===================================
// MODAL DE DETALHES DO PROJETO
// ===================================

function openProjectModal(projectId) {
  const project = portfolioData.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.querySelector('.modal');
  const modalContent = modal.querySelector('.modal-content');

  let technologiesHtml = '';
  if (project.myTechnologies && project.myTechnologies.length > 0) {
    technologiesHtml = `
      <div class="modal-section">
        <h3>🛠️ Tecnologias Utilizadas</h3>
        <div class="project-technologies">
          ${project.myTechnologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>
    `;
  }

  let imagesHtml = '';
  if (project.images && project.images.length > 0) {
    imagesHtml = `
      <div class="modal-section">
        <h3>📸 Screenshots</h3>
        <div class="gallery">
          ${project.images.map(img => `<img src="${img}" alt="Screenshot" onerror="this.src='https://via.placeholder.com/250x200';">`).join('')}
        </div>
      </div>
    `;
  }

  let linksHtml = '<div class="modal-links">';
  if (project.githubLink) {
    linksHtml += `<a href="${project.githubLink}" target="_blank" class="btn btn-primary">Ver Código no GitHub</a>`;
  }
  if (project.liveLink) {
    linksHtml += `<a href="${project.liveLink}" target="_blank" class="btn btn-primary">Ver Projeto Online</a>`;
  }
  linksHtml += '</div>';

  modalContent.innerHTML = `
    <button class="modal-close" onclick="closeProjectModal()">✕</button>
    <div class="modal-header">
      <h2>${project.title}</h2>
      <p class="semester">Semestre ${project.semester}</p>
    </div>
    <div class="modal-body">
      <div class="modal-section">
        <h3>📝 Descrição do Projeto</h3>
        <p>${project.description}</p>
      </div>

      <div class="modal-section">
        <h3>🔧 Tecnologias Utilizadas (Projeto)</h3>
        <div class="project-technologies">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>

      ${technologiesHtml}

      <div class="modal-section">
        <h3>👤 Minha Participação</h3>
        <p>${project.participation}</p>
        ${project.myRoles && project.myRoles.length > 0 ? `
          <p><strong>Funções:</strong></p>
          <ul>
            ${project.myRoles.map(role => `<li>${role}</li>`).join('')}
          </ul>
        ` : ''}
      </div>

      ${imagesHtml}

      <div class="modal-section">
        <h3>🔗 Links</h3>
        ${linksHtml}
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function closeProjectModal() {
  const modal = document.querySelector('.modal');
  modal.classList.remove('active');
}

// ===================================
// FUNÇÕES AUXILIARES
// ===================================

function formatDate(dateString) {
  if (!dateString) return 'Não informado';
  const [year, month] = dateString.split('-');
  const date = new Date(year, parseInt(month) - 1);
  return date.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
}

function formatMonth(date) {
  return date.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
}

// Fechar modal ao clicar fora
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('.modal');
  if (modal) {
    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        closeProjectModal();
      }
    });
  }

  // Carregar dados ao iniciar
  loadData();
});

// ===================================
// SCROLL SMOOTH
// ===================================

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
