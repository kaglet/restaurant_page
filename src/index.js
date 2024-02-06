// TODO: Start with loading the initial part of page with event listeners to display other parts of the page

import loadHomeSection from "./home.js";
import loadContactSection from "./contact.js";
import loadMenuSection from "./menu.js";

// TODO: Add a display controller to control and manage all of this so we can render once through it and have internal logic controlled there but not as global variables

let displayController = function () {
    let mainPageContainer = document.querySelector('div#content');
    let homeBtn = document.querySelector('button.home');
    let menuBtn = document.querySelector('button.menu');
    let contactBtn = document.querySelector('button.contact');

    // It's as easy as removing and adding a container
    const initPage = () => mainPageContainer.append(loadHomeSection());
    initPage();

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