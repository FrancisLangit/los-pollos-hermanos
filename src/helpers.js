const createImage = (filename, id) => {
    /**Returns an image node whose src is "filename" and whose id is "id".
     * 
     * Args:
     *  file (string): Filename of the image in /src/data/ directory.
     *  id (string) [optional]: ID of the image node to be returned.*/
    let image = document.createElement('img');
    image.src = `/src/data/${filename}`;
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