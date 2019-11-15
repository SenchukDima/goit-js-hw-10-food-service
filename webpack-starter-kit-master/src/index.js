import menu from './menu.json';
import menuTemplate from './handlebars.hbs';

import './thems.js';
import './styles.css';

const refs = {
  menuElements: document.querySelector('.js-menu')
};

function createMenuItems(items) {
  const menuItems = items.map(item => menuTemplate(item)).join('');

  refs.menuElements.insertAdjacentHTML('beforeend', menuItems);
}

createMenuItems(menu);