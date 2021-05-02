import { banner } from './banner.js';

const index = (() => {
    /**Module consolidating logic of the website's code.*/

    const setUp = () => {
        /**Sets up all the components of the website. */
        banner.create();
    }

    return { setUp }
})();

index.setUp();