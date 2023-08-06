import './style.css';
import {hero, menu as nav} from './hero.js';
import about from './about.js';
import menu from './menu.js';


let header = nav();
document.body.appendChild(hero());
document.body.appendChild(header);

window.onscroll = function(){
  if(document.documentElement.scrollTop > 420){
    header.classList.add("small-nav");
    console.log("TEST");
  }else{
    header.classList.remove("small-nav");
    console.log("END TEST");
  }
}

document.body.appendChild(about());
document.body.appendChild(menu());
alert("Hello Webpack");