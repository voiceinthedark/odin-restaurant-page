

function loadContentMenu(menuItems) {
  const menuPage = document.createElement('article');
  menuPage.classList.add('menu-page');

  const menuTitle = document.createElement('h2');
  menuTitle.textContent = 'Menu';
  menuTitle.classList.add('menu-title');
  menuPage.appendChild(menuTitle);
  
  for (const item of menuItems){
    const element = createMenuItem(item.title, item.description, item.price, item.imageUrl);
    menuPage.appendChild(element);
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

export default loadContentMenu;
