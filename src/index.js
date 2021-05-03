import { banner } from './banner.js';
import { navBar } from './navBar.js';

const homePage = (() => {
    
    const create = () => {
        let homePageHeader = document.createElement('h1');
        homePageHeader.innerHTML = 'Home';

        let homePageContainer = document.createElement('div');
        homePageContainer.appendChild(homePageHeader);
    
        return homePageContainer;
    } 

    return { create }
})();

const menuPage = (() => {
    
    const create = () => {
        let menuPageHeader = document.createElement('h1');
        menuPageHeader.innerHTML = 'Menu';

        let menuPageContainer = document.createElement('div');
        menuPageContainer.appendChild(menuPageHeader);
    
        return menuPageContainer;
    } 

    return { create }
})();

const index = (() => {
    /**Module consolidating logic of the website's code.*/

    let homePageContents = homePage.create();
    let menuPageContents = menuPage.create();

    const setUp = () => {
        /**Sets up all the components of the website. */
        banner.create();
        navBar.create();
    }

    return { homePageContents, menuPageContents, setUp }
})();

index.setUp();

export { index }