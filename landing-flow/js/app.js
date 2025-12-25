const toTop = document.querySelector(".to-top");

if (toTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) toTop.classList.add("is-visible");
    else toTop.classList.remove("is-visible");
  });
}
const modal = document.querySelector("#contactModal");
const openBtn = document.querySelector("[data-modal-open]");
const closeBtns = modal ? modal.querySelectorAll("[data-modal-close]") : [];
const form = document.querySelector("#modalForm");
const hint = document.querySelector("#modalHint");

let lastFocusedEl = null;

function openModal() {
  if (!modal) return;

  lastFocusedEl = document.activeElement;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  if (firstInput) firstInput.focus();
}

function closeModal() {
  if (!modal) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (lastFocusedEl) lastFocusedEl.focus();
}

if (openBtn) {
  openBtn.addEventListener("click", openModal);
}

closeBtns.forEach((btn) => btn.addEventListener("click", closeModal));

document.addEventListener("keydown", (e) => {
  if (!modal) return;
  const isOpen = modal.classList.contains("is-open");
  if (isOpen && e.key === "Escape") closeModal();
});

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (hint) {
      hint.textContent = "✅ Форма відправлена (демо). Тут можна підключити реальну відправку на сервер.";
    }

    form.reset();

    setTimeout(closeModal, 900);
  });
}