import { createImage, createText } from '../helpers.js';

const menuPage = (() => {
    /**Page featuring food menu of Los Pollos Hermanos. */
    
    const _createMenuItem = (imageFileName, price, description) => {
        /**Returns a node containing the image, price, and description of an
         * item in the main menu.
         * 
         * Args:
         *  imageFileName (string): Filename of the menu item's image in 
         *      /src/data/images directory.
         *  price (string): Text serving as price to be displayed.
         *  description (string): Text serving as description of menu item.*/
        let menuItemContainer = document.createElement('div');
        menuItemContainer.classList.add('menuItem');

        menuItemContainer.appendChild(createImage(imageFileName));
        menuItemContainer.appendChild(createText('p', price));
        menuItemContainer.appendChild(createText('p', description));

        return menuItemContainer;
    }

    const _createMenu = () => {
        /**Returns a node containing all the items in the main menu.*/
        let menuContainer = document.createElement('div');
        menuContainer.appendChild(_createMenuItem(
            'pollosTenders.jpg',
            '$12.95',
            `Crispy tenders fried to perfection in our secret batter recipe,
            this large portion is sure to satisfy anyone's appetite.`,
        ));
        menuContainer.appendChild(_createMenuItem(
            'abqHotChickenSandwich.jpg',
            '$12.95',
            `A delicious Fried Chicken Sandwich smothered in spicy seasoning
            and topped off in a Kings Hawaiian Bun.`,
        ));
        menuContainer.appendChild(_createMenuItem(
            'herrSchulersFryFrenzy.jpg',
            '$12.00',
            `Yummy seasoned curly fries with a crunch in every bite.`,
        ));
        menuContainer.appendChild(_createMenuItem(
            'slawGoodman.jpg',
            '$3.00',
            `Our tangy and flavorful slaw, good on it's own but even better
            when paired with the ABQ Chicken Sandwich.`,
        ));
        return menuContainer;
    }

    const create = () => {
        /**Returns a div node holding contents of the menu page.*/
        let header = createText('h1', 'Menu');
        header.classList.add('headerText');

        let menuPageContainer = document.createElement('div');
        menuPageContainer.id = 'menuPage';
        menuPageContainer.appendChild(header);
        menuPageContainer.appendChild(_createMenu());
        
        return menuPageContainer;
    } 

    return { create }
})();

export { menuPage }