import './assets/462860.jpg'
import './styles.css'
import './content-loader.js';
import loadContentMenu from './content-menu.js';
import loadContentContact from './content-contact.js';
import imgRestaurant from './assets/imgs/Main_Nav_Outdoor_Dining_1e32894a-6979-4ccf-89e9-b80a4e4d7838.jpg';
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

const contactItems = {
  imgUrl: imgRestaurant,
  description: `Oppened in 1917, as a small kiosk in Paris; the kiosk became a diner, and with our famous and exquisite dishes, our diner became what it is today. Our mission is to keep up with our tradition in offering what we believe a taste of heaven on earth, our contribution in making you grateful and making us proud`,
  contacts: [
    {
      name: 'Alberta Jonas',
      description: 'Alberta, the heart and soul of our Restaurant, the mother that keeps on giving, without hesitation, through her hardwork, our restaurant has become a staple and a landmark of our city.',
      tel: '777-7273112',
      email: 'Alberta@OdinRest.com',
    },
  ],
}

const content = document.querySelector('#content');
const menu = loadContentMenu(menuItems);
// content.appendChild(menu);

const contact = loadContentContact(contactItems);
content.appendChild(contact);

