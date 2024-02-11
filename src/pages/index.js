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
    })();

    let creditsDisplayController = (() => {
        let selfCredit = document.createElement('a');
        selfCredit.href = "https://unsplash.com/photos/orange-flower-with-black-background-zali_zGDWo8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";
        selfCredit.textContent = "kaglet";

        let unsplashCredit = document.createElement('a');
        unsplashCredit.href = "https://unsplash.com/photos/orange-flower-with-black-background-zali_zGDWo8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";
        unsplashCredit.textContent = 'Unsplash';

        let homeBgCredit = document.createElement('a');

        homeBgCredit.href = 'https://unsplash.com/@tamasp?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash';
        homeBgCredit.textContent = 'Tamas Pap';

        let homeBgUrl = document.createElement('a');

        let NigiriCredit  = document.createElement('a');
        let UramakiCredit = document.createElement('a');
        let InariCredit = document.createElement('a');

        NigiriCredit.href = 'https://unsplash.com/@lu_pl_ph?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash';
        NigiriCredit.textContent = 'Louigi Pozzoli';
        
        UramakiCredit.href = 'https://unsplash.com/@ahtziri?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash';
        UramakiCredit.textContent = 'Ahtziri Lagarde';

        InariCredit.href = 'https://unsplash.com/@mahmoud_fawzy100?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash';
        InariCredit.textContent = 'Mahmoud Fawzy';

        let NigiriImgUrl  = document.createElement('a');
        let UramakiImgUrl = document.createElement('a');
        let InariImgUrl = document.createElement('a');

        let restaurantImgCredit = document.createElement('a');

        restaurantImgCredit.href = 'https://unsplash.com/@krissevinc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash';
        restaurantImgCredit.textContent = 'Kris Sevinc';

        let restaurantImgUrl = document.createElement('a');

        let footer = document.querySelector('footer');

        const appendStartCredits = () => {
            footer.append('Made by ', selfCredit, ' | ');
        }

        const appendHomeCredits = () => {
            appendStartCredits();
            footer.append('Background Image by ', homeBgCredit);
        };
        
        const appendMenuCredits = () => {
            appendStartCredits();
            footer.append("Nigiri Image by ", NigiriCredit, ", Uramaki Image by ", UramakiCredit, ", Inari Image by ", InariCredit);
        
        };

        const appendContactCredits = () => {
            appendStartCredits();
            footer.append("Restaurant Image by ", restaurantImgCredit);
        };

        const clearCreditsContainer = () => {
            while (footer.firstChild) {
                footer.removeChild(footer.lastChild);
            }
        };

        return { getHomeCredits: appendHomeCredits, getMenuCredits: appendMenuCredits, getContactCredits: appendContactCredits, clearCreditsContainer }
    })();

    const initPage = () => {
        mainBackgroundController.giveImageToBackground();
        mainPageContainer.append(loadHomeSection());
        creditsDisplayController.getHomeCredits();
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
        creditsDisplayController.clearCreditsContainer();
        creditsDisplayController.getHomeCredits();
    });

    menuBtn.addEventListener('click', () => {
        clearDisplay();
        contentBackgroundController.giveColorToBackground();
        mainPageContainer.append(loadMenuSection());
        mainBackgroundController.giveColorToBackground('black');
        creditsDisplayController.clearCreditsContainer();
        creditsDisplayController.getMenuCredits();
    });

    contactBtn.addEventListener('click', () => {
        clearDisplay();
        contentBackgroundController.giveColorToBackground();
        mainPageContainer.append(loadContactSection());
        mainBackgroundController.giveColorToBackground('black');
        creditsDisplayController.clearCreditsContainer();
        creditsDisplayController.getContactCredits();
    });
}();