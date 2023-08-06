import Seed from './img/seed.jpg';
import Banana from './img/banana.jpg';
import Avocado from './img/avocado.jpg';
import Kiwi from './img/kiwi.jpg';

export function hero() {
  //Create Hero Banner
  let hero = document.createElement("div");
  hero.classList.add("hero");

  let seed = document.createElement("div");
  let seedImg = document.createElement("img");
  seedImg.src = Seed;
  seed.appendChild(seedImg);

  let banana = document.createElement("div");
  let bananaImg = document.createElement("img");
  bananaImg.src = Banana;
  banana.appendChild(bananaImg);

  let avocado = document.createElement("div");
  let avocadoImg = document.createElement("img");
  avocadoImg.src = Avocado;
  avocado.appendChild(avocadoImg);

  let kiwi = document.createElement("div");
  let kiwiImg = document.createElement("img");
  kiwiImg.src = Kiwi;
  kiwi.appendChild(kiwiImg);

  hero.appendChild(seed);
  hero.appendChild(banana);
  hero.appendChild(avocado);
  hero.appendChild(kiwi);
  hero.appendChild(menu());
  return hero;
}

export function menu(){
  let header = document.createElement("header");
  let title = document.createElement("h1");
  title.textContent = "FreshEats!";

  let navBar = document.createElement("nav");
  let navList = document.createElement("ul");

  let about = document.createElement("li");
  about.textContent = "About";

  let menu = document.createElement("li");
  menu.textContent = "Menu";

  let contact = document.createElement("li");
  contact.textContent = "Contact";

  navList.appendChild(about);
  navList.appendChild(menu);
  navList.appendChild(contact);

  navBar.appendChild(navList);

  header.appendChild(title);
  header.appendChild(navBar)
  
  return header;
}