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
    // Load background in addition to pages to show on body itself as background
    // Use this module object locally within this object
    let mainBackgroundController = (() => {
        const giveImageToBackground = () => {
            let body = document.querySelector('body');
            body.style.backgroundImage = `url(${mainBgUrl})`;
            body.classList.add('blur');
            // document.querySelector('body').style.objectFit = 'cover';
        };

        const giveColorToBackground = (color) => {
            let body = document.querySelector('body');
            body.style.backgroundImage = "none";
            body.classList.remove('blur');
            body.style.backgroundColor = color;
        };

        return {giveImageToBackground, giveColorToBackground};
    })();

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
        let homeSection = loadHomeSection();
        // TODO: Remove scrollbar on css property until animation is definitely done
        // Have to catch swipe left and right though and it doesn't seem that worth it.
        // homeSection.classList.add('left');
        mainPageContainer.append(homeSection);
        mainBackgroundController.giveImageToBackground();
    });

    menuBtn.addEventListener('click', () => {
        clearDisplay();
        mainPageContainer.append(loadMenuSection());
        mainBackgroundController.giveColorToBackground('black');
    });

    contactBtn.addEventListener('click', () => {
        clearDisplay();
        mainPageContainer.append(loadContactSection());
        mainBackgroundController.giveColorToBackground('black');
    });
}();