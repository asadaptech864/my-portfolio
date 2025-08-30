// Projects Data - Yahan aap apne saare projects ki information add kar sakte hain
const projectsData = {
    'whatsapp-ai-agent': {
        title: "WhatsApp AI Agent Workflow (n8n)",
        category: "Automation / AI Integration",
        description: "An n8n workflow that connects a WhatsApp Trigger to an AI Agent powered by Google Gemini with simple memory and Google Sheets tools for FAQs, services lookup, and order saving, then replies back on WhatsApp.",
        image: "./assets/phone.webp",
        technologies: [
            "n8n",
            "WhatsApp Cloud API",
            "Google Gemini (Generative AI)",
            "Google Sheets API",
            "AI Agent / Tools",
            "Webhooks",
            "JavaScript"
        ],
        features: [
            "WhatsApp inbound message trigger and automated replies",
            "AI Agent responses using Google Gemini Chat Model",
            "Simple conversational memory for better context",
            "FAQ retrieval from Google Sheets (read: sheet)",
            "Services lookup from Google Sheets (read: sheet)",
            "Order capture and append to Google Sheets (append: sheet)",
            "Configurable tools exposed to the AI Agent",
            "Low-code orchestration using n8n with reusable nodes",
            "Production-friendly with environment variables and secrets"
        ],
        video: [
            "./assets/n8n google ai.mp4"
        ],
        image: "./assets/Screenshot 2025-08-29 205721.png",
        additionalImages: [
            "./assets/Screenshot 2025-08-29 205721.png",
            "./assets/Screenshot 2025-08-29 205751.png",
            "./assets/Screenshot 2025-08-29 205827.png",
            "./assets/Screenshot 2025-08-29 205841.png",
            "./assets/Screenshot 2025-08-29 210106.png",
            "./assets/Screenshot 2025-08-29 205859.png"
        ],
        github: "https://github.com/asadaptech864"
    },
    
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
        title: "E-commerce Frontend Project",
        category: "Frontend Web Application",
        description: "A modern, responsive e-commerce website built with React and Vite, featuring a complete shopping experience with cart management, wishlist functionality, and a beautiful user interface using Bootstrap and React Icons.",
        image: "./projects-image/27.png",
        technologies: ["React 18.2.0", "Vite 4.5.0", "Bootstrap 5.3.5", "React Bootstrap 2.10.9", "React Icons 5.5.0", "React Router DOM 6.30.0", "CSS Modules", "JavaScript ES6+", "JSX"],
        features: [
            "Hero banner with eye-catching promotional content",
            "Product categories and best-selling products sections",
            "Complete product catalog with grid display",
            "Shopping cart with add, remove, and quantity update functionality",
            "Wishlist system to save products for later",
            "Comprehensive product detail pages with dynamic routing",
            "Responsive mobile-first design for all devices",
            "Modern UI with Bootstrap integration and React Icons",
            "React Context API for state management (Cart & Wishlist)",
            "Local storage persistence for cart and wishlist data",
            "Dynamic product pages with route parameters",
            "User authentication pages (Login/Signup)",
            "Contact and About pages with professional styling",
            "Fast development with Vite hot module replacement"
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
        title: "MERN Practical – Courses App",
        category: "Full Stack Web Application",
        description: "A MERN stack application to manage and browse courses with full-text search and filters. Features a Node.js/Express backend with MongoDB database and a React frontend for course management and discovery.",
        image: "./assets/cousre-project.png",
        technologies: ["React (Vite)", "Node.js", "Express.js", "MongoDB", "Mongoose", "RESTful APIs", "CORS", "dotenv", "JavaScript ES6+"],
        features: [
            "Add new courses with title, description, price, and difficulty level",
            "Full-text search by title and description (case-insensitive)",
            "Numeric search that matches exact price values",
            "Filter courses by difficulty level (beginner, medium, expert)",
            "Filter by price range with minPrice and maxPrice parameters",
            "RESTful API endpoints for course management",
            "MongoDB database with Mongoose ODM for data modeling",
            "React frontend with Vite for fast development",
            "Responsive design for all devices",
            "Real-time search and filtering capabilities",
            "Course data model with validation and timestamps",
            "CORS enabled for cross-origin requests",
            "Environment variable configuration for database and ports",
            "Modular backend architecture with controllers and routes"
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
