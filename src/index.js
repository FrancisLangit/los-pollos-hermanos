import { banner } from './objects/banner.js';
import { navBar } from './objects/navBar.js';

import { homePage } from './pages/homePage.js';
import { menuPage } from './pages/menuPage.js';
import { aboutPage } from './pages/aboutPage.js';

const index = (() => {
    /**Module consolidating logic of the website's code.*/

    let homePageContents = homePage.create();
    let menuPageContents = menuPage.create();
    let aboutPageContents = aboutPage.create();

    const updatePage = (page) => {
        /**Updates the content of the #content div.
         * 
         * Args:
         *  page (node element): Node to be appended to the #content div.*/
        let contentDiv = document.getElementById('content');
        contentDiv.innerHTML = '';
        contentDiv.appendChild(page);
    }

    const setUp = () => {
        /**Sets up all the components of the website.*/
        banner.create();
        navBar.create();
        document.getElementById('content').appendChild(menuPageContents);
    }

    return { 
        homePageContents, menuPageContents, aboutPageContents,
        updatePage, setUp,
    }
})();

index.setUp();

export { index }