import './style.css';
import {hero, menu} from './hero.js';

document.body.appendChild(hero());
document.body.appendChild(menu());
alert("Hello Webpack");