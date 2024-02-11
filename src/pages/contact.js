import restaurantImg from '../assets/images/kris-sevinc-NVX55qVyEkE-unsplash.jpg';

const loadContactPage = function (){
    let contactPage = document.createElement('section');
    contactPage.classList.add('contact');

    let header = document.createElement('h2');
    let messageForm = document.createElement('form');
    let nameInput = document.createElement('input');
    let nameLabel = document.createElement('label');
    let emailInput = document.createElement('input');
    let emailLabel = document.createElement('label');
    let messageInput = document.createElement('textarea');
    let messageLabel = document.createElement('label');
    
    messageInput.setAttribute('rows', 6);
    messageInput.setAttribute('cols', 40);
    emailInput.setAttribute('placeholder', 'E.g. myname@gmail.com');
    nameInput.setAttribute('placeholder', 'E.g. Andrew');
    emailInput.setAttribute('type', 'email');
    messageInput.setAttribute('placeholder', 'Send us a message. We\'d love to hear from you!');

    nameLabel.textContent = 'Name';
    emailLabel.textContent = 'Email';
    messageLabel.textContent = 'Your Message';

    let wrapperName = document.createElement('div');
    wrapperName.classList.add('input', 'wrapper');
    let wrapperEmail = document.createElement('div');
    wrapperEmail.classList.add('input', 'wrapper');
    let wrapperMessage = document.createElement('div');
    wrapperMessage.classList.add('input', 'wrapper');

    wrapperName.append(nameLabel, nameInput);
    wrapperEmail.append(emailLabel, emailInput);
    wrapperMessage.append(messageLabel, messageInput);

    let sendButton = document.createElement('button');
    sendButton.setAttribute('type', 'button');

    let cellNumDisplay = document.createElement('p');
    let locationDisplay = document.createElement('p');

    let wrapperExtraInfo = document.createElement('div');
    wrapperExtraInfo.classList.add('wrapper');

    header.textContent = 'Contact Us';
    cellNumDisplay.textContent = 'Book/Call: +1 (555) 123-4567';
    locationDisplay.textContent = 'Address: 123 Ocean View Street, Seaside City, SushiLand';
    sendButton.textContent = 'Send Message';

    let picDisplay = document.createElement('div');
    picDisplay.style.backgroundImage = `url("${restaurantImg}")`;
    picDisplay.classList.add('pic', 'wobble');

    wrapperExtraInfo.append(cellNumDisplay, locationDisplay, picDisplay);

    messageForm.append(wrapperName, wrapperEmail, wrapperMessage, sendButton);

    contactPage.append(header, messageForm, wrapperExtraInfo);

    return contactPage;
};

export default loadContactPage;