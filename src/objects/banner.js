import { createImage } from '../index.js';

const banner = (() => {
    /**Banner featuring logo of Los Pollos Hermanos and background image of 
     * its food. Is placed on every tab on the website.*/

    const _createBannerContainer = () => {
        /**Returns the div that'll contain all the banner's nodes.*/
        let bannerContainer = document.createElement('div');
        bannerContainer.id = 'banner';
        return bannerContainer;
    }

    const create = () => {
        /**Creates the banner node and inserts such into the webpage before 
         * the #contents div.*/
        let bannerContainer = _createBannerContainer();
        
        let bannerLogo = createImage('bannerLogo.png', 'bannerLogo');
        bannerContainer.appendChild(bannerLogo);

        document.body.insertBefore(
            bannerContainer, document.getElementById('content'));
    }

    return { create }
})();

export { banner }