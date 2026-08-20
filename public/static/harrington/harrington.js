(function () {
  "use strict";

  /* ---------------- Mobile menu ---------------- */
  var toggle = document.querySelector("[data-menu-toggle]");
  var menu = document.getElementById("harrington-mobile-menu");
  var closeBtn = document.querySelector("[data-menu-close]");
  var backdrop = menu ? menu.querySelector(".backdrop") : null;
  var lastFocused = null;

  function openMenu() {
    if (!menu) return;
    lastFocused = document.activeElement;
    menu.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    if (closeBtn) closeBtn.focus();
  }

  function closeMenu() {
    if (!menu) return;
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  if (toggle && menu) {
    toggle.addEventListener("click", openMenu);
    if (closeBtn) closeBtn.addEventListener("click", closeMenu);
    if (backdrop) backdrop.addEventListener("click", closeMenu);
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !menu.hidden) closeMenu();
    });
  }

  /* ---------------- Scroll reveal ---------------- */
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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------------- FAQ accordion ---------------- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var btn = item.querySelector(".faq-q");
    var panel = item.querySelector(".faq-panel");
    if (!btn || !panel) return;
    btn.addEventListener("click", function () {
      var isOpen = btn.getAttribute("aria-expanded") === "true";
      document.querySelectorAll(".faq-item").forEach(function (other) {
        var otherBtn = other.querySelector(".faq-q");
        var otherPanel = other.querySelector(".faq-panel");
        if (!otherBtn || !otherPanel) return;
        if (other !== item) {
          otherBtn.setAttribute("aria-expanded", "false");
          otherPanel.hidden = true;
          var oi = otherBtn.querySelector(".faq-icon");
          if (oi) oi.textContent = "+";
        }
      });
      btn.setAttribute("aria-expanded", String(!isOpen));
      panel.hidden = isOpen;
      var icon = btn.querySelector(".faq-icon");
      if (icon) icon.textContent = isOpen ? "+" : "\u2212";
    });
  });

  /* ---------------- Services anchor active state ---------------- */
  var indexLinks = document.querySelectorAll(".services-index a[href^='#']");
  if (indexLinks.length) {
    var sections = Array.prototype.slice
      .call(indexLinks)
      .map(function (link) {
        return document.getElementById(link.getAttribute("href").slice(1));
      })
      .filter(Boolean);

    function setActive() {
      var scrollPos = window.scrollY + 140;
      var current = sections[0];
      sections.forEach(function (sec) {
        if (sec.offsetTop <= scrollPos) current = sec;
      });
      indexLinks.forEach(function (link) {
        link.classList.toggle("active", current && link.getAttribute("href") === "#" + current.id);
      });
    }
    window.addEventListener("scroll", setActive, { passive: true });
    setActive();
  }

  /* ---------------- Contact form ---------------- */
  var form = document.getElementById("harrington-contact-form");
  if (form) {
    var successEl = document.getElementById("harrington-form-success");
    var radios = form.querySelectorAll(".radio-group input[type='radio']");
    radios.forEach(function (radio) {
      radio.addEventListener("change", function () {
        radios.forEach(function (r) {
          r.closest("label").classList.toggle("selected", r.checked);
        });
      });
    });

    function setError(field, message) {
      var errorEl = document.getElementById(field.id + "-error");
      if (message) {
        field.setAttribute("aria-invalid", "true");
        if (errorEl) errorEl.textContent = message;
      } else {
        field.removeAttribute("aria-invalid");
        if (errorEl) errorEl.textContent = "";
      }
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;

      var firstName = form.querySelector("#h-first");
      var lastName = form.querySelector("#h-last");
      var email = form.querySelector("#h-email");
      var phone = form.querySelector("#h-phone");
      var service = form.querySelector("#h-service");
      var message = form.querySelector("#h-message");
      var consent = form.querySelector("#h-consent");

      if (!firstName.value.trim()) { setError(firstName, "Please enter your first name."); valid = false; }
      else setError(firstName, "");

      if (!lastName.value.trim()) { setError(lastName, "Please enter your last name."); valid = false; }
      else setError(lastName, "");

      var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!emailRe.test(email.value.trim())) { setError(email, "Please enter a valid email address."); valid = false; }
      else setError(email, "");

      if (phone.value.trim() && phone.value.replace(/\D/g, "").length < 7) {
        setError(phone, "Please enter a reachable phone number.");
        valid = false;
      } else setError(phone, "");

      if (!service.value) { setError(service, "Please select the service you need."); valid = false; }
      else setError(service, "");

      if (message.value.trim().length < 20) {
        setError(message, "Please describe your matter in at least 20 characters.");
        valid = false;
      } else setError(message, "");

      if (!consent.checked) {
        setError(consent, "Please confirm you agree to the privacy policy.");
        valid = false;
      } else setError(consent, "");

      if (!valid) return;

      var nameSpan = document.getElementById("harrington-success-name");
      if (nameSpan) nameSpan.textContent = firstName.value.trim();
      form.hidden = true;
      if (successEl) successEl.hidden = false;
    });

    var resetBtn = document.getElementById("harrington-form-reset");
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        form.reset();
        radios.forEach(function (r) { r.closest("label").classList.toggle("selected", r.checked); });
        form.querySelectorAll("[aria-invalid]").forEach(function (f) { f.removeAttribute("aria-invalid"); });
        form.querySelectorAll(".error-text").forEach(function (e) { e.textContent = ""; });
        form.hidden = false;
        if (successEl) successEl.hidden = true;
      });
    }
  }
})();
