  document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.querySelector('button span.sr-only:contains("Open main menu")')?.parentElement;
    const closeButton = document.querySelector('button span.sr-only:contains("Close menu")')?.parentElement;
    const mobileMenu = document.querySelector('[role="dialog"]');

    // Fallback, falls :contains nicht funktioniert (nicht standardisiert)
    const allButtons = document.querySelectorAll("button");
    let openBtn = null;
    let closeBtn = null;

    allButtons.forEach((btn) => {
      const spanText = btn.querySelector("span")?.textContent?.trim();
      if (spanText === "Open main menu") openBtn = btn;
      if (spanText === "Close menu") closeBtn = btn;
    });

    const openMenu = () => {
      mobileMenu.classList.remove("hidden");
    };

    const closeMenu = () => {
      mobileMenu.classList.add("hidden");
    };

    openBtn?.addEventListener("click", openMenu);
    closeBtn?.addEventListener("click", closeMenu);
  });