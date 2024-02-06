/* 
NOTE: Each page manages itself loading and itself loading only. 
Global clear function can be elsewhere regardless of the specific contents here. 
*/

// Create and return element holding home page contents in this factory function
const loadHomePage = function (){
    // If I repeat this content section then it should always be static
    // Append home page since I want a ready made element to append to content section, not add to content section on the fly
    let homePage = document.createElement('div');
    homePage.classList.add('home');

    let about = document.createElement('section');

    let heading = document.createElement('h2');
    let pShortDesc = document.createElement('p');
    let pHours = document.createElement('p');
    let pMonFri = document.createElement('span');
    let pSatSun = document.createElement('span');

    heading.textContent = 'About Us';
    pShortDesc.textContent = 'This is a description of our restaurant.'
    pMonFri.textContent = "Mon-Fri: 9am - 9pm";
    pSatSun.textContent = "Sat-Sun: 8am - 10pm";

    pHours.append(pMonFri, pSatSun);
    about.append(heading, pShortDesc, pHours);

    homePage.append(about);

    return homePage;
};

export default loadHomePage;