const aboutPage = (() => {
    /**About page of the website.*/
    
    const create = () => {
        /**Returns a div node holding contents of the about page.*/
        let aboutPageHeader = document.createElement('h1');
        aboutPageHeader.innerHTML = 'About';

        let aboutPageContainer = document.createElement('div');
        aboutPageContainer.appendChild(aboutPageHeader);
    
        return aboutPageContainer;
    } 

    return { create }
})();

export { aboutPage }