import * as _ from 'lodash';
import './content/style.css';
//import logo from './image/logo.png';
//import data from './data.xml';
import printMe from './print.js';

const logo = require("./image/logo.png");
const data = require("./data.xml");
if(process.env.NODE_ENV !== 'production'){
    console.log('Looks like we are in development mode!');
}
function component(){
    let element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Helllo', 'webpack demo'], ' ');
    element.classList.add('hello');

    var myLogo = new Image();
    myLogo.src = logo;
    element.appendChild(myLogo);

    console.log(data);

    btn.innerHTML = 'Click me and check the console';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());