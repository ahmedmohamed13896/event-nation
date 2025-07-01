window.onload = function () {
  LOADER.style.display = "none";
  const video = document.getElementById("home_video");
  if (video) {
    video.setAttribute("preload", "auto");
    video.load();
  }

  // Video Lazy Loading
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const video = entry.target;
        video.src = video.dataset.src; // Lazy load source
        observer.unobserve(video);
      }
    });
  });
  document.querySelectorAll("video[data-src]").forEach((video) => {
    observer.observe(video);
  });
};

function updateNavbarStyle(navHeight) {
  const isExpanded = NAV_COLLAPSE.classList.contains("show");
  if (window.scrollY >= navHeight || isExpanded) {
    MAIN_NAV.classList.add("background-dark-70");
  } else {
    MAIN_NAV.classList.remove("background-dark-70");
  }
}

document.addEventListener("scroll", function () {
  updateNavbarStyle(NAV_HEIGHT);
});

if (SCROLL_DOWN_ICON) {
  SCROLL_DOWN_ICON.addEventListener("click", function () {
    scrollToSection(GALLERY);
  });
}

// scrollToSection
function scrollToSection(section) {
  const yOffset = section.offsetTop;

  window.scrollTo({
    top: yOffset - MAIN_NAV.clientHeight,
    behavior: "smooth",
  });
}
// Function to change the image
function changeImage(imgContainer) {
  currentIndex = (currentIndex + 1) % getSelectedImages(imgContainer).length;
  const img = imgContainer.querySelector("img");
  img.src = BASE_IMG_URL + getSelectedImages(imgContainer)[currentIndex];
}

// Function to start the image loop on hover
function startImageLoop(imgContainer) {
  intervalId = setInterval(() => {
    changeImage(imgContainer);
  }, 1000);
}

// Function to stop the image loop when hover ends
function stopImageLoop(imgContainer) {
  clearInterval(intervalId);
  const img = imgContainer.querySelector("img");
  img.src = BASE_IMG_URL + getSelectedImages(imgContainer)[0]; // Reset to the first image
  currentIndex = 0;
}

$(".services-list").slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: 3000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

function setEqualHeight() {
  var maxHeight = 0;

  $(".services-list .slick-slide").each(function () {
    var $box = $(this).find(".box");
    $box.css("height", "auto"); // reset height
    var h = $box.outerHeight();
    if (h > maxHeight) {
      maxHeight = h;
    }
  });

  $(".services-list .slick-slide .box").css("height", maxHeight + "px");
}

$(".services-list").on("setPosition", function () {
  setEqualHeight();
});

$(window).on("resize", function () {
  setEqualHeight();
});

function loadProjects() {
  // all project without filtration key
  if (workItems) {
    const firstFourProjects = allWorksItems.slice(0, 4);
    firstFourProjects?.forEach((project) => {
      const projectHtml = `<div
                  class="col-md-6 col-12"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-easing="linear"
                >
                  <div
                    class="box d-flex flex-column gap-4 align-items-center mb-5 p-0"
                  >
                    <img
                      src="${project.imgSrc}"
                      alt="Cube-icon"
                      class="img-fluid w-100"
                      loading="lazy"
                    />
                    <div class="p-3 text-center pb-5">
                      <h3
                        class="box-title text-center font-size-24 line-height-100 mb-3"
                      >
                        ${project.name}
                      </h3>
                      <p
                        class="description space-mono-font clamp-four-lines mb-3 text-center clamp-two-lines"
                      >
                        ${project.fullDescription}
                      </p>
                      <a
                        href="./project-details.html?id=${project.id}"
                        class="d-flex align-items-center justify-content-center color-main gap-2 mb-3"
                      >
                        <img
                          src="./assets/images/Arrow-right-dark.svg"
                          alt="Arrow-right-dark.svg"
                        />
                        View full project
                      </a>
                    </div>
                  </div>
                </div>`;

      WORK_CONTAINER?.insertAdjacentHTML("beforeend", projectHtml);
    });
  }
}

loadProjects();
