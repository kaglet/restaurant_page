# restaurant_page

This is a custom restaurant page made as part of [The Odin Project](https://www.theodinproject.com/dashboard) open source web dev curriculum. It is created using Webpack, JavaScript, HTML, and CSS. 

Find the live link [here](https://kaglet.github.io/restaurant_page/).

This is what the page should initially look like on the home tab:
![image](https://github.com/kaglet/restaurant_page/assets/96872447/a2c2aea2-607c-4230-a627-7c33161d05b7)

## Skills

As part of the [project requirements](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page#project-solution), these are the main new skill milestones shown in the project.

- Use of [webpack](https://webpack.js.org/) to bundle Javascript, dependencies and assets. I used webpack to configure both development vs production bundling.
- Use of ES6 module [exports](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export) and [imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) to organize and separate code. 
- HTML layouts are almost entirely generated via JavaScript, except for static elements that do not change across tab display changes.

## Execution concept

There are 4 js modules. 3 are to construct the different tab sections by means of factory functions. The main index.js file consists of a [module IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) display controller that controls dynamic aspects of the display, by importing each tab section from their respective modules. When moving to another tab, the current tab section is removed, to be reconstructed later.

The display controller also manages the changing credits and backgrounds across each tab.

I added some animations and transitions are added to the page to try add to the dynamic feeling of the page. 

### Credits

- Credits to the image sources and artists are explicitly given within the project.
- [Fontawesome](https://fontawesome.com/) was used for the GitHub icon.
- [Google Fonts](https://fonts.google.com/?preview.text=ROCK%20PAPER%20SCISSORS&preview.text_type=custom) was used for the fonts.
