
document.addEventListener('DOMContentLoaded', function () {
  const allPriceAccordion = document.querySelectorAll('.price-accordion');
  const allPriceAccordionContent = document.querySelectorAll('.accordion-content');

  allPriceAccordion.forEach((elem) => {
    elem.querySelector('button').addEventListener('click', () => {
      let content = elem.nextElementSibling;

      if (content.style.maxHeight) {
        allPriceAccordionContent.forEach((el) => {
          el.style.maxHeight = null;
          setTimeout(() => elem.classList.remove('accordion-active'), 200);
        })
      } else {
        allPriceAccordionContent.forEach((el) => {
          el.style.maxHeight = null;
          content.style.maxHeight = content.scrollHeight + 'px';
          content.style.display = 'block';
          allPriceAccordion.forEach(accordion => {
            if (accordion !== elem){
              setTimeout(() => accordion.classList.remove('accordion-active'), 200);
            }
          });
          setTimeout(() => elem.classList.add('accordion-active'), 100);
        });
      }
    });
  });
});
