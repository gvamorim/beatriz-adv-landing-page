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

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

function initMobileMenu(): void {
  const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const overlay = document.querySelector<HTMLElement>("[data-menu-overlay]");
  const closeBtn =
    document.querySelector<HTMLButtonElement>("[data-menu-close]");

  if (!toggle || !overlay) return;

  const menu = overlay;
  let lastFocus: HTMLElement | null = null;

  function getOverlayFocusables(): HTMLElement[] {
    return Array.from(
      menu.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
    ).filter((el) => !el.hasAttribute("disabled"));
  }

  function onOverlayKeydown(e: KeyboardEvent): void {
    if (!menu.classList.contains("is-open") || e.key !== "Tab") return;
    const focusables = getOverlayFocusables();
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else if (document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  const open = () => {
    lastFocus =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    closeBtn?.focus();
    document.addEventListener("keydown", onOverlayKeydown);
  };

  const close = () => {
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    document.removeEventListener("keydown", onOverlayKeydown);
    lastFocus?.focus();
    lastFocus = null;
  };

  toggle.addEventListener("click", open);

  closeBtn?.addEventListener("click", close);

  menu.querySelectorAll<HTMLAnchorElement>("a").forEach((a) => {
    a.addEventListener("click", close);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) {
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
