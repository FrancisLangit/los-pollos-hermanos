const navBar = (() => {
    /**Navigation bar found below the banner. Holds links that users click on
     * to navigate throughout the website.*/

    const _createNavBarContainer = () => {
        /**Returns a div node with id equal to "navBar".*/
        let navBarContainer = document.createElement('div');
        navBarContainer.id = 'navBar';
        navBarContainer.appendChild(document.createElement('ul'));
        return navBarContainer;
    }

    const _createNavBarItem = (text) => {        
        /**Returns a li node whose inner HTML is equal to text argument 
         * passed.
         * 
         * Args: 
         *  text (string): Inner HTML of the li node to be returned.*/
        let navBarItem = document.createElement('li');
        navBarItem.innerHTML = text;
        return navBarItem;
    }

    const create = () => {
        /**Creates the navigation bar and appends to the webpage before the 
         * #content div.*/
        let navBarContainer = _createNavBarContainer();

        let navBarList = navBarContainer.getElementsByTagName('ul')[0];
        navBarList.appendChild(_createNavBarItem('Home'));
        navBarList.appendChild(_createNavBarItem('Menu'));
        navBarList.appendChild(_createNavBarItem('About'));

        document.body.insertBefore(
            navBarContainer, document.getElementById('content'));
    }

    return { create } 
})(); 

export { navBar }