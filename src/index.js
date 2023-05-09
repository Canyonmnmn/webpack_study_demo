import _ from 'lodash';
import './style.css';
import Data from './data.xml';
import Notes from './data.csv';
import image from './favicon.svg'

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');


    const myIcon = new Image();
    myIcon.src = image;
    element.appendChild(myIcon);

    console.log(Data);
    console.log(Notes);

    return element;
}

document.body.appendChild(component());