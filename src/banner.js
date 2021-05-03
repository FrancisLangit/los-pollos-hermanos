const banner = (() => {
    /**Banner featuring logo of Los Pollos Hermanos and background image of 
     * its food. Is placed on every tab on the website.*/

    const _createBannerContainer = () => {
        /**Returns the div that'll contain all the banner's nodes.*/
        let bannerContainer = document.createElement('div');
        bannerContainer.id = 'banner';
        return bannerContainer;
    }

    const _createBannerImage = (file, id) => {
        /**Returns an image node whose src is file argument passed and whose 
         * class is "bannerImage".
         * 
         * Args:
         *  file (string): "src" of the image node to be returned.*/
        let bannerImage = document.createElement('img');
        bannerImage.src = `/src/data/${file}`;
        bannerImage.id = id;
        return bannerImage;
    }

    const create = () => {
        /**Creates the banner node and inserts such into the webpage before 
         * the #contents div.*/
        let bannerContainer = _createBannerContainer();
        
        let bannerLogo = _createBannerImage('bannerLogo.png', 'bannerLogo');
        bannerContainer.appendChild(bannerLogo);

        document.body.insertBefore(
            bannerContainer, document.getElementById('content'));
    }

    return { create }
})();

export { banner }