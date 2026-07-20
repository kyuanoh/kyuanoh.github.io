const currentPage = document.body.dataset.page;
const navItems = document.querySelectorAll("[data-nav]");

navItems.forEach((item) => {
  if (item.dataset.nav === currentPage) {
    item.classList.add("active");
  }
});

const slider = document.querySelector("[data-slider]");

if (slider) {
  const slides = Array.from(slider.querySelectorAll("[data-slide]"));
  const prevButton = slider.querySelector("[data-slider-prev]");
  const nextButton = slider.querySelector("[data-slider-next]");
  const indicators = document.querySelectorAll(".ongoing-indicator span");
  let currentIndex = slides.findIndex((slide) => slide.classList.contains("active"));

  if (currentIndex < 0) {
    currentIndex = 0;
    slides[0]?.classList.add("active");
  }

  const renderSlide = (index) => {
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("active", slideIndex === index);
    });

    indicators.forEach((indicator, indicatorIndex) => {
      indicator.classList.toggle("is-active", indicatorIndex === index);
    });
  };

  const showPreviousSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    renderSlide(currentIndex);
  };

  const showNextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    renderSlide(currentIndex);
  };

  prevButton?.addEventListener("click", showPreviousSlide);
  nextButton?.addEventListener("click", showNextSlide);
}
