import bannerLogoImage from '../data/images/bannerLogo.png';

const banner = (() => {
    /**Banner featuring logo of Los Pollos Hermanos and background image of 
     * its food. Is placed on every tab on the website.*/

    const _createBannerContainer = () => {
        /**Returns the div that'll contain all the banner's nodes.*/
        let bannerContainer = document.createElement('div');
        bannerContainer.id = 'banner';
        return bannerContainer;
    }

    const _createBannerLogo = () => {
        /**Returns image node with src as bannerLogoImage imported above.*/
        let bannerLogoNode = document.createElement('img');
        bannerLogoNode.src = bannerLogoImage;
        bannerLogoNode.id = 'bannerLogo';
        return bannerLogoNode;
    }

    const create = () => {
        /**Creates the banner node and inserts such into the webpage before 
         * the #contents div.*/
        let bannerContainer = _createBannerContainer();
        bannerContainer.appendChild(_createBannerLogo());
        document.body.insertBefore(
            bannerContainer, document.getElementById('content'));
    }

    return { create }
})();

export { banner }