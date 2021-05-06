import { createImage, createText } from '../helpers.js';

const homePage = (() => {
    /**Home page of the website.*/

    const _createText = () => {
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

    const create = () => {
        /**Returns a div node holding contents of the home page.*/
        let homePageContainer = document.createElement('div');
        homePageContainer.id = 'homePage';
        homePageContainer.append(
            _createText(),
            createImage('restaurantFacade1.jpeg'),
            createImage('restaurantFood.jpg'),
            createImage('restaurantFacade2.jpg'),
            createImage('restaurantMascot.jpg'),
        );

        return homePageContainer;
    } 

    return { create }
})();

export { homePage }