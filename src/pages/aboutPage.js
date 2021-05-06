import { createText } from '../helpers.js';

const aboutPage = (() => {
    /**About page of the website.*/

    const _createHistorySection = () => {
        /**Returns node containing contents of Our history section of the 
         * about page.*/
        let header = createText('p', 'Our History');
        header.classList.add('subHeaderText');

        let text1 = createText('p', ` Los Pollos Hermanos is a fast-growing 
            casual family restaurant founded by Gus Fring and his business 
            partner Max Arciniega. Together, the "chicken brothers" made a 
            name for themselves and their small-town eatery by using 
            authentic flavors and spices to make the tastiest chicken south 
            of the border.`)
        let text2 = createText('p', `Since then, Los Pollos Hermanos has 
            opened our doors in the United States, serving families just like 
            yours. And we look forward to continued growth!`)
        
        let container = document.createElement('div');
        container.appendChild(header);
        container.appendChild(text1);
        container.appendChild(text2);

        return container;
    }
    
    const _createCultureValuesSection = () => {
        /**Returns node containing contents of Our Culture and Values section 
         * of the about page.*/
        let header = createText('p', 'Our Culture and Values');
        header.classList.add('subHeaderText');

        let text1 = createText('p', ` Los Pollos Hermanos knows what family 
            tastes like and we bring that warmth and goodness into our food 
            every single day. We always have something delicious cooking, be 
            it our crispy fried chicken, new spicy curly fries, or delicious 
            dipping sauces.`);
        let text2 = createText('p', `We know how important it is to feed your 
            family right, and we hold those values near and dear to our heart. 
            Every meal we feed you will be flavorful, warm, fresh, and filled 
            with love and care. That is our promise to you.`);
        let text3 = createText('p', `Our motto: "Los Pollos Hermanos! Taste 
            the Family!" `);
        text3.style.fontWeight = '900';
        
        let container = document.createElement('div');
        container.appendChild(header);
        container.appendChild(text1);
        container.appendChild(text2);
        container.appendChild(text3);

        return container;
    }

    const _createContactUsSection = () => {
        /**Returns node containing contents of Contact Us of the about page.*/
        let header = createText('p', 'Contact Us');
        header.classList.add('headerText');

        let phoneHeader = createText('p', 'Phone');
        phoneHeader.classList.add('subHeaderText');
        let phoneText = createText('p', '146-0195')

        let addressHeader = createText('p', 'Address');
        addressHeader.classList.add('subHeaderText');
        let addressText = createText('p', `12000 – 12100 Coors Rd SW, 
            Albuquerque, New Mexico 87045`)
        
        let container = document.createElement('div');
        container.appendChild(header);
        container.appendChild(phoneHeader);
        container.appendChild(phoneText);
        container.appendChild(addressHeader);
        container.appendChild(addressText);

        return container;
    }

    const create = () => {
        /**Returns a div node holding contents of the about page.*/
        let aboutPageHeader = createText('h1', 'About Us');
        aboutPageHeader.classList.add('headerText');

        let aboutPageContainer = document.createElement('div');
        aboutPageContainer.appendChild(aboutPageHeader);
        aboutPageContainer.appendChild(_createHistorySection());
        aboutPageContainer.appendChild(_createCultureValuesSection());
        aboutPageContainer.appendChild(_createContactUsSection());
    
        return aboutPageContainer;
    } 

    return { create }
})();

export { aboutPage }