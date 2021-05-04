import { createImage, createText } from '../helpers.js';

const homePage = (() => {
    /**Home page of the website.*/

    const _createText = () => {
        /**Returns a div containing the text to be displayed about the home 
         * page images.*/
        let header = createText('h2', 'Los Pollos Hermanos');
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

        let welcomeTextContainer = document.createElement('div');
        welcomeTextContainer.id = 'homePageWelcomeText';
        welcomeTextContainer.appendChild(header);
        welcomeTextContainer.appendChild(quoteText);
        welcomeTextContainer.appendChild(quoteSource);
        welcomeTextContainer.appendChild(restaurantDescription);

        return welcomeTextContainer;
    }

    const create = () => {
        /**Returns a div node holding contents of the home page.*/
        let homePageContainer = document.createElement('div');
        homePageContainer.id = 'homePage';

        homePageContainer.appendChild(_createText());
        homePageContainer.appendChild(createImage('restaurantFacade1.jpeg'));
        homePageContainer.appendChild(createImage('restaurantFood.jpg'));
        homePageContainer.appendChild(createImage('restaurantFacade2.jpg'));
        homePageContainer.appendChild(createImage('restaurantMascot.jpg'));

        return homePageContainer;
    } 

    return { create }
})();

export { homePage }