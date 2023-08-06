import './style.css';
import {hero, menu} from './hero.js';
import about from './about.js';

document.body.appendChild(hero());
document.body.appendChild(menu());
document.body.appendChild(about());
alert("Hello Webpack");