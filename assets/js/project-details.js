const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const VIDEO = document.getElementById("video");
const VIDEO_SRC = document.createElement("source");
const PROJECT_FILTER_BTNS = document.querySelectorAll(".filter-btn");

function createVideoSrc(project) {
  VIDEO_SRC.src = project.video;
  VIDEO_SRC.setAttribute("src", project.video);
  VIDEO_SRC.setAttribute("type", "video/mp4");
  VIDEO.appendChild(VIDEO_SRC);
  VIDEO.load();
}

function renderProjectBox(projectData, position, nextProjectId, prevProjectId) {
  const isLeft = position === "left";
  const isOnlyProject = isLeft ? !nextProjectId : !prevProjectId;
  const arrow = isLeft ? "ArrowCircleLeft.svg" : "ArrowCircleRight.svg";
  const directionClass = isLeft ? "text-white" : "text-white text-end";
  const label = isLeft ? "Prev.Project" : "Next.Project";

  return `
    <div class="project-box ${position} ${isOnlyProject ? "full-width" : ""}">
      <img src="${
        projectData.imgSrc
      }" alt="${label}" class="project-box__mainImg" />
      <div class="overlay">
        <div class="details">
          <h2>${label}</h2>
          <h5>${projectData.name}</h5>
          <button class="btn semi-transparent-btn">${projectData.type}</button>
        </div>
        <a href="${projectData.link}" class="${directionClass}">
          ${
            isLeft
              ? `<img src="./assets/images/project-details/${arrow}" alt="arrow" class="img-fluid arrow-img"> Discover`
              : `Discover <img src="./assets/images/project-details/${arrow}" alt="arrow" class="img-fluid arrow-img">`
          }
        </a>
      </div>
    </div>`;
}

if (id) {
  const project = allWorksItems.find((pro) => pro.id == id);
  if (project) {
    const {
      prevProjectId,
      nextProjectId,
      imageList,
      fullDescription,
      description: shortDesc,
      name,
      type
    } = project;
    const projectsSlider = document.querySelector(".project-slider");
    const container = document.querySelector(".image-grid");
    const description = document.querySelector(".description__details");
    const project_name = document.querySelector("#project_name");
  
    PROJECT_FILTER_BTNS.forEach((btn)=>{
      btn.lastChild.textContent = type      
    })

    // Render Prev Project
    if (prevProjectId && projectsSlider) {
      const prevProject = allWorksItems.find((pro) => pro.id == prevProjectId);
      if (prevProject) {
        const prevHTML = renderProjectBox(
          prevProject,
          "left",
          nextProjectId,
          prevProjectId
        );
        projectsSlider.insertAdjacentHTML("beforeend", prevHTML);
      }
    }

    // Render Next Project
    if (nextProjectId && projectsSlider) {
      const nextProject = allWorksItems.find((pro) => pro.id == nextProjectId);
      if (nextProject) {
        const nextHTML = renderProjectBox(
          nextProject,
          "right",
          nextProjectId,
          prevProjectId
        );
        projectsSlider.insertAdjacentHTML("beforeend", nextHTML);
      }
    }
    createVideoSrc(project);
    imageList?.map((img, index) => {
      const newProjectHTML = `
      <div class="image-box border-shadow ${animationOptions[index]?.className}" data-aos="${animationOptions[index]?.type}" data-aos-delay="${animationOptions[index]?.delay}"  data-aos-duration="1000" data-aos-easing="linear">
                  <img src="${img}" alt="project" class="img-fluid">
              </div>
              `;
      container.insertAdjacentHTML("beforeend", newProjectHTML);
    });
    description.innerHTML = fullDescription ?? shortDesc;
    project_name.innerHTML = name;
  }
}
