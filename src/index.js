import { banner } from '.objects/banner.js';
import { navBar } from '.objects/navBar.js';

import { homePage } from './pages/homePage.js';
import { menuPage } from './pages/menuPage.js';


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