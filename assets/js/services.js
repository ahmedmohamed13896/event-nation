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
