import { createText } from '../helpers.js';

import restaurantFacade1Image from '../data/images/restaurantFacade1.jpeg';
import restaurantFacade2Image from '../data/images/restaurantFacade2.jpg';
import restaurantFoodImage from '../data/images/restaurantFood.jpg';
import restaurantMascotImage from '../data/images/restaurantMascot.jpg';

const homePage = (() => {
    /**Home page of the website.*/

    const _createHomePageText = () => {
        /**Returns a div containing the text to be displayed above the home 
         * page images.*/
        let header = createText('p', 'Los Pollos Hermanos');
        header.classList.add('headerText');

        let quoteText = createText('h3', `"It's the best ingredients. The 
            spiciest spices. All prepared with loving care! And always 
            delivered with a friendly smile. That's the Los Pollos Hermanos 
            promise."`)

        let quoteSource = createText('h4', '— Gus Fring, Owner & Proprietor');

        let restaurantDescription = createText('p', `Welcome to Los Pollos 
            Hermanos! We're a fast-food restaurant chain specializing in fried
            chicken, operating across the southwestern United States. Founded 
            by Chilean nationals Gustavo Fring and Max Arciniega, we're proud 
            to hold fourteen locations throughout the region. Eat at your 
            nearest local branch now!`)

        let homePageText = document.createElement('div');
        homePageText.id = 'homePageText';
        homePageText.append(header, quoteText, quoteSource, 
            restaurantDescription);

        return homePageText;
    }

    const _createHomePageImage = (imageSrc) => {
        /**Returns an image node with src as imageSrc arg passed.
         * 
         * Args:
         *  imageSrc: "src" of the image node to be returned.*/
        let imageNode = document.createElement('img');
        imageNode.src = imageSrc;
        return imageNode;
    }

    const create = () => {
        /**Returns a div node holding contents of the home page.*/
        let homePageContainer = document.createElement('div');
        homePageContainer.id = 'homePage';
        homePageContainer.append(
            _createHomePageText(),
            _createHomePageImage(restaurantFacade1Image),
            _createHomePageImage(restaurantFoodImage),
            _createHomePageImage(restaurantFacade2Image),
            _createHomePageImage(restaurantMascotImage),
        );

        return homePageContainer;
    } 

    return { create }
})();

export { homePage }