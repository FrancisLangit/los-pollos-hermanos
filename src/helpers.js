import bannerLogoImage from './data/images/bannerLogo.png';
import restaurantFacade1Image from './data/images/restaurantFacade1.jpeg';
import restaurantFacade2Image from './data/images/restaurantFacade2.jpg';
import restaurantFoodImage from './data/images/restaurantFood.jpg';
import restaurantMascotImage from './data/images/restaurantMascot.jpg';

const createImage = (fileKey, id) => {
    /**Returns an image node whose src is "filename" and whose id is "id".
     * 
     * Args:
     *  fileKey (string): Key of the image in imageFiles object below.
     *  id (string) [optional]: ID of the image node to be returned.*/

    const imageFiles = {
        'bannerLogo': bannerLogoImage,
        'restaurantFacade1': restaurantFacade1Image,
        'restaurantFacade2': restaurantFacade2Image,
        'restaurantFood': restaurantFoodImage,
        'restaurantMascot': restaurantMascotImage,
    }
    let image = document.createElement('img');
    image.src = imageFiles[fileKey];
    if (id) {
        image.id = id;
    }
    return image;
}

const createText = (elementType, text) => {
    /**Returns a text node whose element type is "elementType" and whose text
     * content is equal to "text".*/
    let textNode = document.createElement(elementType);
    textNode.textContent = text;
    return textNode; 
}

export { createImage, createText }