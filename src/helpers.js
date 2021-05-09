const createText = (elementType, text) => {
    /**Returns a text node whose element type is "elementType" and whose text
     * content is equal to "text".*/
    let textNode = document.createElement(elementType);
    textNode.textContent = text;
    return textNode; 
}

export { createText }