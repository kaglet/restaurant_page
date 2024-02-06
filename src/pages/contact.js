const loadContactPage = function (){
    let contactPage = document.createElement('section');
    contactPage.classList.add('contact');

    let emailForm = document.createElement('form');
    let nameInput = document.createElement('input');
    let emailInput = document.createElement('input');
    let messageInput = document.createElement('textfield');
    let sendButton = document.createElement('button');

    let cellNumDisplay = document.createElement('p');
    let locationDisplay = document.createElement('p');

    cellNumDisplay.textContent = 'Call +27';
    locationDisplay.textContent = 'Address here';

    emailForm.append(nameInput, emailInput, messageInput, sendButton);
    contactPage.append(emailForm);
    contactPage.append(cellNumDisplay, locationDisplay);

    return contactPage;
};

export default loadContactPage;