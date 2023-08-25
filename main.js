const projectsListContainer = document.querySelector("#projects .content");

fetch("./topProjects.json")
  .then((res) => res.json())
  .then((projects) => {
    console.log(projects);
    projects.forEach((project) => {
      const projectContainer = document.createElement("div");
      projectContainer.classList.add("project-container");

      const projectImage = document.createElement("div");
      projectImage.classList.add("project-image");
      projectImage.innerHTML = `
            <img
                src="./images/${project.image}"
                alt=""
            />
      `;

      const projectContent = document.createElement("project-content");
      projectContent.classList.add("project-content");

      projectContent.innerHTML = `
        <a href="#"
            ><h3 class="hover-text-green text-highlight">${project.title}</h3></a
        >
        <p class="description">
            ${project.description}
        </p>
      `;

      const techsUsed = document.createElement("ul");
      techsUsed.classList.add("techs-used");
      project.techs.forEach((tech) => {
        const li = document.createElement("li");
        li.innerText = tech;
        techsUsed.append(li);
      });

      projectContent.append(techsUsed);

      const projectsLinks = document.createElement("div");
      projectsLinks.classList.add("project-links");
      projectsLinks.innerHTML = `
        <a href="${project.github}" class="hover-highlight-green text-highlight">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      width="1em"
                      height="1em"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-github"
                    >
                      <title>GitHub</title>
                      <path
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                      ></path>
                    </svg>
                  </a>
                  <a href="${project.liveLink}" class="hover-highlight-green text-highlight">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      width="1em"
                      height="1em"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-external-link"
                    >
                      <title>External Link</title>
                      <path
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      ></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
      
      `;

      projectContent.append(projectsLinks);
      projectContainer.append(projectImage);
      projectContainer.append(projectContent);

      projectsListContainer.append(projectContainer);
    });
  });

const experienceListContainer = document.querySelector(
  "#experiences .experiences-list"
);

fetch("./experiences.json")
  .then((res) => res.json())
  .then((experiences) => {
    experiences.forEach((experience) => {
      const li = document.createElement("li");
      li.innerHTML = `
                <span class="duration font-mono"> ${experience.duration} </span>
                <div class="content">
                    <h3 class="designation">${experience.designation}</h3>
                    <p class="description">
                    ${experience.description}
                    </p>
                </div>
            `;

      experienceListContainer.append(li);
    });
  });

const otherProjectsContainer = document.querySelector(
  "#other-projects .content"
);

fetch("./otherProjects.json")
  .then((res) => res.json())
  .then((projects) => {
    projects.forEach((project) => {
      const projectContainer = document.createElement("div");
      projectContainer.classList.add("other-project-container");

      const projectTop = document.createElement("div");
      projectTop.classList.add("project-top");
      projectTop.innerHTML = `<div class="folder">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-folder"
                  >
                    <title>Folder</title>
                    <path
                      d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                    ></path>
                  </svg>
                </div>
                <div class="other-project-links">
                  ${
                    project.github
                      ? `<a
                        href=${project.github}
                        class="hover-highlight-green text-highlight"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          width="1em"
                          height="1em"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-github"
                        >
                          <title>GitHub</title>
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>`
                      : ""
                  }
                  ${
                    project.liveLink
                      ? `<a href= "${project.liveLink}"  class="hover-highlight-green text-highlight">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          width="1em"
                          height="1em"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-external-link"
                        >
                          <title>External Link</title>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>`
                      : ""
                  }
                </div>`;

      const projectMain = document.createElement("div");
      projectMain.classList.add("project-main");
      projectMain.innerHTML = `
              <h4>${project.title}</h4>
              <p class="description secondary">
                ${project.description}
              </p>
            `;

      const otherProjectTechUsed = document.createElement("ul");
      otherProjectTechUsed.classList.add("other-project-techs-used");

      project.techs.forEach((tech) => {
        const li = document.createElement("li");
        li.classList.add("font-mono");
        li.innerText = tech;
        otherProjectTechUsed.append(li);
      });

      projectContainer.append(projectTop);
      projectContainer.append(projectMain);
      projectContainer.append(otherProjectTechUsed);

      otherProjectsContainer.append(projectContainer);
    });
  });
