const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

function initRevealObserver(): void {
  const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (targets.length === 0) return;

  if (reduceMotion) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.delay ?? "0");
          if (delay > 0) {
            el.style.transitionDelay = `${delay}ms`;
          }
          el.classList.add("is-visible");
          obs.unobserve(el);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
  );

  targets.forEach((el) => observer.observe(el));
}

function initActiveSectionTracker(): void {
  const sectionIds = [
    "inicio",
    "fundadora",
    "servicos",
    "palestras",
    "nr1",
    "contato",
  ];
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter((el): el is HTMLElement => el !== null);

  if (sections.length === 0) return;

  const links =
    document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach((link) => {
            const matches = link.dataset.navLink === id;
            link.classList.toggle("is-active", matches);
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
  );

  sections.forEach((s) => observer.observe(s));
}

function initMobileMenu(): void {
  const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const overlay = document.querySelector<HTMLElement>("[data-menu-overlay]");
  const closeBtn =
    document.querySelector<HTMLButtonElement>("[data-menu-close]");

  if (!toggle || !overlay) return;

  const open = () => {
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  toggle.addEventListener("click", open);
  closeBtn?.addEventListener("click", close);

  overlay.querySelectorAll<HTMLAnchorElement>("a").forEach((a) => {
    a.addEventListener("click", close);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) {
      close();
    }
  });
}

function initNavScrollShadow(): void {
  const nav = document.querySelector<HTMLElement>("[data-nav]");
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 12) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function init(): void {
  initRevealObserver();
  initActiveSectionTracker();
  initMobileMenu();
  initNavScrollShadow();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
