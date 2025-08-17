// Projects Data - Yahan aap apne saare projects ki information add kar sakte hain
const projectsData = {
    'hotel-management': {
        title: "Hotel Management System",
        category: "Full Stack Web Application",
        description: "A comprehensive hotel management solution built with modern web technologies. Features include real-time booking management, multi-user authentication (Guest, Staff, Admin), integrated payment processing with Stripe, and a complete analytics dashboard for business insights.",
        image: "./projects-image/1.png",
        technologies: ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "Stripe API", "OAuth 2.0", "JWT", "Bootstrap", "CSS3", "JavaScript ES6+"],
        features: [
            "Multi-role authentication system (Guest, Staff, Admin)",
            "Real-time room booking and reservation management",
            "Integrated Stripe payment processing with secure transactions",
            "Dynamic check-in/check-out processing with automated workflows",
            "Comprehensive admin dashboard with analytics and reporting",
            "Real-time room availability tracking and status updates",
            "Customer feedback and rating system with review management",
            "Advanced search and filtering for room selection",
            "Responsive design optimized for desktop, tablet, and mobile",
            "Secure OAuth integration for third-party authentication",
            "Automated email notifications for booking confirmations",
            "Inventory management for hotel amenities and services",
            "Multi-language support and internationalization",
            "Performance optimization with caching and lazy loading"
        ],
        github: "https://github.com/asadaptech864/Hotel-Management-System",
        video: [
            "./assets/Guest Video.mp4",
            "./assets/Admin Video.mp4",
            "./assets/Staff Video.mp4"
        ],
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
        category: "Full Stack Web Application",
        description: "A modern, scalable e-commerce platform built with React and Node.js. Features a complete shopping experience with user authentication, product management, shopping cart functionality, and secure payment processing using Stripe integration.",
        image: "./projects-image/27.png",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "Redux Toolkit", "Bootstrap 5", "Stripe API", "RESTful APIs", "CSS3", "JavaScript ES6+"],
        features: [
            "Complete user authentication and authorization system",
            "Advanced product catalog with search, filtering, and categorization",
            "Shopping cart and wishlist functionality with persistent storage",
            "Secure payment processing with Stripe integration",
            "Order management system with tracking and status updates",
            "Comprehensive admin panel for product and inventory management",
            "Real-time inventory tracking and stock management",
            "Customer review and rating system with moderation",
            "Responsive mobile-first design with progressive web app features",
            "Advanced search functionality with autocomplete and suggestions",
            "Email notification system for orders and account updates",
            "Multi-currency support and international shipping options",
            "Performance optimization with lazy loading and code splitting",
            "SEO optimization with meta tags and structured data"
        ],
        github: "https://github.com/asadaptech864/static-e-commerce-project",
        video: [
            "./assets/static-Ecommerce.mp4"
        ],
        additionalImages: [
            "./projects-image/27.png",
            "./projects-image/28.png",
            "./projects-image/29.png",
            "./projects-image/30.png",
            "./projects-image/31.png",
            "./projects-image/32.png",
            "./projects-image/33.png",
            "./projects-image/34.png",
            "./projects-image/35.png",
            "./projects-image/26.png"
        ]
    },
    
    'course-filter': {
        title: "Course Filter System",
        category: "Web Development",
        description: "A dynamic course filtering and management system built with PHP and MySQL. Features real-time search and filtering capabilities, user role management, and an intuitive interface for educational content organization.",
        image: "./assets/cousre-project.png",
        technologies: ["PHP 8", "MySQL", "Bootstrap 5", "JavaScript ES6+", "AJAX", "jQuery", "HTML5", "CSS3", "RESTful APIs", "JSON"],
        features: [
            "Advanced course filtering with multiple criteria and real-time search",
            "User role management system with different access levels",
            "Real-time data updates using AJAX for seamless user experience",
            "Responsive design optimized for all devices and screen sizes",
            "Database optimization with efficient queries and indexing",
            "Secure user authentication and session management",
            "Course categorization with tags and metadata management",
            "Advanced search algorithms with fuzzy matching capabilities",
            "Mobile-friendly interface with touch-optimized interactions",
            "Performance optimization with caching and query optimization",
            "Export functionality for course data in multiple formats",
            "Bulk operations for course management and updates",
            "Accessibility features for inclusive design",
            "Cross-browser compatibility and progressive enhancement"
        ],
        github: "https://github.com/asadaptech864/course-filter-project",
        // video: [
        //     "./assets/course-filter-demo.mp4"
        // ],
        // additionalImages: [
        //     "./assets/project-3.png",
        //     "./assets/project-1.png"
        // ]
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
    const projectVideos = document.getElementById('project-videos');
    
    if (project.video && project.video.length > 0) {
        projectVideos.innerHTML = '';
        project.video.forEach(videoSrc => {
            const videoContainer = document.createElement('div');
            videoContainer.className = 'video-container gallery-video';
            
            const video = document.createElement('video');
            video.src = videoSrc;
            video.controls = true;
            video.muted = true;
            video.preload = 'metadata';
            video.autoplay = false;
            
            videoContainer.appendChild(video);
            projectVideos.appendChild(videoContainer);
        });
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
