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

export { createImage }