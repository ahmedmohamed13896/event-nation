window.onload = function () {
  LOADER.style.display = "none";
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
