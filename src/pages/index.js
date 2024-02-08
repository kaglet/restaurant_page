import loadHomeSection from "./home.js";
import loadContactSection from "./contact.js";
import loadMenuSection from "./menu.js";
import './style.css';
import ImageURL from './sunorwind.jpg';

// Display controller to control and manage all of the rendering logic (including initial single time rendering and other services) 
// This module is so there is no pollution of global variables
let displayController = function () {
    let mainPageContainer = document.querySelector('div#content');
    let homeBtn = document.querySelector('button.home');
    let menuBtn = document.querySelector('button.menu');
    let contactBtn = document.querySelector('button.contact');

    const initPage = () => mainPageContainer.append(loadHomeSection());
    initPage();
    
    let image = new Image();
    image.src = ImageURL;
    mainPageContainer.append(image);

    // It's as easy as removing and adding the current container at once with all the contents -- NOT a removal one by one
    const clearDisplay = () => {
        while (mainPageContainer.firstChild) {
            mainPageContainer.removeChild(mainPageContainer.lastChild);
        }
    };

    homeBtn.addEventListener('click', () => {
        clearDisplay();
        mainPageContainer.append(loadHomeSection());
    });

    menuBtn.addEventListener('click', () => {
        clearDisplay();
        mainPageContainer.append(loadMenuSection());
    });

    contactBtn.addEventListener('click', () => {
        clearDisplay();
        mainPageContainer.append(loadContactSection());
    });
}();