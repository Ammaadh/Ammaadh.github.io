'use strict';

// Page navigation. Each nav button shows the article whose data-page matches its label.
// (Navigation approach adapted from vCard by codewithsadee, MIT.)
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

function show(target) {
  pages.forEach(function (page) {
    page.classList.toggle("active", page.dataset.page === target);
  });
  navLinks.forEach(function (link) {
    link.classList.toggle("active", link.textContent.trim().toLowerCase() === target);
  });
  window.scrollTo(0, 0);
}

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    const target = link.textContent.trim().toLowerCase();
    show(target);
    history.replaceState(null, "", "#" + target);
  });
});

// open the right page if someone links to e.g. /#projects
const initial = location.hash.slice(1).toLowerCase();
if (initial && document.querySelector('[data-page="' + initial + '"]')) {
  show(initial);
}
