const menuPage = (() => {
    /**Page featuring food menu of Los Pollos Hermanos. */
    
    const _createMenuItem = () => {
        let menuItemImage = image
    }

    const create = () => {
        /**Returns a div node holding contents of the menu page.*/
        let header = document.createElement('h1');
        header.textContent = 'Menu';

        let menuPageContainer = document.createElement('div');
        menuPageContainer.id = 'menuPage';

        menuPageContainer.appendChild(header);
    
        return menuPageContainer;
    } 

    return { create }
})();

export { menuPage }