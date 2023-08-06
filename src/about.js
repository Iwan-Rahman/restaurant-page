import FoodPrep from './img/food-prep.jpg';

export default function about(){
  let about = document.createElement("div");
  about.classList.add("about");

  let aboutTitle = document.createElement("h2");
  aboutTitle.textContent = "About Us";
  
  let aboutImg = document.createElement("img");
  aboutImg.src = FoodPrep;
  
  let motto = document.createElement("strong");
  motto.textContent = '"Fresh Food and Fresher Smiles"';
  let aboutText = document.createElement("p");
  aboutText.textContent = "FreshEats! is more than just about eating healthy,"
                          + " it's about making you fall in love with healthy food."
                          + " Every dish is meticulously prepared so that it is a"
                          + " masterpiece of color, texture and flavour. Whether it be our smoothies, salads, fruitbowls,"
                          + " or our many other healthy snacks, anything you order is sure to be delicious, revitilizing and nourishing."
                          + " Our restaurants promote a friendly atmosphere, with engaging stories, and fun activities."
                          + " At EatFresh! we do our best to bring ";
  
  aboutText.appendChild(motto);
  about.appendChild(aboutTitle);
  about.appendChild(aboutImg);
  about.appendChild(aboutText);
  
  return about;
}
