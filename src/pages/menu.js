import item1 from "../assets/images/luigi-pozzoli-wmPDe9OnXT4-unsplash.jpg";
import item2 from "../assets/images/ahtziri-lagarde-4_FsMDmCc6A-unsplash.jpg"; // Photo by <a href="https://unsplash.com/@ahtziri?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ahtziri Lagarde</a> on <a href="https://unsplash.com/photos/a-black-plate-topped-with-sushi-next-to-a-cup-of-tea-4_FsMDmCc6A?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
import item3 from "../assets/images/mahmoud-fawzy-CIlzXVlYQJQ-unsplash.jpg";
//  - old pic 2

const loadMenuPage = function () {
    let menuDisplay = document.createElement('div');
    menuDisplay.classList.add('menu');

    let itemsDisplay = document.createElement('div');
    itemsDisplay.classList.add('items', 'display');
    let heading = document.createElement('h2');
    let seeMoreNote = document.createElement('p');
    // Prevent duplication by managing only/writing out the differences as unique instances
    let topMenuItems = [
        { name: 'Silk Seas Nigiri', picUrl: item1, altText: '', desc: 'Each hand-pressed mound of vinegared rice showcases the finest cuts of buttered tuna, salmon, and yellowtail, artfully adorned with a touch of wasabi.' },
        { name: 'Berry Bliss Uramaki', picUrl: item2, altText: '', desc: 'Our gourmet dish of a delightful combination of berries, fruit, and the intense kick of wasabi in an uramaki roll.' },
        { name: 'Inari Harmony Delight', picUrl: item3, altText: '', desc: 'Our meticulously crafted inari sushi pouches, delicately seasoned with a touch of sweetness, cradle a harmonious blend of creamy avocado and refreshing cucumber.' }
    ];

    heading.textContent = 'Chef\'s Highlights';

    topMenuItems.forEach(menuItem => {
        let itemCard = document.createElement('div');
        itemCard.classList.add('item', 'card');
        let itemNameDisplay = document.createElement('h3');
        let itemPicDisplay = document.createElement('div');
        let itemDescDisplay = document.createElement('p');

        itemNameDisplay.textContent = menuItem.name;
        itemPicDisplay.textContent = menuItem.altText;
        itemPicDisplay.style.backgroundImage = `url("${menuItem.picUrl}")`;
        itemPicDisplay.classList.add('item', 'pic');
        itemDescDisplay.textContent = menuItem.desc /*+ '\r\n~ Hover over to reveal ~'*/;

        itemPicDisplay.append(itemDescDisplay);
        itemCard.append(itemNameDisplay, itemPicDisplay);
        itemCard.classList.add('wobble', 'item', 'card');

        itemsDisplay.append(itemCard);
    });

    seeMoreNote.textContent = 'see more...'

    menuDisplay.append(heading);
    menuDisplay.append(itemsDisplay);
    menuDisplay.append(seeMoreNote);

    return menuDisplay;
};

export default loadMenuPage;