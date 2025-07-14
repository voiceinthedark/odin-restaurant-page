import './assets/462860.jpg'
import './styles.css'
import './content-loader.js';
import createContentMenu from './content-menu.js';
import imgPancake from './assets/imgs/foodiesfeed.com_pouring-honey-on-pancakesk.jpg';
import imgBurger from './assets/imgs/burger.jpg';
import imgCheeseCake from './assets/imgs/foodiesfeed.com_refreshing-lemon-cheesecake-slice-with-mint-garnish.jpg';
import imgEggsFried from './assets/imgs/foodiesfeed.com_colorful-veggie-bowl-with-eggs-and-fresh-corn.png';

const menuItems = [
    {
        title: 'Spicy Cheese Burger, House Flavor',
        description: 'A delicious burger with a spicy cheese patty, topped with fresh lettuce, tomatoes and our special sauce.',
        price: 8.99,
        imageUrl: imgBurger
    },
    {
        title: 'Honeyed Pancake with blueberries',
        description: 'A tasty pancake with honeyed toppings and blueberries on top, creamy on the inside',
        price: 13.75,
        imageUrl: imgPancake
    },
    {
        title: 'House Cheese Cake!',
        description: 'Cheese Odin flavor, creamy and tasty inside out',
        price: 7.55,
        imageUrl: imgCheeseCake
    },
    {
        title: 'Odin\'s Veggies fried Eggs, house roll',
        description: 'Breakfast special, healthy and delicious.',
        price: 5.89,
        imageUrl: imgEggsFried
    }
];

const content = document.querySelector('#content');
const menu = createContentMenu(menuItems);
content.appendChild(menu);

