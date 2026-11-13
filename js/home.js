
/* ======================================
   NISHUVILLE — HOMEPAGE
   ====================================== */

// Reusable external link icon
const externalLinkIcon = `
    <svg xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         stroke-width="2"
         stroke-linecap="round"
         stroke-linejoin="round"
         aria-hidden="true">

        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <path d="M9 15 15 9M9 9h6v6"/>
    </svg>
`;


/* ======================================
   ALBUM RENDERING
   ====================================== */

function renderAlbums(albumsToRender) {
    const albumGrid = document.querySelector(".album-grid");

    albumGrid.replaceChildren();

    albumsToRender.forEach(album => {
        const albumCard = document.createElement("article");
        albumCard.classList.add("album-card");

        const albumVisual = document.createElement("div");
        albumVisual.classList.add("album-visual");
        albumVisual.setAttribute("tabindex", "0");

        const albumCover = document.createElement("img");
        albumCover.classList.add("album-cover");
        albumCover.src = album.cover;
        albumCover.loading = "lazy";
        albumCover.alt = `${album.title} album cover`;

        const albumOverlay = document.createElement("div");
        albumOverlay.classList.add("album-overlay");

        const albumHoverTitle = document.createElement("h3");
        albumHoverTitle.textContent = album.title;

        const albumHoverRating = document.createElement("p");
        albumHoverRating.textContent = `★ ${album.rating.toFixed(2)}/10`;

        // Assemble overlay
        albumOverlay.appendChild(albumHoverTitle);
        albumOverlay.appendChild(albumHoverRating);

        // Assemble album card
        albumVisual.appendChild(albumCover);
        albumVisual.appendChild(albumOverlay);
        albumCard.appendChild(albumVisual);

        // Add to homepage grid
        albumGrid.appendChild(albumCard);
    });
}


/* ======================================
   PROJECT RENDERING
   ====================================== */

function getFeaturedProjects(projects) {
    return projects.filter(project => project.featured);
}

function renderProjects(projectsToRender) {
    const projectGrid = document.querySelector(".project-grid");

    projectGrid.replaceChildren();

    projectsToRender.forEach(project => {
        const projectCard = document.createElement("article");
        projectCard.classList.add("project-card");

        const projectNumber = document.createElement("p");
        projectNumber.classList.add("project-number");
        projectNumber.textContent =
            `Project / ${project.number.toString().padStart(3, "0")}`;

        const projectPreview = document.createElement("div");
        projectPreview.classList.add("project-preview");

        const projectImage = document.createElement("img");
        projectImage.src = project.image;
        projectImage.alt = `Screenshot of the ${project.title} website`;

        const projectInfo = document.createElement("div");
        projectInfo.classList.add("project-info");

        const projectHeading = document.createElement("h3");
        projectHeading.textContent = project.title;

        const projectDescription = document.createElement("p");
        projectDescription.textContent = project.description;

        const projectBottom = document.createElement("div");
        projectBottom.classList.add("project-bottom");

        // Generate technology tags
        const projectTechStack = document.createElement("ul");
        projectTechStack.classList.add("tech-stack");

        project.technologies.forEach(tech => {
            const projectTechnology = document.createElement("li");
            projectTechnology.textContent = tech;
            projectTechStack.appendChild(projectTechnology);
        });

        // External website link
        const projectLink = document.createElement("a");
        projectLink.classList.add("project-link", "sound-nav");

        projectLink.href = project.links.live;
        projectLink.setAttribute(
            "aria-label",
            `Open ${project.title} website`
        );

        projectLink.target = "_blank";
        projectLink.rel = "noopener noreferrer";
        projectLink.innerHTML = externalLinkIcon;

        // Assemble project bottom
        projectBottom.appendChild(projectTechStack);
        projectBottom.appendChild(projectLink);

        // Assemble project information
        projectInfo.appendChild(projectHeading);
        projectInfo.appendChild(projectDescription);
        projectInfo.appendChild(projectBottom);

        // Assemble screenshot
        projectPreview.appendChild(projectImage);

        // Assemble project card
        projectCard.appendChild(projectNumber);
        projectCard.appendChild(projectPreview);
        projectCard.appendChild(projectInfo);

        // Add to homepage grid
        projectGrid.appendChild(projectCard);
    });
}


/* ======================================
   HOMEPAGE INITIALISATION
   ====================================== */

// Select the five highest-rated albums
const topAlbums = [...albums]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

// Select featured projects
const featuredProjects = getFeaturedProjects(projects);

// Render homepage content
renderAlbums(topAlbums);
renderProjects(featuredProjects);
