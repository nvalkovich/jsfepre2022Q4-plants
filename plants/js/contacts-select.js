document.addEventListener('DOMContentLoaded', function () {
  const contactsSelect = document.querySelector('.contacts-select');
  const contentLinks = document.querySelectorAll('.select-content-link');
  const adressCards = document.querySelectorAll('.contacts-adress');
  const contactImg = document.querySelector('.contact-img');

  contactsSelect.addEventListener('click', (e) => {
    e.stopPropagation();
    contactsSelect.classList.toggle('contacts-select-active');
  });

  window.onclick = (e) => {
    contactsSelect.classList.remove('contacts-select-active');
  };

  contentLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const linkText = link.querySelector('a').textContent;
      contactsSelect.querySelector('span').textContent = linkText;
      contactsSelect.classList.add('contacts-selected');

      adressCards.forEach((card) => {
        card.classList.remove('contacts-adress-active');
        if (card.dataset.name === link.dataset.name) {
          card.classList.add('contacts-adress-active');
        }
      });

      contactImg.classList.add('contact-img-hidden');

      contactsSelect.classList.remove('contacts-select-active');
    })
  });
});
