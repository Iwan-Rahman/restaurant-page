import Seed from './img/seed.jpg';
import Banana from './img/banana.jpg';
import Avocado from './img/avocado.jpg';
import Kiwi from './img/kiwi.jpg';

function hero() {
  //Create Hero Banner
  let hero = document.createElement("div");

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

  hero.classList.add("hero");
  return hero;
}

export default hero;