const menuPage = (() => {
    /**Page featuring food menu of Los Pollos Hermanos. */
    
    const create = () => {
        /**Returns a div node holding contents of the menu page.*/
        let menuPageHeader = document.createElement('h1');
        menuPageHeader.innerHTML = 'Menu';

        let menuPageContainer = document.createElement('div');
        menuPageContainer.appendChild(menuPageHeader);
    
        return menuPageContainer;
    } 

    return { create }
})();

export { menuPage }