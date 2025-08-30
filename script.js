function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function scrollProjects(direction) {
  const container = document.querySelector('.projects-container');
  const scrollAmount = 400; // Adjust this value to control scroll distance
  
  if (direction === 'left') {
    container.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  } else if (direction === 'right') {
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}

// Function to load projects dynamically
function loadProjects() {
  const projectsContainer = document.getElementById('projectsContainer');
  
  if (!projectsContainer || typeof projectsData === 'undefined') {
    console.error('Projects container or projectsData not found');
    return;
  }
  
  // Clear existing content
  projectsContainer.innerHTML = '';
  
  // Loop through all projects in projectsData
  Object.keys(projectsData).forEach(projectKey => {
    const project = projectsData[projectKey];
    
    // Create project card HTML
    const projectCard = `
      <div class="details-container color-container">
        <div class="article-container">
          <img
            src="${project.image}"
            alt="${project.title}"
            class="project-img"
          />
        </div>
        <h2 class="experience-sub-title project-title">${project.title}</h2>
        <p class="project-description">${project.description}</p>
        <p class="project-tech"><strong>Technologies:</strong> ${project.technologies.slice(0, 5).join(', ')}${project.technologies.length > 5 ? '...' : ''}</p>
        <div class="btn-container">
          <a href="${project.github}" target="_blank"
            class="btn btn-color-2 project-btn" style="text-decoration: none;">
            Github
          </a>
          <button
            class="btn btn-color-2 project-btn"
            onclick="location.href='./project-detail.html?project=${projectKey}'"
          >
            View
          </button>
        </div>
      </div>
    `;
    
    // Add project card to container
    projectsContainer.innerHTML += projectCard;
  });
}

// Load projects when page loads
document.addEventListener('DOMContentLoaded', function() {
  loadProjects();
});
