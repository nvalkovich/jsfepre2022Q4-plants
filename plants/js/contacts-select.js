document.addEventListener('DOMContentLoaded', function () {
  const contactsSelect = document.querySelector('.contacts-select');
  const contentLinks = document.querySelectorAll('.select-content-link');
  const adressCards = document.querySelectorAll('.contacts-adress');

  contactsSelect.addEventListener('click', () => {
    contactsSelect.classList.toggle('contacts-select-active');
  });

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
      })

      contactsSelect.classList.remove('contacts-select-active');
    })
  });
});
