// Projects Data - Yahan aap apne saare projects ki information add kar sakte hain
const projectsData = {
    'hotel-management': {
        title: "Hotel Management System",
        category: "Full Stack",
        description: "A comprehensive full-stack web application for hotel operations with booking management, analytics, feedback system, and payment integration using Stripe and OAuth.",
        image: "./projects-image/1.png",
        technologies: ["Express.js", "Node.js", "Next.js", "MongoDB", "Stripe", "OAuth", "React", "Bootstrap"],
        features: [
            "User authentication and authorization system",
            "Room booking and reservation management",
            "Check-in/out processing",
            "Billing and payment integration with Stripe",
            "Admin dashboard for hotel staff",
            "Real-time room availability tracking",
            "Customer feedback and rating system",
            "Analytics and reporting dashboard",
            "Responsive design for all devices",
            "Secure payment processing"
        ],
        github: "https://github.com/asadaptech864/Hotel-Management-System",
        video: "./assets/Guest Video.mp4",
        additionalImages: [
            "./projects-image/1.png",
            "./projects-image/2.png",
            "./projects-image/3.png",
            "./projects-image/4.png",
            "./projects-image/5.png",
            "./projects-image/6.png",
            "./projects-image/7.png",
            "./projects-image/8.png",
            "./projects-image/9.png",
            "./projects-image/10.png",
            "./projects-image/11.png",
            "./projects-image/12.png",
            "./projects-image/13.png",
            "./projects-image/14.png",
            "./projects-image/15.png",
            "./projects-image/16.png",
            "./projects-image/17.png",
            "./projects-image/18.png",
            "./projects-image/19.png",
            "./projects-image/20.png",
            "./projects-image/21.png",
            "./projects-image/22.png",
            "./projects-image/24.png",
            "./projects-image/25.png"
        ]
    },
    
    'ecommerce': {
        title: "E-commerce Platform",
        category: "Full Stack",
        description: "Modern e-commerce solution with user authentication, product management, shopping cart functionality, and secure payment processing.",
        image: "./assets/project-2.png",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Redux", "Bootstrap", "Stripe"],
        features: [
            "Product catalog with search and filters",
            "Shopping cart and wishlist functionality",
            "User account management system",
            "Secure payment processing",
            "Order tracking and management",
            "Admin product management panel",
            "Inventory management system",
            "Customer reviews and ratings",
            "Responsive mobile-first design",
            "Real-time stock updates"
        ],
        github: "https://github.com/asadaptech864/static-e-commerce-project",
        video: null, // No video for this project
        additionalImages: [
            "./assets/project-2.png",
            "./assets/project-1.png"
        ]
    },
    
    'course-filter': {
        title: "Course Filter System",
        category: "Web Development",
        description: "Collaborative task management application with real-time updates, user roles, and progress tracking features.",
        image: "./assets/project-3.png",
        technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "AJAX", "jQuery", "HTML5", "CSS3"],
        features: [
            "Course filtering and search functionality",
            "User role management system",
            "Real-time data updates with AJAX",
            "Responsive design for all devices",
            "Database optimization and queries",
            "User authentication system",
            "Course categorization and tags",
            "Advanced search algorithms",
            "Mobile-friendly interface",
            "Performance optimization"
        ],
        github: "https://github.com/asadaptech864/course-filter-project",
        video: null, // No video for this project
        additionalImages: [
            "./assets/project-3.png",
            "./assets/project-1.png"
        ]
    }
};

// Get project ID from URL
function getProjectIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('project') || 'hotel-management'; // Default project
}

// Load project data
function loadProject(projectId) {
    const project = projectsData[projectId];
    
    if (!project) {
        // Project not found, redirect to home
        window.location.href = 'index.html';
        return;
    }
    
    // Update page title
    document.title = `${project.title} - Muhammad Asad`;
    
    // Update project header
    document.getElementById('project-image').src = project.image;
    document.getElementById('project-image').alt = project.title;
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-category').textContent = project.category;
    document.getElementById('project-description').textContent = project.description;
    
    // Update technologies
    const technologiesContainer = document.getElementById('technologies-list');
    technologiesContainer.innerHTML = '';
    project.technologies.forEach(tech => {
        const techItem = document.createElement('div');
        techItem.className = 'tech-item';
        techItem.textContent = tech;
        technologiesContainer.appendChild(techItem);
    });
    
    // Update features
    const featuresContainer = document.getElementById('features-list');
    featuresContainer.innerHTML = '';
    project.features.forEach(feature => {
        const featureItem = document.createElement('li');
        featureItem.textContent = feature;
        featuresContainer.appendChild(featureItem);
    });
    
    // Update project links
    document.getElementById('github-link').href = project.github;
    
    // Show/hide video section based on availability
    const videoSection = document.getElementById('video-section');
    const projectVideo = document.getElementById('project-video');
    
    if (project.video) {
        projectVideo.src = project.video;
        videoSection.style.display = 'block';
    } else {
        videoSection.style.display = 'none';
    }
    
    // Show/hide images section based on availability
    const imagesSection = document.getElementById('images-section');
    const projectImages = document.getElementById('project-images');
    
    if (project.additionalImages && project.additionalImages.length > 0) {
        projectImages.innerHTML = '';
        project.additionalImages.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = `${project.title} screenshot`;
            img.className = 'gallery-image';
            img.onclick = () => openImageModal(imgSrc);
            projectImages.appendChild(img);
        });
        imagesSection.style.display = 'block';
    } else {
        imagesSection.style.display = 'none';
    }
}

// Image modal functionality
function openImageModal(imageSrc) {
    // Create modal for image preview
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        cursor: pointer;
    `;
    
    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 1rem;
    `;
    
    modal.appendChild(img);
    document.body.appendChild(modal);
    
    // Close modal on click
    modal.onclick = () => {
        document.body.removeChild(modal);
    };
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    const projectId = getProjectIdFromURL();
    loadProject(projectId);
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Update URL when project changes (for future use)
function updateProjectURL(projectId) {
    const newURL = `${window.location.pathname}?project=${projectId}`;
    window.history.pushState({ project: projectId }, '', newURL);
    loadProject(projectId);
}

// Handle browser back/forward buttons
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.project) {
        loadProject(event.state.project);
    }
});
