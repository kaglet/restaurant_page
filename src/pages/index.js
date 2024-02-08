import loadHomeSection from "./home.js";
import loadContactSection from "./contact.js";
import loadMenuSection from "./menu.js";
import './style.css';
import mainBgUrl from "../assets/images/sunorwind.jpg";

// Display controller to control and manage all of the rendering logic (including initial single time rendering and other services) 
// This module is so there is no pollution of global variables
let displayController = function () {
    let mainPageContainer = document.querySelector('div#content');
    let homeBtn = document.querySelector('button.home');
    let menuBtn = document.querySelector('button.menu');
    let contactBtn = document.querySelector('button.contact');
    // Load background in addition to pages to show on body itself as background
    // Use this module object locally within this object
    let mainBackgroundController = (() => {
        const giveImageToBackground = () => {
            document.querySelector('body').style.backgroundImage = `url(${mainBgUrl})`;
            document.querySelector('body').style.objectFit = 'cover';
        };

        const giveColorToBackground = (color) => {
            document.querySelector('body').style.backgroundImage = "none";
            document.querySelector('body').style.backgroundColor = color;
        };

        return {giveImageToBackground, giveColorToBackground};
    })();

    const initPage = () => {
        mainPageContainer.append(loadHomeSection());
        mainBackgroundController.giveImageToBackground();
    };

    initPage();

    // It's as easy as removing and adding the current container at once with all the contents -- NOT a removal one by one
    const clearDisplay = () => {
        while (mainPageContainer.firstChild) {
            mainPageContainer.removeChild(mainPageContainer.lastChild);
        }
    };

    homeBtn.addEventListener('click', () => {
        clearDisplay();
        mainPageContainer.append(loadHomeSection());
        mainBackgroundController.giveImageToBackground();
    });

    menuBtn.addEventListener('click', () => {
        clearDisplay();
        mainPageContainer.append(loadMenuSection());
        mainBackgroundController.giveColorToBackground(red);
    });

    contactBtn.addEventListener('click', () => {
        clearDisplay();
        mainPageContainer.append(loadContactSection());
        mainBackgroundController.giveColorToBackground(red);
    });
}();