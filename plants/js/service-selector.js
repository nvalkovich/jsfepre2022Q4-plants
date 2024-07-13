const BUTTONS_STATE = {
  gardens: false,
  lawn: false,
  planting: false,
};

const ITEMS = [];

document.addEventListener('DOMContentLoaded', function () {
  const gardensBtn = document.querySelector('.btn-gardens');
  gardensBtn.addEventListener('click', buttonClickHandler)

  const lawnBtn = document.querySelector('.btn-lawn');
  lawnBtn.addEventListener('click', buttonClickHandler);

  const plantingBtn = document.querySelector('.btn-planting');
  plantingBtn.addEventListener('click', buttonClickHandler);

  const gardenItems = document.querySelectorAll('.item-garden');
  ITEMS.push(...Array.from(gardenItems).map(i => ({element: i, type: 'gardens'})));

  const lawnItems = document.querySelectorAll('.item-lawn');
  ITEMS.push(...Array.from(lawnItems).map(i => ({element: i, type: 'lawn'})));

  const plantingItems = document.querySelectorAll('.item-planting');
  ITEMS.push(...Array.from(plantingItems).map(i => ({element: i, type: 'planting'})));

});

const buttonClickHandler = (e) => {
  const name = e.target.dataset.name;
  BUTTONS_STATE[name] = !BUTTONS_STATE[name];
  renderButtons();
  renderItems();
}

const renderButtons = () => {
  const activeCount = Object.values(BUTTONS_STATE).filter(v => v).length;

  for (const key in BUTTONS_STATE) {
    const element = document.querySelector(`.btn-${key}`);
    element.classList.remove('btn-active');
    element.disabled = false;

    if (BUTTONS_STATE[key]) {
      element.classList.add('btn-active');
    } else if (activeCount === 2) {
      element.disabled = true;
    }
  }
}

const renderItems = () => {
  const isAnyActive = !!Object.values(BUTTONS_STATE).filter(v => v).length;
  ITEMS.forEach(item => {
    item.element.classList.remove('blur');
    item.element.classList.toggle('blur', isAnyActive && !BUTTONS_STATE[item.type]);
  })
};
