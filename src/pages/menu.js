const loadMenuPage = function (){
    let menuDisplay = document.createElement('div');
    menuDisplay.classList.add('menu');

    let itemsDisplay = document.createElement('div');
    itemsDisplay.classList.add('items', 'display');
    let heading = document.createElement('h2');
    let seeMoreNote = document.createElement('p');
    // Prevent duplication by managing only/writing out the differences as unique instances
    let menuItems = [{name: 'NAME 1', picUrl: 'URL', desc: 'Desc 1'}, {name: 'NAME 2', picUrl: 'URL', desc: 'Desc 2'}, {name: 'NAME 3',  picUrl: 'URL', desc: 'Desc 3'}];

    heading.textContent = 'Chef\'s Highlights';
    
    menuItems.forEach(menuItem => {
        let itemCard = document.createElement('div');
        itemCard.classList.add('item', 'card');
        let itemNameDisplay = document.createElement('h3');
        let itemPicDisplay = document.createElement('div');
        let itemDescDisplay = document.createElement('p');
        
        itemNameDisplay.textContent = menuItem.name;
        itemPicDisplay.textContent = menuItem.picUrl;
        itemDescDisplay.textContent = menuItem.desc;

        itemCard.append(itemNameDisplay, itemPicDisplay, itemDescDisplay);
        itemCard.classList.add('wobble');

        itemsDisplay.append(itemCard);
    });

    seeMoreNote.textContent = 'see more...'

    menuDisplay.append(heading);
    menuDisplay.append(itemsDisplay);
    menuDisplay.append(seeMoreNote);

    return menuDisplay;
};

export default loadMenuPage;