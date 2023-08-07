import './style.css';
import {hero, menu as nav} from './hero.js';
import about from './about.js';
import menu from './menu.js';
import contact from './contact.js';

let header = nav();
document.body.appendChild(hero());
document.body.appendChild(header);

let content = document.createElement("div");
document.body.appendChild(content);

window.onscroll = function(){
  if(document.documentElement.scrollTop > 420){
    header.classList.add("small-nav");
    console.log("TEST");
  }else{
    header.classList.remove("small-nav");
    console.log("END TEST");
  }
}

//Menu
let aboutBtn = document.querySelector("li");
let menuBtn = document.querySelector("li:nth-of-type(2)");
let contactBtn = document.querySelector("li:last-of-type");

aboutBtn.addEventListener("click", () => {
  clearTab();
  content.appendChild(about());
})

menuBtn.addEventListener("click", () => {
  clearTab();
  content.appendChild(menu());
})

contactBtn.addEventListener("click", () => {
  clearTab();
  content.appendChild(contact());
})


function clearTab() {
  content.replaceChildren();
}