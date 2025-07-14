import './assets/462860.jpg'
import './styles.css'

const rootContent = document.querySelector('#content');

// Create a header element
const headerElement = document.createElement('header');
headerElement.classList.add('content-header');

// Create main title
const mainTitle = document.createElement('h1');
mainTitle.textContent = 'Odin Restaurant';

headerElement.appendChild(mainTitle);

rootContent.appendChild(headerElement)
