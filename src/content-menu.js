import imgPancake from './assets/imgs/foodiesfeed.com_pouring-honey-on-pancakesk.jpg';
import imgBurger from './assets/imgs/462860.jpg';
import imgCheeseCake from './assets/imgs/foodiesfeed.com_refreshing-lemon-cheesecake-slice-with-mint-garnish.jpg';
import imgEggsFried from './assets/imgs/foodiesfeed.com_colorful-veggie-bowl-with-eggs-and-fresh-corn.png';

function createContentMenu() {
  const menuPage = document.createElement('article');
  menuPage.classList.add('menu-page');

  const menuTitle = document.createElement('h2');
  menuTitle.textContent = 'Menu';
  menuTitle.classList.add('menu-title');
  menuPage.appendChild(menuTitle);

  // create a menu item
  const menuItems = [
    createMenuItem('Spicy Cheese Burger, House Flavor',
    'A delicious burger with a spicy cheese patty, topped with fresh lettuce, tomatoes and our special sauce.',
    8.99, imgBurger),
  ];

  for (const item of menuItems){
    menuPage.appendChild(item);
  }

  return menuPage;
}

function createMenuItem(name, description, price, imageUrl){
  const menuItem = document.createElement('div');
  const itemName = document.createElement('h3');
  const itemDescription = document.createElement('p');
  const itemPrice = document.createElement('span');
  const itemImage = document.createElement('img');

  if (imageUrl){
    itemImage.src = imageUrl;
    itemImage.alt = `${name} image`;
    itemImage.classList.add('item-image');
  }

  const itemContainer = document.createElement('div');
  itemContainer.classList.add('item-container');
  itemContainer.appendChild(itemName);
  itemContainer.appendChild(itemDescription);
  itemContainer.appendChild(itemImage);

  itemName.textContent = name;
  itemDescription.textContent = description;
  itemDescription.classList.add('item-description');
  itemPrice.textContent = `$${price.toFixed(2)}`;
  itemPrice.classList.add('item-price');

  menuItem.appendChild(itemPrice);
  menuItem.appendChild(itemContainer);

  menuItem.classList.add('item-card');
  
  return menuItem;
}

export default createContentMenu;
