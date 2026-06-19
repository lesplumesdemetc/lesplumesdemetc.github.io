document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    fr: {
      "brand.title": "Les Plumes de M & C",
      "brand.subtitle": "Basse-cour familiale",
      "nav.races": "Nos races",
      "nav.eggs": "Œufs fécondés",
      "nav.availability": "Disponibilités",
      "nav.gallery": "Galerie",
      "nav.contact": "Contact",
      "hero.eyebrow": "Quartier de Cœuilly • Champigny-sur-Marne 94500",
      "hero.title1": "Œufs fécondés",
      "hero.title2": "Poules Pékin",
      "hero.title3": "Poules Faverolles FR",
      "hero.lead": "Petit élevage familial en région parisienne, avec des sujets élevés avec soin dans un espace calme, propre et naturel.",
      "hero.button1": "Voir les disponibilités",
      "hero.button2": "Nous contacter",
      "story.eyebrow": "Notre histoire",
      "story.heading": "Un élevage simple, familial et suivi",
      "story.p1": "Les Plumes de M & C est né d’une première éclosion réalisée en famille, pour faire découvrir aux enfants comment naissent les poussins et leur apprendre, avec douceur, le respect du vivant, la patience et le sens des responsabilités. Ce moment éducatif s’est peu à peu transformé en une véritable passion familiale pour les poules d’ornement et la basse-cour.",
      "story.p2": "Aujourd’hui, nous souhaitons à notre tour transmettre cette passion et ces valeurs à d’autres familles, en proposant des œufs fécondés, des poussins et des sujets de basse-cour élevés avec soin. Notre démarche reste volontairement familiale et à taille humaine, privilégiant les échanges directs, les conseils et le bien-être des animaux.",
      "story.p3": "Le nom « Les Plumes de M & C » est lui aussi un clin d’œil à notre histoire familiale, puisqu’il reprend simplement les initiales de nos enfants, sans pour autant révéler leur identité.",
      "story.tag1": "Élevage familial",
      "story.tag2": "Paiement sur place",
      "story.tag3": "Contact par mail",
      "story.caption": "Timbre utilisé pour authentifier nos commandes d’œufs fécondés.",
      "races.eyebrow": "Nos races",
      "races.heading": "Pékin & Faverolles",
      "races.intro": "Deux races décoratives, attachantes, et très appréciées dans une basse-cour familiale.",
      "races.pekin.label": "Race d’ornement",
      "races.pekin.title": "Pékin",
      "races.pekin.text": "La Pékin est une petite poule d’ornement appréciée pour sa silhouette ronde, ses pattes emplumées et son allure très décorative. Elle pond en général entre 100 et 150 œufs par an. C’est aussi une couveuse d’exception, réputée pour accepter très facilement des œufs d’autres races sous elle.",
      "races.faverolles.label": "Race française",
      "races.faverolles.title": "Faverolles",
      "races.faverolles.text": "La Faverolles est une belle race traditionnelle, reconnaissable à sa barbe, son plumage généreux et son allure rustique. Elle pond environ 150 à 200 œufs par an. Elle est aussi très reconnue pour la qualité de sa viande, appréciée jusque dans le monde de la cuisine et des chefs.",
      "eggs.eyebrow": "Œufs fécondés",
      "eggs.heading": "Des œufs fécondés de pure race",
      "eggs.text1": "Les œufs fécondés sont proposés selon la ponte, la saison et la disponibilité des reproducteurs. Ils sont préparés avec soin pour un retrait sur place après échange par mail.",
      "eggs.text2": "Le résultat d’incubation dépend ensuite de plusieurs éléments : durée de conservation, transport, couveuse, température, humidité et retournement des œufs.",
      "eggs.priceLabel": "Prix :",
      "eggs.priceValue": "2 € l’unité",
      "eggs.racesLabel": "Races :",
      "eggs.racesValue": "Pékin ou Faverolles",
      "eggs.bookingLabel": "Réservation :",
      "eggs.bookingValue": "par mail uniquement",
      "eggs.paymentLabel": "Paiement :",
      "eggs.paymentValue": "sur place uniquement",
      "eggs.caption1": "Pékin avec ses poussins",
      "eggs.caption2": "Faverolles avec ses poussins",
      "eggs.caption3": "Poussins Pékin d’environ 1 mois",
      "availability.eyebrow": "Tarifs et disponibilités",
      "availability.heading": "Disponibilités",
      "availability.intro": "Les disponibilités changent selon la saison, les naissances et les sujets prêts au départ.",
      "availability.link": "Confirmer les disponibilités",
      "availability.table.product": "Produit",
      "availability.table.price": "Prix",
      "availability.table.detail": "Détail",
      "availability.table.status": "Statut",
      "availability.loading": "Chargement des disponibilités…",
      "gallery.eyebrow": "Galerie",
      "gallery.heading": "Quelques images de notre basse-cour",
      "gallery.intro": "Cliquez sur une photo pour l’agrandir et voir les détails.",
      "gallery.caption1": "Poule Pékin",
      "gallery.caption2": "Poule Faverolles",
      "gallery.caption3": "Jeune Coq Pékin",
      "gallery.caption4": "Poussin Pékin gris",
      "gallery.caption5": "Portrait Faverolles",
      "gallery.caption6": "Coq Soie noir",
      "tips.eyebrow": "Avant achat",
      "tips.heading": "Quelques conseils simples",
      "tips.card1.title": "Préparer l’accueil",
      "tips.card1.text": "Prévoir un abri sec, un espace sécurisé, de l’eau propre, une alimentation adaptée et une protection contre les prédateurs.",
      "tips.card2.title": "Anticiper l’entretien",
      "tips.card2.text": "Une basse-cour demande un minimum de suivi : nettoyage, surveillance, alimentation régulière et espace suffisant.",
      "tips.card3.title": "Réserver simplement",
      "tips.card3.text": "Un mail suffit pour demander les disponibilités du moment et organiser un retrait sur place.",
      "contact.eyebrow": "Contact",
      "contact.heading": "Réservation et renseignements",
      "contact.text": "Pour connaître les disponibilités actuelles ou réserver, envoyez simplement un mail. Un échange préalable permet de confirmer les disponibilités avant tout passage sur place.",
      "contact.locationLabel": "Localisation",
      "contact.location1": "Quartier de Cœuilly",
      "contact.location2": "Champigny-sur-Marne 94500",
      "contact.emailLabel": "Email",
      "contact.paymentLabel": "Paiement",
      "contact.paymentTextLine1": "Espèces, Wero, PayPal",
      "contact.paymentTextLine2": "Paiement sur place UNIQUEMENT",
      "footer.backToTop": "Retour en haut",
      "footer.text": "© {year} Les Plumes de M & C — Basse-cour familiale à Champigny-sur-Marne.",
      "meta.description": "Petit élevage familial à Champigny-sur-Marne : œufs fécondés, poules Pékin, Faverolles, poussins et renseignements par mail.",
      "availability.updated": "Mise à jour : {date}",
      "mail.subject.contact": "Demande de renseignements - Les Plumes de M & C",
      "mail.subject.availability": "Demande de disponibilités - Les Plumes de M & C",
      "lightbox.title": "Cliquer pour agrandir"
    },
    pt: {
      "brand.title": "Les Plumes de M & C",
      "brand.subtitle": "Criação familiar",
      "nav.races": "As nossas raças",
      "nav.eggs": "Ovos galados",
      "nav.availability": "Disponibilidades",
      "nav.gallery": "Galeria",
      "nav.contact": "Contacto",
      "hero.eyebrow": "Cœuilly • Champigny-sur-Marne 94500",
      "hero.title1": "Ovos galados",
      "hero.title2": "Galinhas Pékin",
      "hero.title3": "Faverolles FR",
      "hero.lead": "Criação familiar modesta na região de Paris, com aves criadas com cuidado num espaço calmo, limpo e natural.",
      "hero.button1": "Ver disponibilidades",
      "hero.button2": "Contactar",
      "story.eyebrow": "A nossa história",
      "story.heading": "Uma criação simples, familiar e cuidada",
      "story.p1": "“Les Plumes de M & C” nasceu de uma primeira incubação bem-sucedida realizada em família, para mostrar às crianças como nascem os pintainhos e ensinar-lhes desta forma e com delicadeza, o respeito pela vida, a paciência e o sentido de responsabilidade. Esse momento educativo transformou-se, pouco a pouco, numa verdadeira paixão familiar pelas galinhas e a sua reprodução.",
      "story.p2": "Hoje, queremos também transmitir esta paixão e estes valores a outras famílias, propondo ovos galados, pintos e galinhas adultas. A nossa abordagem mantém-se familiar e à escala humana, privilegiando o contacto direto, os conselhos e o bem-estar dos animais.",
      "story.p3": "O nome francês « Les Plumes de M & C », que poderíamos traduzir por « As Penas de galinha de M & C », é uma referência à nossa história familiar: faz simplesmente alusão às iniciais das nossas crianças, sem revelar a sua identidade.",
      "story.tag1": "Criação familiar",
      "story.tag2": "Pagamento no local",
      "story.tag3": "Contacto por e-mail",
      "story.caption": "Carimbo utilizado para autenticar as nossas encomendas de ovos galados.",
      "races.eyebrow": "As nossas raças",
      "races.heading": "Pékin & Faverolles",
      "races.intro": "Duas raças decorativas, cativantes e muito apreciadas numa capoeira familiar.",
      "races.pekin.label": "Raça ornamental",
      "races.pekin.title": "Pékin",
      "races.pekin.text": "A galinha Pékin é uma coquicha de pequeno porte, com patas emplumadas. Põe geralmente entre 100 e 150 ovos por ano. É também uma excelente chocadeira, muito apreciada pela sua capacidade de incubar e criar pintainhos, aceitando facilmente ovos de outras raças.",
      "races.faverolles.label": "Raça francesa",
      "races.faverolles.title": "Faverolles",
      "races.faverolles.text": "A Faverolles é uma bela raça tradicional, reconhecível pela barba, pela plumagem abundante e pelo aspeto rústico. Põe cerca de 150 a 200 ovos por ano. É também muito reconhecida pela qualidade da sua carne, apreciada até no mundo da cozinha e pelos chefes de cozinha.",
      "eggs.eyebrow": "Ovos galados",
      "eggs.heading": "Ovos galados de pura raça",
      "eggs.text1": "Os ovos galados são propostos para venda conforme a postura de ambas as raças, a época do ano e a disponibilidade. São preparados com cuidado para recolha no local, após reserva efetuada por e-mail.",
      "eggs.text2": "O resultado da incubação depende depois de vários fatores: tempo de conservação, transporte, incubadora, temperatura, humidade e manuseamento dos ovos.",
      "eggs.priceLabel": "Preço :",
      "eggs.priceValue": "2 € por unidade",
      "eggs.racesLabel": "Raças :",
      "eggs.racesValue": "Pékin ou Faverolles",
      "eggs.bookingLabel": "Reserva :",
      "eggs.bookingValue": "apenas por e-mail",
      "eggs.paymentLabel": "Pagamento :",
      "eggs.paymentValue": "apenas no local",
      "eggs.caption1": "Pékin com os seus pintainhos",
      "eggs.caption2": "Faverolles com os seus pintainhos",
      "eggs.caption3": "Pintainhos Pékin com cerca de 1 mês",
      "availability.eyebrow": "Tarifas e disponibilidades",
      "availability.heading": "Disponibilidades",
      "availability.intro": "As disponibilidades mudam conforme a época, os nascimentos e os exemplares prontos para sair.",
      "availability.link": "Confirmar disponibilidades",
      "availability.table.product": "Produto",
      "availability.table.price": "Preço",
      "availability.table.detail": "Detalhe",
      "availability.table.status": "Estado",
      "availability.loading": "A carregar disponibilidades…",
      "gallery.eyebrow": "Galeria",
      "gallery.heading": "Algumas imagens das nossas galinhas",
      "gallery.intro": "Clique numa fotografia para a ampliar e ver os detalhes.",
      "gallery.caption1": "Galinha Pékin",
      "gallery.caption2": "Galinha Faverolles",
      "gallery.caption3": "Jovem galo Pékin",
      "gallery.caption4": "Pintainho Pékin cinzento",
      "gallery.caption5": "Detalhe da barba Faverolles",
      "gallery.caption6": "Galo de Seda preto",
      "tips.eyebrow": "Antes da compra",
      "tips.heading": "Alguns conselhos simples",
      "tips.card1.title": "Preparar a chegada",
      "tips.card1.text": "Prever um abrigo seco, um espaço seguro, água limpa, alimentação adaptada e proteção contra predadores.",
      "tips.card2.title": "Antecipar a manutenção",
      "tips.card2.text": "Uma capoeira exige um mínimo de acompanhamento: limpeza, vigilância, alimentação regular e espaço suficiente.",
      "tips.card3.title": "Reservar com simplicidade",
      "tips.card3.text": "Basta enviar um e-mail para pedir as disponibilidades do momento e organizar a recolha no local.",
      "contact.eyebrow": "Contacto",
      "contact.heading": "Reserva e informações",
      "contact.text": "Para saber as disponibilidades atuais ou reservar, basta enviar um e-mail. A recolha é organizada apenas depois da confirmação das disponibilidades por e-mail.",
      "contact.locationLabel": "Localização",
      "contact.location1": "Cœuilly",
      "contact.location2": "Champigny-sur-Marne 94500",
      "contact.emailLabel": "E-mail",
      "contact.paymentLabel": "Pagamento",
      "contact.paymentTextLine1": "Numerário, Wero, PayPal",
      "contact.paymentTextLine2": "Pagamento apenas no local",
      "footer.backToTop": "Voltar ao topo",
      "footer.text": "© {year} Les Plumes de M & C — Criação familiar em Champigny-sur-Marne.",
      "meta.description": "Criação familiar modesta em Champigny-sur-Marne: ovos galados, galinhas Pékin, Faverolles, pintainhos e informações por e-mail.",
      "availability.updated": "Atualizado em : {date}",
      "mail.subject.contact": "Pedido de informações - Les Plumes de M & C",
      "mail.subject.availability": "Pedido de disponibilidades - Les Plumes de M & C",
      "lightbox.title": "Clique para ampliar"
    }
  };

  const navToggle = document.querySelector('.nav-toggle');
  const navigation = document.querySelector('#navigation');
  if (navToggle && navigation) {
    navToggle.addEventListener('click', () => {
      const isOpen = navigation.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    navigation.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navigation.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const year = new Date().getFullYear();
  const yearNode = document.querySelector('#year');
  if (yearNode) yearNode.textContent = year;

  const tbody = document.querySelector('#availability-body');
  const update = document.querySelector('#last-update');
  const footerText = document.querySelector('#footer-text');
  const contactLinks = document.querySelectorAll('.contact-mail-link');
  const availabilityLink = document.querySelector('.availability-mail-link');
  const langButtons = document.querySelectorAll('.lang-btn');
  const storageKey = 'les-plumes-lang';
  const googleSheetsCsvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTOZ2wnheRMN90L8EB11IU64iP5xhlZJYQVJfXeJEds5ZLXTmv5Ly73xDoWemhwlhogcSN5zcIqSvXj/pub?gid=0&single=true&output=csv';

  function translate(key, lang) {
    return translations[lang]?.[key] ?? translations.fr[key] ?? key;
  }

  function setMailSubjects(lang) {
    const contactSubject = encodeURIComponent(translate('mail.subject.contact', lang));
    const availabilitySubject = encodeURIComponent(translate('mail.subject.availability', lang));
    contactLinks.forEach((link) => {
      link.href = `mailto:Pauloedgar21@free.fr?subject=${contactSubject}`;
    });
    if (availabilityLink) availabilityLink.href = `mailto:Pauloedgar21@free.fr?subject=${availabilitySubject}`;
  }

  function statutClass(statut) {
    const s = String(statut || '').toLowerCase();
    if (s.includes('dispo') && !s.includes('indispo')) return 'disponible';
    if (s.includes('indispo')) return 'indisponible';
    return 'confirmer';
  }

  function currentDateForLang(lang) {
    return new Intl.DateTimeFormat(lang === 'pt' ? 'pt-PT' : 'fr-FR').format(new Date());
  }

  function parseCsv(text) {
    const rows = [];
    let row = [];
    let cell = '';
    let inQuotes = false;
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const next = text[i + 1];
      if (char === '"' && inQuotes && next === '"') {
        cell += '"';
        i++;
      } else if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        row.push(cell.trim());
        cell = '';
      } else if ((char === '\n' || char === '\r') && !inQuotes) {
        if (char === '\r' && next === '\n') i++;
        row.push(cell.trim());
        if (row.some((value) => value !== '')) rows.push(row);
        row = [];
        cell = '';
      } else {
        cell += char;
      }
    }
    row.push(cell.trim());
    if (row.some((value) => value !== '')) rows.push(row);
    return rows;
  }

  function csvRowsToAvailability(rows) {
    if (!rows || rows.length < 2) return [];
    const headers = rows[0].map((h) => h.trim().toLowerCase());
    return rows.slice(1).map((row) => {
      const data = {};
      headers.forEach((header, index) => { data[header] = row[index] || ''; });
      return {
        produit: { fr: data.produit_fr || data.produit || '', pt: data.produit_pt || data.produto_pt || data.produto || '' },
        prix: data.prix || data.preco || data['preço'] || '',
        detail: {
          fr: data.detail_fr || data['détail_fr'] || data.detail || data['détail'] || '',
          pt: data.detail_pt || data.detalhe_pt || data.detalhe || ''
        },
        statut: { fr: data.statut_fr || data.statut || '', pt: data.statut_pt || data.estado_pt || data.estado || '' }
      };
    }).filter((item) => item.produit.fr || item.produit.pt);
  }

  async function loadAvailabilityFromGoogleSheets() {
    try {
      const response = await fetch(googleSheetsCsvUrl, { cache: 'no-store' });
      if (!response.ok) throw new Error('Google Sheets non accessible');
      const csvText = await response.text();
      const lignes = csvRowsToAvailability(parseCsv(csvText));
      if (lignes.length) {
        window.disponibilitesConfig = { lignes };
      }
    } catch (error) {
      console.warn('Disponibilités Google Sheets non chargées, utilisation du tableau local.', error);
    }
  }

  function renderAvailability(lang) {
    if (!window.disponibilitesConfig || !tbody) return;
    const config = window.disponibilitesConfig;
    tbody.innerHTML = '';
    if (update) {
      update.textContent = translate('availability.updated', lang).replace('{date}', currentDateForLang(lang));
    }
    config.lignes.forEach((item) => {
      const tr = document.createElement('tr');
      const status = document.createElement('span');
      const statusText = item.statut?.[lang] || item.statut?.fr || '';
      status.className = `status ${statutClass(statusText)}`;
      status.textContent = statusText;
      const cells = [
        item.produit?.[lang] || item.produit?.fr || '',
        item.prix || '',
        item.detail?.[lang] || item.detail?.fr || item.note?.[lang] || item.note?.fr || '',
        status
      ];
      cells.forEach((value) => {
        const td = document.createElement('td');
        if (value instanceof HTMLElement) td.appendChild(value);
        else td.textContent = value;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
  }

  function applyTranslations(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      el.textContent = translate(key, lang);
    });
    document.title = lang === 'pt'
      ? 'Les Plumes de M & C | Ovos galados, galinhas Pékin e Faverolles'
      : 'Les Plumes de M & C | Œufs fécondés, poules Pékin et Faverolles';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', translate('meta.description', lang));
    if (footerText) footerText.innerHTML = translate('footer.text', lang).replace('{year}', `<span id="year">${year}</span>`);
    setMailSubjects(lang);
    renderAvailability(lang);
    langButtons.forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('.gallery img, .race-card img, .eggs-photo img, .stamp-card img').forEach((img) => {
      img.setAttribute('title', translate('lightbox.title', lang));
      img.setAttribute('tabindex', '0');
    });
    localStorage.setItem(storageKey, lang);
  }

  langButtons.forEach((btn) => btn.addEventListener('click', () => applyTranslations(btn.dataset.lang || 'fr')));
  const initialLang = localStorage.getItem(storageKey) || 'fr';

  const lightbox = document.querySelector('#photo-lightbox');
  const lightboxImg = lightbox?.querySelector('.lightbox-image');
  const lightboxCaption = lightbox?.querySelector('.lightbox-caption');
  const lightboxClose = lightbox?.querySelector('.lightbox-close');
  const zoomSelector = '.gallery img, .race-card img, .eggs-photo img, .stamp-card img';

  function openLightbox(img) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = img.currentSrc || img.src;
    lightboxImg.alt = img.alt || 'Photo agrandie';
    if (lightboxCaption) {
      const figureCaption = img.closest('figure')?.querySelector('figcaption')?.textContent;
      const cardTitle = img.closest('.race-card')?.querySelector('h3')?.textContent;
      lightboxCaption.textContent = figureCaption || cardTitle || img.alt || '';
      lightboxCaption.style.display = lightboxCaption.textContent ? 'block' : 'none';
    }
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    if (!lightbox || !lightboxImg) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }
  document.addEventListener('click', (event) => {
    const img = event.target.closest(zoomSelector);
    if (img) {
      event.preventDefault();
      openLightbox(img);
      return;
    }
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (event) => {
    const activeImg = document.activeElement?.matches?.(zoomSelector) ? document.activeElement : null;
    if ((event.key === 'Enter' || event.key === ' ') && activeImg) {
      event.preventDefault();
      openLightbox(activeImg);
    }
    if (event.key === 'Escape') closeLightbox();
  });
  lightboxClose?.addEventListener('click', closeLightbox);

  const activeLang = initialLang === 'pt' ? 'pt' : 'fr';
  loadAvailabilityFromGoogleSheets().finally(() => applyTranslations(activeLang));
});
