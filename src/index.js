// TODO: Start with loading the initial part of page with event listeners to display other parts of the page

import loadHomePage from "./home.js";

// TODO: Add a display controller to control and manage all of this so we can render once through it and have internal logic controlled there but not as global variables

let contentDisplay = document.querySelector('div#content');

contentDisplay.append(loadHomePage());