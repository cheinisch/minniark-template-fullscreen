  document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById("navmenu");
    const mobileNav = document.getElementById("mobilenav");
    const closeBtn = mobileNav?.querySelector("button");

    openBtn?.addEventListener("click", () => {
      mobileNav?.classList.remove("hidden");
    });

    closeBtn?.addEventListener("click", () => {
      mobileNav?.classList.add("hidden");
    });
  });