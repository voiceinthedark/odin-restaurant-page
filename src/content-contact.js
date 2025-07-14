function loadContentContact(contact) {
  const contactElement = document.createElement('article');
  const infoDiv = document.createElement('div');
  const imgElement = document.createElement('img');
  const descriptionElement = document.createElement('p');

  contactElement.classList.add('contact');
  infoDiv.classList.add('info-section');

  // set image
  imgElement.src = contact.imgUrl;
  imgElement.alt = `Odin Restaurant`;

  descriptionElement.textContent = contact.description;

  infoDiv.appendChild(imgElement);
  infoDiv.appendChild(descriptionElement);

  contactElement.appendChild(infoDiv);

  for (let ct of contact.contacts) {
    const card = createContactCard(ct);
    contactElement.appendChild(card);
  }

  return contactElement;

}

/**
 * create contact card function from the ctinfo object
 *
 * @param {Object} ctinfo
 * @returns {Node} card */
function createContactCard(ctinfo) {
  const infoCard = document.createElement('section');
  const infoImg = document.createElement('img');
  const infoName = document.createElement('span');
  const infoDesc = document.createElement('p');
  const infoPhone = document.createElement('span');
  const infoMail = document.createElement('span');

  const infoDescDiv = document.createElement('div');
  infoDescDiv.classList.add('info-description')

  infoCard.classList.add('info-card');

  return infoCard;
}

export default loadContentContact;
