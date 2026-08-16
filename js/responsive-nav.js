/**
 * NEXSHAM TECHNOLOGIES - DYNAMIC RESPONSIVE NAVIGATION SYSTEM
 * - Standardizes responsive navigation toggles with animating burger lines.
 * - Dynamically synchronizes mobile menu links drawer on subpages.
 */

document.addEventListener("DOMContentLoaded", () => {
  initMobileNavigation();
});

function initMobileNavigation() {
  const header = document.querySelector("header, .navbar");
  if (!header) return;

  // 1. Remove pre-existing basic toggle buttons to ensure design consistency
  let oldToggle = header.querySelector(".nav-toggle, .burger, .menu-btn, .hamburger-btn, [data-navbar-toggle-btn]");
  if (oldToggle && !oldToggle.classList.contains("custom-burger")) {
    oldToggle.remove();
  }

  let toggleBtn = header.querySelector(".custom-burger");
  
  if (!toggleBtn) {
    toggleBtn = document.createElement("button");
    toggleBtn.className = "nav-toggle custom-burger";
    toggleBtn.setAttribute("aria-label", "Toggle navigation");
    toggleBtn.innerHTML = `
      <span class="line line-1"></span>
      <span class="line line-2"></span>
      <span class="line line-3"></span>
    `;
    
    // Find ideal position to insert toggle button inside header
    const insertTarget = header.querySelector(".nav-cta, .nav-right, .nav-inner, .nav, .wrap");
    if (insertTarget) {
      insertTarget.appendChild(toggleBtn);
    } else {
      header.appendChild(toggleBtn);
    }
  }

  // 2. Clone header CTAs to display inside mobile menu links
  const navLinks = header.querySelector(".nav-links");
  if (navLinks) {
    const ctaButton = header.querySelector(".nav-cta a.btn, .nav-right a.btn, header .btn-solid, header .btn-outline");
    if (ctaButton && !navLinks.querySelector(".cloned-mobile-cta")) {
      const clonedCta = ctaButton.cloneNode(true);
      clonedCta.classList.add("cloned-mobile-cta", "btn-primary");
      navLinks.appendChild(clonedCta);
    }
  }

  // 3. Dynamically sync links from desktop .nav-links to mobile #mobileMenu
  const legacyMobileMenu = document.getElementById("mobileMenu");
  if (legacyMobileMenu && navLinks) {
    const desktopLinks = navLinks.querySelectorAll("a:not(.cloned-mobile-cta)");
    const mobileLinks = legacyMobileMenu.querySelectorAll("a:not(.btn)");
    
    // Find the logo link to use for Home link href
    const logoLink = header.querySelector("a.brand, a.logo");
    const logoHref = logoLink ? logoLink.getAttribute("href") : "https://www.nexsham.com";

    mobileLinks.forEach((mobileLink) => {
      const mobText = mobileLink.textContent.trim().toLowerCase();
      
      if (mobText === "home") {
        mobileLink.remove();
        return;
      }

      // Find matching desktop link by text comparison
      let matched = false;
      desktopLinks.forEach((deskLink) => {
        const deskText = deskLink.textContent.trim().toLowerCase();
        if (deskText === mobText) {
          mobileLink.setAttribute("href", deskLink.getAttribute("href"));
          if (deskLink.getAttribute("target")) {
            mobileLink.setAttribute("target", deskLink.getAttribute("target"));
          } else {
            mobileLink.removeAttribute("target");
          }
          matched = true;
        }
      });

      // Substring fallback (handles "Career" vs "Careers" or slight differences)
      if (!matched) {
        desktopLinks.forEach((deskLink) => {
          const deskText = deskLink.textContent.trim().toLowerCase();
          if (deskText.includes(mobText) || mobText.includes(deskText)) {
            mobileLink.setAttribute("href", deskLink.getAttribute("href"));
            if (deskLink.getAttribute("target")) {
              mobileLink.setAttribute("target", deskLink.getAttribute("target"));
            } else {
              mobileLink.removeAttribute("target");
            }
          }
        });
      }
    });

    // Sync mobile menu consultation button
    const headerCta = header.querySelector(".nav-cta a.btn, .nav-right a.btn, header .btn-solid, header .btn-outline");
    const mobileCta = legacyMobileMenu.querySelector(".mobile-cta a, a.btn");
    if (headerCta && mobileCta) {
      mobileCta.setAttribute("href", headerCta.getAttribute("href"));
      if (headerCta.getAttribute("target")) {
        mobileCta.setAttribute("target", headerCta.getAttribute("target"));
      } else {
        mobileCta.removeAttribute("target");
      }
    }
  }

  // 4. Handle click event for toggle button
  toggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    header.classList.toggle("nav-open");
    
    if (navLinks) {
      navLinks.classList.toggle("active");
      navLinks.classList.toggle("show");
    }

    // Support legacy index.html mobile menu container if present
    const legacyMobileMenu = document.getElementById("mobileMenu");
    if (legacyMobileMenu) {
      legacyMobileMenu.classList.toggle("open");
    }
  });

  // 5. Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!header.contains(e.target)) {
      header.classList.remove("nav-open");
      if (navLinks) {
        navLinks.classList.remove("active", "show");
      }
      const legacyMobileMenu = document.getElementById("mobileMenu");
      if (legacyMobileMenu) {
        legacyMobileMenu.classList.remove("open");
      }
    }
  });
}
