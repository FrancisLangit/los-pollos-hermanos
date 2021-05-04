const homePage = (() => {
    /**Home page of the website.*/

    const create = () => {
        /**Returns a div node holding contents of the home page.*/
        let homePageHeader = document.createElement('h1');
        homePageHeader.innerHTML = 'Home';

        let homePageContainer = document.createElement('div');
        homePageContainer.appendChild(homePageHeader);
    
        return homePageContainer;
    } 

    return { create }
})();

export { homePage }