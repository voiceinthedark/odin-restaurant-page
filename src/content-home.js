import img from './assets/imgs/tim-mossholder-sxb8StmTfaw-unsplash.jpg';

function loadContentHome(){
  const main = document.createElement('article');
  const imgMain = document.createElement('img');

  main.classList.add('main-content');
  imgMain.classList.add('main-image');

  imgMain.src = img;
  imgMain.alt = 'We\'re always Open';

  main.appendChild(imgMain);

  return main;
}

export default loadContentHome;
