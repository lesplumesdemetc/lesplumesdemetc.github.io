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
      "story.caption": "Le visuel utilisé pour les commandes d’œufs fécondés.",
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
      "eggs.heading": "Des œufs fécondés liés aux naissances",
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
      "availability.heading": "Disponibilités actualisables",
      "availability.intro": "Les disponibilités changent selon la saison, les naissances et les sujets prêts au départ.",
      "availability.link": "Confirmer les disponibilités",
      "availability.table.product": "Produit",
      "availability.table.price": "Prix",
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
      "gallery.caption6": "Poule Soie noire",
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
      "hero.eyebrow": "Bairro de Cœuilly • Champigny-sur-Marne 94500",
      "hero.title1": "Ovos galados",
      "hero.title2": "Galinhas Pékin",
      "hero.title3": "Galinhas Faverolles FR",
      "hero.lead": "Criação familiar modesta na região de Paris, com aves criadas com cuidado num espaço calmo, limpo e natural.",
      "hero.button1": "Ver disponibilidades",
      "hero.button2": "Contactar",
      "story.eyebrow": "A nossa história",
      "story.heading": "Uma criação simples, familiar e cuidada",
      "story.p1": "Les Plumes de M & C nasceu de uma primeira eclosão realizada em família, para mostrar às crianças como nascem os pintainhos e ensinar-lhes, com delicadeza, o respeito pela vida, a paciência e o sentido de responsabilidade. Esse momento educativo transformou-se, pouco a pouco, numa verdadeira paixão familiar pelas galinhas ornamentais e pela capoeira.",
      "story.p2": "Hoje, queremos também transmitir esta paixão e estes valores a outras famílias, propondo ovos galados, pintainhos e exemplares de capoeira criados com cuidado. A nossa abordagem mantém-se deliberadamente familiar e à escala humana, privilegiando o contacto direto, os conselhos e o bem-estar dos animais.",
      "story.p3": "O nome « Les Plumes de M & C » é igualmente uma referência à nossa história familiar, pois retoma simplesmente as iniciais dos nossos filhos, sem revelar a sua identidade.",
      "story.tag1": "Criação familiar",
      "story.tag2": "Pagamento no local",
      "story.tag3": "Contacto por e-mail",
      "story.caption": "O visual utilizado para as encomendas de ovos fecundados.",
      "races.eyebrow": "As nossas raças",
      "races.heading": "Pékin & Faverolles",
      "races.intro": "Duas raças decorativas, cativantes e muito apreciadas numa capoeira familiar.",
      "races.pekin.label": "Raça ornamental",
      "races.pekin.title": "Pékin",
      "races.pekin.text": "A Pékin é uma pequena galinha ornamental apreciada pela sua silhueta redonda, pelas patas emplumadas e pelo aspeto muito decorativo. Põe geralmente entre 100 e 150 ovos por ano. É também uma excelente galinha choca, conhecida por aceitar com muita facilidade ovos de outras raças debaixo dela.",
      "races.faverolles.label": "Raça francesa",
      "races.faverolles.title": "Faverolles",
      "races.faverolles.text": "A Faverolles é uma bela raça tradicional, reconhecível pela barba, pela plumagem abundante e pelo aspeto rústico. Põe cerca de 150 a 200 ovos por ano. É também muito reconhecida pela qualidade da sua carne, apreciada até no mundo da cozinha e pelos chefes de cozinha.",
      "eggs.eyebrow": "Ovos galados",
      "eggs.heading": "Ovos galados ligados às ninhadas",
      "eggs.text1": "Os ovos galados são propostos conforme a postura, a época e a disponibilidade dos reprodutores. São preparados com cuidado para recolha no local após troca por e-mail.",
      "eggs.text2": "O resultado da incubação depende depois de vários elementos: tempo de conservação, transporte, incubadora, temperatura, humidade e viragem dos ovos.",
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
      "availability.heading": "Disponibilidades atualizáveis",
      "availability.intro": "As disponibilidades mudam conforme a época, os nascimentos e os exemplares prontos para sair.",
      "availability.link": "Confirmar disponibilidades",
      "availability.table.product": "Produto",
      "availability.table.price": "Preço",
      "availability.table.status": "Estado",
      "availability.loading": "A carregar disponibilidades…",
      "gallery.eyebrow": "Galeria",
      "gallery.heading": "Algumas imagens da nossa capoeira",
      "gallery.intro": "Clique numa fotografia para a ampliar e ver os detalhes.",
      "gallery.caption1": "Galinha Pékin",
      "gallery.caption2": "Galinha Faverolles",
      "gallery.caption3": "Jovem galo Pékin",
      "gallery.caption4": "Pintainho Pékin cinzento",
      "gallery.caption5": "Retrato Faverolles",
      "gallery.caption6": "Galinha de Seda preta",
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
      "contact.location1": "Bairro de Cœuilly",
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

  function renderAvailability(lang) {
    if (!window.disponibilitesConfig || !tbody) return;
    const config = window.disponibilitesConfig;
    tbody.innerHTML = '';
    if (update && config.derniereMiseAJour) {
      update.textContent = translate('availability.updated', lang).replace('{date}', config.derniereMiseAJour);
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

  applyTranslations(initialLang === 'pt' ? 'pt' : 'fr');
});
