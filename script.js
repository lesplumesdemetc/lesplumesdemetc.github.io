document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  const body = document.querySelector('#availability-body');
  if (body && Array.isArray(DISPONIBILITES)) {
    body.innerHTML = DISPONIBILITES.map(item => `
      <tr>
        <td>${escapeHTML(item.produit)}</td>
        <td>${escapeHTML(item.prix)}</td>
        <td><span class="badge">${escapeHTML(item.statut)}</span></td>
        <td>${escapeHTML(item.note)}</td>
      </tr>
    `).join('');
  }
});

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#039;',
    '"': '&quot;'
  }[char]));
}
