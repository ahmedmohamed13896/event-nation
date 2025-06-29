window.addEventListener("load", function () {
  const hash = window.location.hash;
  if (hash) {
    // Slight delay to allow layout and CSS to apply
    setTimeout(() => {
      const target = document.querySelector(hash);
      if (target) {
        const offset = NAV_HEIGHT; // convert rem to px (assuming 1rem = 16px)
        const top =
          target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 1500); // adjust delay if needed
  }
});

// show all projects by default
renderFilteredProjects(allWorksItems);

const FILTER_BTNS = document.querySelectorAll(".filter-item");
FILTER_BTNS.forEach((btn) => {
  btn.addEventListener("click", () => {
    onFilterClick(btn);
  });
});

function renderFilteredProjects(projects) {
  if (WORK_CONTAINER) {
    WORK_CONTAINER.innerHTML = "";
    projects.map((project) => {
      const projectList = `<div class="col-12" data-aos="zoom-in" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-easing="linear">
            <div class="box d-flex flex-column gap-4 align-items-center mb-5 p-0">
              <div class="box_img-wrap">
                <img src="${project.imgSrc}" alt="Cube-icon" class="img-fluid w-100" loading="lazy" />
              </div>
              <div class="p-3 text-center pb-5">
                <h3 class="box-title text-center font-size-24 line-height-100 mb-3">
                  ${project.name}
                </h3>
                <p class="description space-mono-font clamp-four-lines mb-3 text-center clamp-two-lines">
                ${project.description}
                </p>
                <a href="${project.link}" class="d-flex align-items-center justify-content-center color-main gap-2 mb-3">
                  <img src="./assets/images/Arrow-right-dark.svg" alt="Arrow-right-dark.svg" loading="lazy" />
                  View full project
                </a>
              </div>
            </div>
          </div>`;
      WORK_CONTAINER.insertAdjacentHTML("beforeend", projectList);
    });
  }
}

function switchActiveBtn(btn) {
  const activatedBtn = document.querySelector(".btn.active");
  activatedBtn.classList.remove("active");
  btn.classList.add("active");
}

function onFilterClick(btn) {
  switchActiveBtn(btn);
  const filterTerm = btn.innerText.trim().toLowerCase();
  const filteredProjects =
    filterTerm !== "all work" ? workItems[filterTerm] : allWorksItems;
  renderFilteredProjects(filteredProjects);
}
