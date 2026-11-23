'use strict';

// Based on vCard by codewithsadee (MIT). Trimmed to the features this site uses.

// sidebar toggle for mobile ("Show Contacts")
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});

// page navigation: each nav button shows the article whose data-page matches its label
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    const target = this.textContent.trim().toLowerCase();

    pages.forEach(function (page) {
      page.classList.toggle("active", page.dataset.page === target);
    });

    navigationLinks.forEach(function (other) {
      other.classList.toggle("active", other === link);
    });

    window.scrollTo(0, 0);
  });
});
