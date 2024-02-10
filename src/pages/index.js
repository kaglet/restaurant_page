import loadHomeSection from "./home.js";
import loadContactSection from "./contact.js";
import loadMenuSection from "./menu.js";
import './style.css';
import mainBgUrl from "../assets/images/tamas-pap-zali_zGDWo8-unsplash.jpg";

// Display controller to control and manage all of the rendering logic (including initial single time rendering and other services) 
// This module is so there is no pollution of global variables
let displayController = function () {
    let mainPageContainer = document.querySelector('div#content');
    let homeBtn = document.querySelector('button.home');
    let menuBtn = document.querySelector('button.menu');
    let contactBtn = document.querySelector('button.contact');
    let body = document.querySelector('body');
    // Load background in addition to pages to show on body itself as background
    // Use this module object locally within this object
    let mainBackgroundController = (() => {
        const giveImageToBackground = () => {
            body.style.backgroundImage = `url(${mainBgUrl})`;
            body.classList.add('blur');
            // document.querySelector('body').style.objectFit = 'cover';
        };

        const giveColorToBackground = (color) => {
            body.style.backgroundImage = "none";
            body.classList.remove('blur');
            body.style.backgroundColor = color;
        };

        return {giveImageToBackground, giveColorToBackground};
    })();

    let contentBackgroundController = (() => {
        const giveColorToBackground = () => {
            mainPageContainer.classList.add('colored');
        };

        const removeColorFromBackground = () => {
            mainPageContainer.classList.remove('colored');
        };

        return { giveColorToBackground, removeColorFromBackground };
    })()

    const initPage = () => {
        mainBackgroundController.giveImageToBackground();
        mainPageContainer.append(loadHomeSection());
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
        contentBackgroundController.removeColorFromBackground();
        let homeSection = loadHomeSection();
        mainPageContainer.append(homeSection);
        mainBackgroundController.giveImageToBackground();
    });

    menuBtn.addEventListener('click', () => {
        clearDisplay();
        contentBackgroundController.giveColorToBackground();
        mainPageContainer.append(loadMenuSection());
        mainBackgroundController.giveColorToBackground('black');
    });

    contactBtn.addEventListener('click', () => {
        clearDisplay();
        contentBackgroundController.giveColorToBackground();
        mainPageContainer.append(loadContactSection());
        mainBackgroundController.giveColorToBackground('black');
    });
}();