const index = (() => {

    const setUp = () => {
        let bannerBackground = document.createElement('img');
        bannerBackground.src = '/src/data/bannerBackground.jpg';
        bannerBackground.classList.add('bannerImage');

        let bannerLogo = document.createElement('img');
        bannerLogo.src = '/src/data/bannerLogo.png';
        bannerLogo.classList.add('bannerImage');

        let bannerDiv = document.getElementById('banner');
        bannerDiv.appendChild(bannerBackground);
        bannerDiv.appendChild(bannerLogo);
    }

    return { setUp }
})();

index.setUp();