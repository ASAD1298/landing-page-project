// ============================
// Scroll zoom video container
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const videoContainer = document.querySelector(".video-container");
  if (videoContainer) {
    window.addEventListener("scroll", () => {
      const rect = videoContainer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollY = window.scrollY;
        const zoomFactor = 1 + scrollY * 0.0003;
        const maxZoom = 1.2;
        videoContainer.style.transform = `scaleX(${Math.min(zoomFactor, maxZoom)})`;
      }
    });
  }
});

// ============================
// Card fade-in animation
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.2 });
  cards.forEach(card => observer.observe(card));
});

// Fade-card (with toggle back)
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".fade-card");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0.2 });
  cards.forEach(card => observer.observe(card));
});

// ============================
// Shrink header on scroll (subtle)
// ============================
window.addEventListener("scroll", () => {
  const header = document.getElementById("mainHeader");
  const headerInner = header?.querySelector(".header-inner");
  if (!header || !headerInner) return;

  if (window.scrollY > 40) {
    headerInner.classList.remove("py-6", "md:py-6");
    headerInner.classList.add("py-3", "md:py-4");
    header.classList.add("shadow-md", "backdrop-blur-md");
  } else {
    headerInner.classList.add("py-6", "md:py-6");
    headerInner.classList.remove("py-3", "md:py-4");
    header.classList.remove("shadow-md", "backdrop-blur-md");
  }
});


// ============================
// Counter animation (simple)
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const increment = target / 100;
    const updateCounter = () => {
      count += increment;
      if (count < target) {
        counter.textContent = Math.floor(count);
        requestAnimationFrame(updateCounter);
      } else {
        if (counter.getAttribute("data-target") === "33") counter.textContent = target + "h";
        else if (counter.getAttribute("data-target") === "190") counter.textContent = target + "+";
        else if (counter.getAttribute("data-target") === "24") counter.textContent = target + "+";
      }
    };
    updateCounter();
  });
});

// ============================
// Scroll zoom for community video
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const videoContainer = document.getElementById("videoContainer");
  if (!videoContainer) return;
  window.addEventListener("scroll", () => {
    const rect = videoContainer.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.top < windowHeight && rect.bottom > 0) {
      const scrollY = Math.min(windowHeight, Math.max(0, windowHeight - rect.top));
      const zoomFactor = 1 + (scrollY / windowHeight) * 0.2; // max 1.2x
      videoContainer.style.transform = `scale(${zoomFactor})`;
    }
  });
});

// ============================
// Play / Pause Button
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("communityVideo");
  const playBtn = document.getElementById("playBtn");
  const playIcon = document.getElementById("playIcon");
  const pauseIcon = document.getElementById("pauseIcon");

  if (video && playBtn) {
    playBtn.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        if (playIcon) playIcon.classList.add("hidden");
        if (pauseIcon) pauseIcon.classList.remove("hidden");
      } else {
        video.pause();
        if (pauseIcon) pauseIcon.classList.add("hidden");
        if (playIcon) playIcon.classList.remove("hidden");
      }
    });
  }
});

// ============================
// Mobile menu toggle
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
});

// ============================
// Counter animation (with prefix/suffix)
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  counters.forEach(counter => {
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const prefix = counter.getAttribute("data-prefix") || "";
      const suffix = counter.getAttribute("data-suffix") || "";
      const current = +counter.innerText.replace(/\D/g, "") || 0;
      const increment = target / 100;
      if (current < target) {
        counter.innerText = prefix + Math.ceil(current + increment).toLocaleString() + suffix;
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = prefix + target.toLocaleString() + suffix;
      }
    };
    updateCounter();
  });
});

// ============================
// Tabs (One-time / Installments) - MERGED VERSION
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const tabOne = document.getElementById("tabOneTime");
  const tabInst = document.getElementById("tabInstallments");
  const paneOne = document.getElementById("paneOnetime");
  const paneInst = document.getElementById("paneInstallments");

  if (!tabOne || !tabInst || !paneOne || !paneInst) return;

  function showOneTime() {
    tabOne.setAttribute("aria-selected", "true");
    tabInst.setAttribute("aria-selected", "false");

    tabOne.classList.add("bg-[#FCF1ED]", "text-black");
    tabOne.classList.remove("bg-[#152E3D]", "text-[#EFEFF2]");

    tabInst.classList.add("bg-[#152E3D]", "text-[#EFEFF2]");
    tabInst.classList.remove("bg-[#FCF1ED]", "text-black");

    paneOne.classList.remove("hidden");
    paneOne.classList.add("w--tab-active");
    paneInst.classList.add("hidden");
    paneInst.classList.remove("w--tab-active");
  }

  function showInstallments() {
    tabInst.setAttribute("aria-selected", "true");
    tabOne.setAttribute("aria-selected", "false");

    tabInst.classList.add("bg-[#FCF1ED]", "text-black");
    tabInst.classList.remove("bg-[#152E3D]", "text-[#EFEFF2]");

    tabOne.classList.add("bg-[#152E3D]", "text-[#EFEFF2]");
    tabOne.classList.remove("bg-[#FCF1ED]", "text-black");

    paneOne.classList.add("hidden");
    paneOne.classList.remove("w--tab-active");
    paneInst.classList.remove("hidden");
    paneInst.classList.add("w--tab-active");
  }

  tabOne.addEventListener("click", e => { e.preventDefault(); showOneTime(); });
  tabInst.addEventListener("click", e => { e.preventDefault(); showInstallments(); });

  // Default
  showOneTime();
});
// ============================
// FAQ Toggle
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq_item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq_question");
    const answer = item.querySelector(".faq_answer");

    if (question && answer) {
      question.addEventListener("click", () => {
        answer.classList.toggle("hidden");
      });
    }
  });
});