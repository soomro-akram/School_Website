/* ==========================================================================
   GBHSS Padidan — Interactivity
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---- Mobile navigation toggle ---------------------------------------- */
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close the mobile menu after a link is tapped
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Highlight active nav link on scroll ------------------------------ */
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

  function setActiveLink() {
    var scrollPos = window.scrollY + 140;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var bottom = top + section.offsetHeight;
      var id = section.getAttribute('id');
      var link = document.querySelector('.main-nav a[href="#' + id + '"]');
      if (!link) return;
      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach(function (l) { l.classList.remove('active'); });
        link.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();

  /* ---- Scroll reveal (IntersectionObserver) ----------------------------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: show everything immediately
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Back-to-top button ------------------------------------------------ */
  var toTop = document.getElementById('toTop');
  if (toTop) {
    window.addEventListener('scroll', function () {
      toTop.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });

    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---- Admission form (demo submit handling) ----------------------------- */
  var admissionForm = document.getElementById('admissionForm');
  var formSuccess = document.getElementById('formSuccess');
  if (admissionForm && formSuccess) {
    admissionForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!admissionForm.checkValidity()) {
        admissionForm.reportValidity();
        return;
      }
      formSuccess.style.display = 'block';
      admissionForm.reset();
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  /* ---- Contact form (demo submit handling) -------------------------------- */
  var contactForm = document.getElementById('contactForm');
  var contactSuccess = document.getElementById('contactSuccess');
  if (contactForm && contactSuccess) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }
      contactSuccess.style.display = 'block';
      contactForm.reset();
      contactSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  /* ---- Footer year -------------------------------------------------------- */
  var yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

});

window.onload = function () {

    let loggedIn = localStorage.getItem("loggedIn");

    if (loggedIn === "true") {

        document.getElementById("loginMenu").style.display = "none";

        document.getElementById("admissionMenu").style.display = "block";

        document.getElementById("profileMenu").style.display = "block";

        document.getElementById("logoutMenu").style.display = "block";

        document.getElementById("admissions").style.display = "block";

        document.getElementById("heroAdmissionBtn").style.display = "inline-flex";

    }

}

function logout(){

    localStorage.removeItem("loggedIn");

    location.reload();

}
