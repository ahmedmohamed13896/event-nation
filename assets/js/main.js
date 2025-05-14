window.onload = function () {
  LOADER.style.display = "none";
};

/////////////////

function updateNavbarStyle(navHeight) {
  const isExpanded = NAV_COLLAPSE.classList.contains("show");
  if (window.scrollY >= navHeight || isExpanded) {
    NAV_BAR.classList.add("fadeInBackground");
  } else {
    NAV_BAR.classList.remove("fadeInBackground");
  }
}

NAV_TOGGLER.addEventListener("click", function (e) {
  if (e.target.classList.contains("show")) {
    NAV_BAR.classList.add("fadeInBackground");
  } else if (window.scrollY < NAV_HEIGHT) {
    NAV_BAR.classList.add("fadeInBackground");
  }
});

if (SCROLL_DOWN_ICON) {
  SCROLL_DOWN_ICON.addEventListener("click", function () {
    GALLERY.scrollIntoView({ behavior: "smooth" });
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
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
