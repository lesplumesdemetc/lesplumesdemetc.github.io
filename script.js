document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navigation = document.querySelector("#navigation");

  if (navToggle && navigation) {
    navToggle.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const year = document.querySelector("#year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  function statutClass(statut) {
    const s = String(statut || "").toLowerCase();
    if (s.includes("disponible")) return "disponible";
    if (s.includes("réservation") || s.includes("reservation")) return "reservation";
    if (s.includes("indisponible")) return "indisponible";
    return "confirmer";
  }

  const tbody = document.querySelector("#availability-body");
  const update = document.querySelector("#last-update");

  if (window.disponibilitesConfig && tbody) {
    const config = window.disponibilitesConfig;
    tbody.innerHTML = "";

    if (update && config.derniereMiseAJour) {
      update.textContent = `Mise à jour : ${config.derniereMiseAJour}`;
    }

    config.lignes.forEach((item) => {
      const tr = document.createElement("tr");
      const status = document.createElement("span");
      status.className = `status ${statutClass(item.statut)}`;
      status.textContent = item.statut;

      const cells = [item.produit, item.prix, status, item.note];

      cells.forEach((value) => {
        const td = document.createElement("td");
        if (value instanceof HTMLElement) td.appendChild(value);
        else td.textContent = value || "";
        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });
  }

  // Agrandissement des photos au clic
  const lightbox = document.querySelector("#photo-lightbox");
  const lightboxImg = lightbox?.querySelector(".lightbox-image");
  const lightboxCaption = lightbox?.querySelector(".lightbox-caption");
  const lightboxClose = lightbox?.querySelector(".lightbox-close");
  const zoomSelector = ".gallery img, .race-card img, .photo-stack img, .stamp-card img";

  function openLightbox(img) {
    if (!lightbox || !lightboxImg) return;

    lightboxImg.src = img.currentSrc || img.src;
    lightboxImg.alt = img.alt || "Photo agrandie";

    if (lightboxCaption) {
      const figureCaption = img.closest("figure")?.querySelector("figcaption")?.textContent;
      const cardTitle = img.closest(".race-card")?.querySelector("h3")?.textContent;
      lightboxCaption.textContent = figureCaption || cardTitle || img.alt || "";
      lightboxCaption.style.display = lightboxCaption.textContent ? "block" : "none";
    }

    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightbox || !lightboxImg) return;

    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  document.querySelectorAll(zoomSelector).forEach((img) => {
    img.setAttribute("tabindex", "0");
    img.setAttribute("title", "Cliquer pour agrandir");
  });

  document.addEventListener("click", (event) => {
    const img = event.target.closest(zoomSelector);
    if (img) {
      event.preventDefault();
      openLightbox(img);
      return;
    }

    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    const activeImg = document.activeElement?.matches?.(zoomSelector) ? document.activeElement : null;

    if ((event.key === "Enter" || event.key === " ") && activeImg) {
      event.preventDefault();
      openLightbox(activeImg);
    }

    if (event.key === "Escape") {
      closeLightbox();
    }
  });

  lightboxClose?.addEventListener("click", closeLightbox);
});
