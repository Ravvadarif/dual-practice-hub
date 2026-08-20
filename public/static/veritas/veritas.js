(function () {
  "use strict";

  /* ---------- header scroll shadow ---------- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- mobile menu ---------- */
  var menuToggle = document.querySelector(".menu-toggle");
  var menuClose = document.querySelector(".menu-close");
  var mobileMenu = document.getElementById("veritas-mobile-menu");
  var scrollY = 0;

  function lockScroll() {
    scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = "-" + scrollY + "px";
    document.body.style.width = "100%";
  }
  function unlockScroll() {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo(0, scrollY);
  }

  function openMenu() {
    if (!mobileMenu) return;
    mobileMenu.hidden = false;
    menuToggle && menuToggle.setAttribute("aria-expanded", "true");
    lockScroll();
    var firstLink = mobileMenu.querySelector("a, button");
    if (firstLink) firstLink.focus();
  }
  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.hidden = true;
    menuToggle && menuToggle.setAttribute("aria-expanded", "false");
    unlockScroll();
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      var expanded = menuToggle.getAttribute("aria-expanded") === "true";
      expanded ? closeMenu() : openMenu();
    });
  }
  if (menuClose) menuClose.addEventListener("click", closeMenu);
  if (mobileMenu) {
    mobileMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobileMenu && !mobileMenu.hidden) closeMenu();
  });

  /* ---------- scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- FAQ accordion ---------- */
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    var btn = item.querySelector("button");
    var panel = item.querySelector(".panel");
    if (!btn || !panel) return;
    btn.addEventListener("click", function () {
      var isOpen = btn.getAttribute("aria-expanded") === "true";
      faqItems.forEach(function (other) {
        var oBtn = other.querySelector("button");
        var oPanel = other.querySelector(".panel");
        if (!oBtn || !oPanel) return;
        oBtn.setAttribute("aria-expanded", "false");
        oPanel.hidden = true;
        other.classList.remove("is-open");
      });
      if (!isOpen) {
        btn.setAttribute("aria-expanded", "true");
        panel.hidden = false;
        item.classList.add("is-open");
      }
    });
  });

  /* ---------- services anchor smooth scroll ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href").slice(1);
      var target = id && document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.pushState(null, "", "#" + id);
      }
    });
  });

  /* ---------- contact form ---------- */
  var form = document.getElementById("contact-form");
  if (form) {
    var successBox = document.getElementById("form-success");

    function setError(fieldId, message) {
      var field = document.getElementById(fieldId);
      var errorEl = document.getElementById(fieldId + "-error");
      if (!field) return;
      if (message) {
        field.setAttribute("aria-invalid", "true");
        if (errorEl) { errorEl.textContent = message; errorEl.hidden = false; }
      } else {
        field.removeAttribute("aria-invalid");
        if (errorEl) { errorEl.textContent = ""; errorEl.hidden = true; }
      }
    }

    form.querySelectorAll("input, select, textarea").forEach(function (el) {
      el.addEventListener("input", function () { setError(el.id, ""); });
      el.addEventListener("change", function () { setError(el.id, ""); });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var firstName = document.getElementById("v-first");
      var lastName = document.getElementById("v-last");
      var email = document.getElementById("v-email");
      var phone = document.getElementById("v-phone");
      var area = document.getElementById("v-area");
      var message = document.getElementById("v-message");

      var valid = true;
      var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

      if (!firstName.value.trim()) { setError("v-first", "Please enter your first name."); valid = false; }
      if (!lastName.value.trim()) { setError("v-last", "Please enter your last name."); valid = false; }
      if (!emailRe.test(email.value.trim())) { setError("v-email", "Please enter a valid email address."); valid = false; }
      if (phone.value.trim() && phone.value.replace(/\D/g, "").length < 7) {
        setError("v-phone", "Please enter a reachable phone number.");
        valid = false;
      }
      if (!area.value) { setError("v-area", "Please choose an area of law."); valid = false; }
      if (message.value.trim().length < 20) {
        setError("v-message", "Please give us at least a sentence or two about the matter.");
        valid = false;
      }

      if (!valid) return;

      var nameSpan = document.getElementById("success-name");
      if (nameSpan) nameSpan.textContent = firstName.value.trim();
      form.hidden = true;
      if (successBox) successBox.hidden = false;
    });

    var resetBtn = document.getElementById("form-reset");
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        form.reset();
        form.querySelectorAll("input, select, textarea").forEach(function (el) { setError(el.id, ""); });
        form.hidden = false;
        if (successBox) successBox.hidden = true;
      });
    }
  }
})();
