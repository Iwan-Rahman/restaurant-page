//Salad Images
import Greek from './img/menu/salads/greek.jpg';
import Caesar from './img/menu/salads/caesar.jpg';
import Cobb from './img/menu/salads/cobb.jpg';

//Fruit Bowl Images
import StrawberrySalad from './img/menu/fruitbowls/strawberry.jpg';
import VanillaSalad from './img/menu/fruitbowls/vanilla.jpg';
import BlueberrySalad from './img/menu/fruitbowls/blueberry.jpg';

//Sides Images
import CandyApples from './img/menu/sides/candy-apple.jpg';
import FruitCakes from './img/menu/sides/fruit-cakes.jpg';
import VegetableChips from './img/menu/sides/Vegetable-chips.jpg';

//Drinks Images
import Smoothies from './img/menu/drinks/smoothies.jpg';
import Milkshakes from './img/menu/drinks/milkshakes.jpg';
import LemonWater from './img/menu/drinks/lemon-water.jpg';

export default function menu(){
  let menu = document.createElement("div");
  menu.classList.add("menu");
  let menuTitle = document.createElement("h2");
  menuTitle.textContent = "Menu";
  
  let salads = document.createElement("div")
  let saladsTitle = document.createElement("h3");
  let saladsMenu = document.createElement("div");
  saladsTitle.textContent = "Salads";
  
  let greek = document.createElement("div");
  let greekTitle = document.createElement("h4");
  greekTitle.textContent = "Greek";
  let greekPrice = document.createElement("div");
  greekPrice.textContent = "$10.50";
  let greekImg = document.createElement("img");
  greekImg.src = Greek;
  
  greek.appendChild(greekImg);
  greek.appendChild(greekTitle);
  greek.appendChild(greekPrice);
  
  let caesar = document.createElement("div");
  let caesarTitle = document.createElement("h4");
  caesarTitle.textContent = "Caesar";
  let caesarPrice = document.createElement("div");
  caesarPrice.textContent = "$9.79";
  let caesarImg = document.createElement("img");
  caesarImg.src = Caesar;
  
  caesar.appendChild(caesarImg);
  caesar.appendChild(caesarTitle);
  caesar.appendChild(caesarPrice);
  
  let cobb = document.createElement("div");
  let cobbTitle = document.createElement("h4");
  cobbTitle.textContent = "Cobb";
  let cobbPrice = document.createElement("div");
  cobbPrice.textContent = "$11.20";
  let cobbImg = document.createElement("img");
  cobbImg.src = Cobb;
  
  cobb.appendChild(cobbImg);
  cobb.appendChild(cobbTitle);
  cobb.appendChild(cobbPrice);
  
  saladsMenu.appendChild(greek);
  saladsMenu.appendChild(caesar);
  saladsMenu.appendChild(cobb);
  salads.appendChild(saladsTitle);
  salads.appendChild(saladsMenu);
  
  let fruitBowls = document.createElement("div");
  let fruitBowlsTitle = document.createElement("h3");
  let fruitBowlsMenu = document.createElement("div");
  fruitBowlsTitle.textContent = "Fruit Bowls";
  
  let strawberryBowl = document.createElement("div");
  let strawberryBowlTitle = document.createElement("h4");
  strawberryBowlTitle.textContent = "Strawberry";
  let strawberryBowlPrice = document.createElement("div");
  strawberryBowlPrice.textContent = "$7.50";
  let strawberryBowlImg = document.createElement("img");
  strawberryBowlImg.src = StrawberrySalad;
  
  strawberryBowl.appendChild(strawberryBowlImg);
  strawberryBowl.appendChild(strawberryBowlTitle);
  strawberryBowl.appendChild(strawberryBowlPrice);
  
  let vanillaBowl = document.createElement("div");
  let vanillaBowlTitle = document.createElement("h4");
  vanillaBowlTitle.textContent = "Vanilla";
  let vanillaBowlPrice = document.createElement("div");
  vanillaBowlPrice.textContent = "$6.79";
  let vanillaBowlImg = document.createElement("img");
  vanillaBowlImg.src = VanillaSalad;
  
  vanillaBowl.appendChild(vanillaBowlImg);
  vanillaBowl.appendChild(vanillaBowlTitle);
  vanillaBowl.appendChild(vanillaBowlPrice);
  
  let blueberryBowl = document.createElement("div");
  let blueberryBowlTitle = document.createElement("h4");
  blueberryBowlTitle.textContent = "Blueberry";
  let blueberryBowlPrice = document.createElement("div");
  blueberryBowlPrice.textContent = "$7.20";
  let blueberryBowlImg = document.createElement("img");
  blueberryBowlImg.src = BlueberrySalad;

  blueberryBowl.appendChild(blueberryBowlImg);
  blueberryBowl.appendChild(blueberryBowlTitle);
  blueberryBowl.appendChild(blueberryBowlPrice);

  fruitBowlsMenu.appendChild(strawberryBowl);
  fruitBowlsMenu.appendChild(vanillaBowl);
  fruitBowlsMenu.appendChild(blueberryBowl);

  fruitBowls.appendChild(fruitBowlsTitle);
  fruitBowls.appendChild(fruitBowlsMenu);
  
  let sides = document.createElement("div");
  let sidesTtitle = document.createElement("h3");
  let sidesMenu = document.createElement("div");
  sidesTtitle.textContent = "Sides";
  
  let candyApple = document.createElement("div");
  let candyAppleTitle = document.createElement("h4");
  candyAppleTitle.textContent = "Candy Apples";
  let candyApplePrice = document.createElement("div");
  candyApplePrice.textContent = "$2.00";
  let candyAppleImg = document.createElement("img");
  candyAppleImg.src = CandyApples;

  candyApple.appendChild(candyAppleImg);
  candyApple.appendChild(candyAppleTitle);
  candyApple.appendChild(candyApplePrice);

  let fruitCakes = document.createElement("div");
  let fruitCakesTitle = document.createElement("h4");
  fruitCakesTitle.textContent = "Fruit Cakes";
  let fruitCakesPrice = document.createElement("div");
  fruitCakesPrice.textContent = "$3.50";
  let fruitCakesImg = document.createElement("img");
  fruitCakesImg.src = FruitCakes;

  fruitCakes.appendChild(fruitCakesImg);
  fruitCakes.appendChild(fruitCakesTitle);
  fruitCakes.appendChild(fruitCakesPrice);

  let vegetableChips = document.createElement("div");
  let vegetableChipsTitle = document.createElement("h4");
  vegetableChipsTitle.textContent = "Vegetable Chips";
  let vegetableChipsPrice = document.createElement("div");
  vegetableChipsPrice.textContent = "$4.25";
  let vegetablesChipsImg = document.createElement("img");
  vegetablesChipsImg.src = VegetableChips;

  vegetableChips.appendChild(vegetablesChipsImg);
  vegetableChips.appendChild(vegetableChipsTitle);
  vegetableChips.appendChild(vegetableChipsPrice);

  sidesMenu.appendChild(candyApple);
  sidesMenu.appendChild(fruitCakes);
  sidesMenu.appendChild(vegetableChips);
  sides.appendChild(sidesTtitle);
  sides.appendChild(sidesMenu);
  
  let drinks = document.createElement("div");
  let drinksTitle = document.createElement("h3");
  let drinksMenu = document.createElement("div");
  drinksTitle.textContent = "Drinks";
  

  let smoothies = document.createElement("div");
  let smoothiesTitle = document.createElement("h4");
  smoothiesTitle.textContent = "Smoothies";
  let smoothiesPrice = document.createElement("div");
  smoothiesPrice.textContent = "$1.99";
  let smoothiesImg = document.createElement("img");
  smoothiesImg.src = Smoothies;

  smoothies.appendChild(smoothiesImg);
  smoothies.appendChild(smoothiesTitle);
  smoothies.appendChild(smoothiesPrice);

  let milkshakes = document.createElement("div");
  let milkshakesTitle = document.createElement("h4");
  milkshakesTitle.textContent = "Milkshakes";
  let milkshakesPrice = document.createElement("div");
  milkshakesPrice.textContent = "$2.29";
  let milkshakesImg = document.createElement("img");
  milkshakesImg.src = Milkshakes;

  milkshakes.appendChild(milkshakesImg);
  milkshakes.appendChild(milkshakesTitle);
  milkshakes.appendChild(milkshakesPrice);

  let lemonWater = document.createElement("div");
  let lemonWaterTitle = document.createElement("h4");
  lemonWaterTitle.textContent = "Lemon Water";
  let lemonWaterPrice = document.createElement("div");
  lemonWaterPrice.textContent = "$1.00";
  let lemonWaterImg = document.createElement("img");
  lemonWaterImg.src = LemonWater;

  lemonWater.appendChild(lemonWaterImg);
  lemonWater.appendChild(lemonWaterTitle);
  lemonWater.appendChild(lemonWaterPrice);
  
  drinksMenu.appendChild(smoothies);
  drinksMenu.appendChild(milkshakes);
  drinksMenu.appendChild(lemonWater);

  drinks.appendChild(drinksTitle);
  drinks.appendChild(drinksMenu);
  
  menu.appendChild(menuTitle);
  menu.appendChild(salads);
  menu.appendChild(fruitBowls);
  menu.appendChild(sides);
  menu.appendChild(drinks);
  
  return menu
}
