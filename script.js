// Start at 1:44:09 time stamp from https://www.youtube.com/watch?v=ldwlOzRvYOU

function toggleMenu()
{
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

function showModal(imageSrc, altText) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('img01');
    var captionText = document.getElementById('caption');

    modalImg.src = "./assets/Art-Work/car_wireframe.png";
    modalImg.alt = altText;
    captionText.innerHTML = altText;
    modal.style.display = 'block';
  }

  function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }


  function showModal1(imageSrc, altText) {
    var modal = document.getElementById('myModal1');
    var modalImg = document.getElementById('img02');
    var captionText = document.getElementById('caption1');

    modalImg.src = "./assets/Art-Work/wine_wireframe.png";
    modalImg.alt = altText;
    captionText.innerHTML = altText;
    modal.style.display = 'block';
  }

  function closeModal1() {
    var modal = document.getElementById('myModal1');
    modal.style.display = 'none';
  }

  
  function showModal2(imageSrc, altText) {
    var modal = document.getElementById('myModal2');
    var modalImg = document.getElementById('img03');
    var captionText = document.getElementById('caption2');

    modalImg.src = "./assets/Art-Work/house_wireframe.png";
    modalImg.alt = altText;
    captionText.innerHTML = altText;
    modal.style.display = 'block';
  }

  function closeModal2() {
    var modal = document.getElementById('myModal2');
    modal.style.display = 'none';
  }


    
  function showModal3(imageSrc, altText) {
    var modal = document.getElementById('myModal3');
    var modalImg = document.getElementById('img04');
    var captionText = document.getElementById('caption3');

    modalImg.src = "./assets/Art-Work/kitchen_wireframe.png";
    modalImg.alt = altText;
    captionText.innerHTML = altText;
    modal.style.display = 'block';
  }

  function closeModal3() {
    var modal = document.getElementById('myModal3');
    modal.style.display = 'none';
  }


  function showModal4(imageSrc, altText) {
    var modal = document.getElementById('myModal4');
    var modalImg = document.getElementById('img05');
    var captionText = document.getElementById('caption4');

    modalImg.src = "./assets/Art-Work/andriod_wireframe.png";
    modalImg.alt = altText;
    captionText.innerHTML = altText;
    modal.style.display = 'block';
  }

  function closeModal4() {
    var modal = document.getElementById('myModal4');
    modal.style.display = 'none';
  }

  function showModal5(imageSrc, altText) {
    var modal = document.getElementById('myModal5');
    var modalImg = document.getElementById('img06');
    var captionText = document.getElementById('caption5');

    modalImg.src = "./assets/Art-Work/terrain_wireframe.png";
    modalImg.alt = altText;
    captionText.innerHTML = altText;
    modal.style.display = 'block';
  }

  function closeModal5() {
    var modal = document.getElementById('myModal5');
    modal.style.display = 'none';
  }

  function showModal6(imageSrc, altText) {
    var modal = document.getElementById('myModal6');
    var modalImg = document.getElementById('img07');
    var captionText = document.getElementById('caption6');

    modalImg.src = "./assets/Art-Work/home_wireframe.png";
    modalImg.alt = altText;
    captionText.innerHTML = altText;
    modal.style.display = 'block';
  }

  function closeModal6() {
    var modal = document.getElementById('myModal6');
    modal.style.display = 'none';
  }

  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
  }

// Load dark mode preference on page load
window.onload = function () {
  const darkModePreference = localStorage.getItem('dark-mode');
  if (darkModePreference === 'enabled') {
    document.body.classList.add('dark-mode');
    document.getElementById('dark-mode-toggle').checked = true;
  }
};

function initScrollReveal() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealTargets = [
    ...document.querySelectorAll("section"),
    ...document.querySelectorAll(".details-container"),
    ...document.querySelectorAll(".contact-info-upper-container"),
    ...document.querySelectorAll(".contact-info-container"),
    ...document.querySelectorAll(".arrow")
  ];

  if (!revealTargets.length) return;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  revealTargets.forEach((element, index) => {
    if (element.classList.contains("reveal-on-scroll")) return;
    element.classList.add("reveal-on-scroll");
    element.style.setProperty("--reveal-delay", `${Math.min((index % 6) * 60, 240)}ms`);
  });

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.12
    }
  );

  revealTargets.forEach((element) => observer.observe(element));
}

function initActiveSectionLinks() {
  const navLinks = [...document.querySelectorAll('a[href^="#"]')];
  const sectionLinks = navLinks.filter((link) => {
    const href = link.getAttribute("href");
    return href && href.length > 1 && document.querySelector(href);
  });

  if (!sectionLinks.length) return;

  const linkMap = new Map();
  sectionLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (!linkMap.has(href)) linkMap.set(href, []);
    linkMap.get(href).push(link);
  });

  const sections = [...new Set(sectionLinks.map((link) => document.querySelector(link.getAttribute("href"))))];

  function setActive(id) {
    sectionLinks.forEach((link) => link.classList.remove("is-active"));
    const matches = linkMap.get(`#${id}`) || [];
    matches.forEach((link) => link.classList.add("is-active"));
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.15, 0.35, 0.55]
      }
    );

    sections.forEach((section) => section && observer.observe(section));
  } else {
    const onScroll = () => {
      let current = sections[0];
      sections.forEach((section) => {
        if (!section) return;
        const top = section.getBoundingClientRect().top;
        if (top <= window.innerHeight * 0.35) current = section;
      });
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
}

function initCardPointerLift() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const cards = document.querySelectorAll(".details-container.color-container, .store-project-card");
  cards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * 4;
      const rotateX = (0.5 - y) * 4;
      card.style.transform = `translateY(-4px) perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

window.addEventListener("load", () => {
  initScrollReveal();
  initActiveSectionLinks();
  initCardPointerLift();
});
