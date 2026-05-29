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

    const cells = [
      item.produit,
      item.prix,
      status,
      item.note
    ];

    cells.forEach((value) => {
      const td = document.createElement("td");
      if (value instanceof HTMLElement) td.appendChild(value);
      else td.textContent = value || "";
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });
}
