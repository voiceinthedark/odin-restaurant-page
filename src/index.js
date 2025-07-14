import './assets/462860.jpg'
import './styles.css'
import './content-loader.js';
import createContentMenu from './content-menu.js';

const content = document.querySelector('#content');
const menu = createContentMenu();
content.appendChild(menu);

