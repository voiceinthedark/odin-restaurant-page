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
  
  infoPhone.classList.add('phone');
  infoMail.classList.add('email');

  infoName.classList.add('info-name');

  const infoDescDiv = document.createElement('div');
  infoDescDiv.classList.add('info-description')

  const infoContactDiv = document.createElement('div');
  infoContactDiv.classList.add('info-contact-info');

  infoCard.classList.add('info-card');

  infoImg.src = ctinfo.imgUrl;
  infoImg.alt = 'Our Employers'
  infoCard.appendChild(infoImg);

  infoName.textContent = ctinfo.name;
  infoDesc.textContent = ctinfo.description;
  infoPhone.textContent = ctinfo.tel;
  infoMail.textContent = ctinfo.email;
  infoDescDiv.appendChild(infoName);
  infoDescDiv.appendChild(infoDesc);
  infoContactDiv.appendChild(infoPhone);
  infoContactDiv.appendChild(infoMail);
  infoDescDiv.appendChild(infoContactDiv);


  infoCard.appendChild(infoDescDiv);

  return infoCard;
}

export default loadContentContact;
