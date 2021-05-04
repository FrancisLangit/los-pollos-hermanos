const homePage = (() => {
    /**Home page of the website.*/

    const _createImage = (file) => {
        /**Returns an img node with src equal to file argument passed.
         * 
         * Args:
         *  file (string): Filename of image in /src/data/ folder.*/
        let image = document.createElement('img');
        image.src = `/src/data/${file}`;
        return image;
    }

    const _createText = () => {
        /**Returns a div containing the text to be displayed about the home 
         * page images.*/
        let welcomeTextHeader = document.createElement('h2');
        welcomeTextHeader.textContent = 'Los Pollos Hermanos';

        let quoteText = document.createElement('h3');
        quoteText.textContent = `"It's the best ingredients. The spiciest
            spices. All prepared with loving care! And always delivered with a
            friendly smile. That's the Los Pollos Hermanos promise."`;

        let quoteSource = document.createElement('h4');
        quoteSource.textContent = `— Gus Fring, Owner & Proprietor`;

        let restaurantDescription = document.createElement('p');
        restaurantDescription.textContent = `Welcome to Los Pollos Hermanos! 
            We're a fast-food restaurant chain specializing in fried chicken,
            operating across the southwestern United States. Founded by 
            Chilean nationals Gustavo Fring and Max Arciniega, we're proud to 
            hold fourteen locations throughout the region. Eat at your nearest 
            local branch now!`;

        let welcomeTextContainer = document.createElement('div');
        welcomeTextContainer.id = 'homePageWelcomeText';

        welcomeTextContainer.appendChild(welcomeTextHeader);
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
        homePageContainer.appendChild(_createImage('restaurantFacade1.jpeg'));
        homePageContainer.appendChild(_createImage('restaurantFood.jpg'));
        homePageContainer.appendChild(_createImage('restaurantFacade2.jpg'));
        homePageContainer.appendChild(_createImage('restaurantMascot.jpg'));
    
        return homePageContainer;
    } 

    return { create }
})();

export { homePage }