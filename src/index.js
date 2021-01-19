import itemsTemplate from './menu.hbs';
import items from './menu.json';
import styles from './styles.css';

// console.log(items);

const markup = itemsTemplate(items);

// console.log(markup);

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('afterbegin', markup);

//  ==========================changeTheme===================

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

bodyRef.classList.add('light-theme');
saveTheme();

function themeSwitcher(event) {
  if (event.target.checked) {
    bodyRef.classList.remove('light-theme');
    bodyRef.classList.add('dark-theme');
    localStorage.setItem('Theme', 'dark-theme');
  } else {
    bodyRef.classList.remove('dark-theme');
    bodyRef.classList.add('light-theme');
    localStorage.setItem('Theme', 'light-theme');
  }
}

checkboxRef.addEventListener('change', themeSwitcher);

function saveTheme() {
  const getTheme = localStorage.getItem('Theme');
  if (getTheme === 'dark-theme') {
    checkboxRef.checked = true;
    bodyRef.classList.add('dark-theme');
  }
}
