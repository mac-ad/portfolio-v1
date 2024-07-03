const body = document.querySelector("body");

const projectsListContainer = document.querySelector("#projects .content");
const experienceListContainer = document.querySelector(
  "#experiences .experiences-list"
);

const otherProjectsContainer = document.querySelector(
  "#other-projects .content"
);

const resumeBtn = document
  .getElementById("resumeBtn")
  .addEventListener("click", (e) => {
    window.open(e.target.dataset.resume);
  });

const technologiesContainer = document.querySelector(".technologies ul");

// constants
const data_base_path = "./data/";
const topProjectsPath = `${data_base_path}topProjects.json`;
const experiencesPath = `${data_base_path}experiences.json`;
const otherProjectsPath = `${data_base_path}otherProjects.json`;
const technologiesPath = `${data_base_path}technologies.json`;
const socialsPath = `${data_base_path}socials.json`;

function insertTopProjects() {
  fetch(topProjectsPath)
    .then((res) => res.json())
    .then((projects) => {
      console.log(projects);
      projects.forEach((project) => {
        const projectContainer = document.createElement("div");
        // projectContainer.addEventListener("click", (e) => {
        //   window.open(project.liveLink);
        // });
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
      <a href="/"
          ><h3 class="hover-text-green text-highlight">${project.title}</h3></a
      >
      <p class="description secondary long">
          ${project.description}
      </p>
      <p class="description secondary short">
          ${project.shortDescription}
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
      <a href="${project.github}" target = "_blank" class="hover-highlight-green text-highlight">
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
                <a href="${project.liveLink}"  target = "_blank" class="hover-highlight-green text-highlight">
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
}

function insertExperiences() {
  fetch(experiencesPath)
    .then((res) => res.json())
    .then((experiences) => {
      experiences.forEach((experience) => {
        const li = document.createElement("li");
        li.innerHTML = `
                <span class="duration font-mono"> ${experience.duration} </span>
                <span class="designation"> ${experience.company.name}</span>
                <a href = "${
                  experience.company.url
                } " target = "_blank" class="company ${
          experience.company.clickable ? "" : "disabled"
        }"><h3 >${experience.designation}  <svg
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
              </svg></h3></a>
                <div class="content">
                   
                    <p class="description ">
                    ${experience.description}
                     <ul class = "description-list secondary">
                     </ul>
                    </p>
                    
                </div>
            `;

        const experienceList = li.querySelector("ul.description-list");

        experience?.contributions.forEach((cont) => {
          const li = document.createElement("li");
          li.innerHTML = cont;
          li.classList.add("secondary-text");
          experienceList.append(li);
        });

        const ul = document.createElement("ul");
        ul.classList.add("techs-used");

        experience?.techs.forEach((tech) => {
          const li = document.createElement("li");
          li.innerHTML = tech;
          ul.append(li);
        });

        li.append(ul);

        experienceListContainer.append(li);
      });
    });
}

function insertOtherProjects() {
  fetch(otherProjectsPath)
    .then((res) => res.json())
    .then((projects) => {
      projects.forEach((project) => {
        const projectContainer = document.createElement("div");
        projectContainer.classList.add("other-project-container");
        projectContainer.dataset.redirect = project.liveLink;

        projectContainer.onclick = (e) => {
          // e.stopPropagation();
          // console.log(e.target.dataset.redirect);
          // window.open(project.liveLink);
        };

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
                      target = "_blank"
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
                    ? `<a href= "${project.liveLink}" 
                        target = "_blank"  
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
}

function insertTechnologies() {
  fetch(technologiesPath)
    .then((res) => res.json())
    .then((techs) => {
      techs.forEach((tech) => {
        const li = document.createElement("li");
        li.classList.add("font-mono");
        li.innerHTML = tech;
        technologiesContainer.append(li);
      });
    });
}

async function createSocialLinks() {
  const socialLinksContainer = document.createElement("div");
  socialLinksContainer.classList.add("social-links");

  let res = await fetch(socialsPath);
  const socials = await res.json();

  socials.forEach(async (social) => {
    res = await fetch(`./svgs/${social.icon}.svg`);
    const svgText = await res.text();
    const a = document.createElement("a");
    a.classList.add("hover-highlight");
    a.href = social.link;
    a.innerHTML = svgText;
    a.target = "_blank";
    socialLinksContainer.append(a);
  });

  console.log(socialLinksContainer);
  return socialLinksContainer;
}

async function addSocialLinks() {
  const headersContainer = document.querySelector("header");
  const footer = document.querySelector("footer");
  headersContainer.append(await createSocialLinks());
  footer.insertBefore(await createSocialLinks(), footer.children[0]);
}

{
  /* <div class="font-mono fs-xs">
            <div>Inspired by: Brittany Chiang.</div>
            <a href="https://v4.brittanychiang.com/">
              https://v4.brittanychiang.com/
            </a>
          </div> */
}

async function insertInspiration() {
  console.log("inserting inspiration");
  const headersContainer = document.querySelector("header");
  const footer = document.querySelector("footer");
  const toBeInserted = document.createElement("div");
  toBeInserted.classList.add("font-mono", "fs-xs", "inspiredLink");
  toBeInserted.innerHTML = `
  Inspired by: 
            <a target = "_blank" href="https://v4.brittanychiang.com/">
           Brittany Chiang
            </a>
  `;
  headersContainer.append(toBeInserted);
  const toBeInserted2 = document.createElement("div");
  toBeInserted2.classList.add("font-mono", "fs-xs", "inspiredLink", "footer");
  toBeInserted2.innerHTML = `
  Inspired by: 
            <a target = "_blank" href="https://v4.brittanychiang.com/">
           Brittany Chiang
            </a>
  `;
  footer.insertBefore(toBeInserted2, footer.children[0]);
}

// if (window.innerWidth > 800) {
//   window.onmousemove = (e) => {
//     const body = document.querySelector("body > div");
//     console.log(document.querySelector("body").scrollHeight);
//     body.style.setProperty(
//       "background",
//       `radial-gradient(500px at ${e.clientX}px ${
//         window.scrollY + e.clientY
//       }px ,#132f5965,transparent 100%)`
//     );
//     body.animate(
//       {
//         background: `radial-gradient(500px at ${e.clientX}px ${
//           window.scrollY + e.clientY
//         }px ,#132f593a,transparent 100%)`,
//       },
//       {
//         duration: 200,
//         fill: "forwards",
//       }
//     );
//   };
// }

// addSocialLinks();
// insertInspiration();
insertTopProjects();
insertOtherProjects();
insertTechnologies();
insertExperiences();
