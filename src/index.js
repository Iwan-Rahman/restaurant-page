import './style.css';
import {hero, menu as nav} from './hero.js';
import about from './about.js';


let menu = nav();
document.body.appendChild(hero());
document.body.appendChild(menu);

window.onscroll = function(){
  if(document.documentElement.scrollTop > 350){
    menu.classList.add("small-nav");
    console.log("TEST");
  }else{
    menu.classList.remove("small-nav");
    console.log("END TEST");
  }
}

document.body.appendChild(about());
alert("Hello Webpack");