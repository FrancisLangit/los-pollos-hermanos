/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createImage\": () => (/* binding */ createImage),\n/* harmony export */   \"createText\": () => (/* binding */ createText)\n/* harmony export */ });\nconst createImage = (filename, id) => {\n    /**Returns an image node whose src is \"filename\" and whose id is \"id\".\n     * \n     * Args:\n     *  file (string): Filename of the image in /src/data/images directory.\n     *  id (string) [optional]: ID of the image node to be returned.*/\n    let image = document.createElement('img');\n    image.src = `/src/data/images/${filename}`;\n    if (id) {\n        image.id = id;\n    }\n    return image;\n}\n\nconst createText = (elementType, text) => {\n    /**Returns a text node whose element type is \"elementType\" and whose text\n     * content is equal to \"text\".*/\n    let textNode = document.createElement(elementType);\n    textNode.textContent = text;\n    return textNode; \n}\n\n\n\n//# sourceURL=webpack://los-pollos-hermanos/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"index\": () => (/* binding */ index)\n/* harmony export */ });\n/* harmony import */ var _objects_banner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects/banner.js */ \"./src/objects/banner.js\");\n/* harmony import */ var _objects_navBar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects/navBar.js */ \"./src/objects/navBar.js\");\n/* harmony import */ var _pages_homePage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/homePage.js */ \"./src/pages/homePage.js\");\n/* harmony import */ var _pages_menuPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/menuPage.js */ \"./src/pages/menuPage.js\");\n/* harmony import */ var _pages_aboutPage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/aboutPage.js */ \"./src/pages/aboutPage.js\");\n\n\n\n\n\n\n\nconst index = (() => {\n    /**Module consolidating logic of the website's code.*/\n\n    let homePageContents = _pages_homePage_js__WEBPACK_IMPORTED_MODULE_2__.homePage.create();\n    let menuPageContents = _pages_menuPage_js__WEBPACK_IMPORTED_MODULE_3__.menuPage.create();\n    let aboutPageContents = _pages_aboutPage_js__WEBPACK_IMPORTED_MODULE_4__.aboutPage.create();\n\n    const updatePage = (page) => {\n        /**Updates the content of the #content div.\n         * \n         * Args:\n         *  page (node element): Node to be appended to the #content div.*/\n        let contentDiv = document.getElementById('content');\n        contentDiv.innerHTML = '';\n        contentDiv.appendChild(page);\n    }\n\n    const setUp = () => {\n        /**Sets up all the components of the website.*/\n        _objects_banner_js__WEBPACK_IMPORTED_MODULE_0__.banner.create();\n        _objects_navBar_js__WEBPACK_IMPORTED_MODULE_1__.navBar.create();\n        document.getElementById('content').appendChild(homePageContents);\n    }\n\n    return { \n        homePageContents, menuPageContents, aboutPageContents,\n        updatePage, setUp,\n    }\n})();\n\nindex.setUp();\n\n\n\n//# sourceURL=webpack://los-pollos-hermanos/./src/index.js?");

/***/ }),

/***/ "./src/objects/banner.js":
/*!*******************************!*\
  !*** ./src/objects/banner.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"banner\": () => (/* binding */ banner)\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers.js */ \"./src/helpers.js\");\n\n\nconst banner = (() => {\n    /**Banner featuring logo of Los Pollos Hermanos and background image of \n     * its food. Is placed on every tab on the website.*/\n\n    const _createBannerContainer = () => {\n        /**Returns the div that'll contain all the banner's nodes.*/\n        let bannerContainer = document.createElement('div');\n        bannerContainer.id = 'banner';\n        return bannerContainer;\n    }\n\n    const create = () => {\n        /**Creates the banner node and inserts such into the webpage before \n         * the #contents div.*/\n        let bannerContainer = _createBannerContainer();\n        \n        let bannerLogo = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createImage)('bannerLogo.png', 'bannerLogo');\n        bannerContainer.appendChild(bannerLogo);\n\n        document.body.insertBefore(\n            bannerContainer, document.getElementById('content'));\n    }\n\n    return { create }\n})();\n\n\n\n//# sourceURL=webpack://los-pollos-hermanos/./src/objects/banner.js?");

/***/ }),

/***/ "./src/objects/navBar.js":
/*!*******************************!*\
  !*** ./src/objects/navBar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navBar\": () => (/* binding */ navBar)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n\n\nconst navBar = (() => {\n    /**Navigation bar found below the banner. Holds links that users click on\n     * to navigate throughout the website.*/\n\n    const _createNavBarContainer = () => {\n        /**Returns a div node with id equal to \"navBar\".*/\n        let navBarContainer = document.createElement('div');\n        navBarContainer.id = 'navBar';\n        navBarContainer.appendChild(document.createElement('ul'));\n        return navBarContainer;\n    }\n\n    const _createNavBarItem = (text, page) => {        \n        /**Returns a li node whose inner HTML is equal to text argument \n         * passed.\n         * \n         * Args: \n         *  text (string): Inner HTML of the li node to be returned.\n         *  page (node element): Node to be appended to the #content div.*/\n        let navBarItem = document.createElement('li');\n        navBarItem.innerHTML = text;\n\n        navBarItem.addEventListener(\n            'click', _index_js__WEBPACK_IMPORTED_MODULE_0__.index.updatePage.bind(null, page));\n\n        return navBarItem;\n    }\n\n    const create = () => {\n        /**Creates the navigation bar and appends such to the webpage before \n         * the #content div.*/\n        let navBarContainer = _createNavBarContainer();\n\n        let navBarList = navBarContainer.getElementsByTagName('ul')[0];\n        navBarList.appendChild(_createNavBarItem(\n            'Home', _index_js__WEBPACK_IMPORTED_MODULE_0__.index.homePageContents));\n        navBarList.appendChild(_createNavBarItem(\n            'Menu', _index_js__WEBPACK_IMPORTED_MODULE_0__.index.menuPageContents));\n        navBarList.appendChild(_createNavBarItem(\n            'About', _index_js__WEBPACK_IMPORTED_MODULE_0__.index.aboutPageContents));\n\n        document.body.insertBefore(\n            navBarContainer, document.getElementById('content'));\n    }\n\n    return { create } \n})(); \n\n\n\n//# sourceURL=webpack://los-pollos-hermanos/./src/objects/navBar.js?");

/***/ }),

/***/ "./src/pages/aboutPage.js":
/*!********************************!*\
  !*** ./src/pages/aboutPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aboutPage\": () => (/* binding */ aboutPage)\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers.js */ \"./src/helpers.js\");\n\n\nconst aboutPage = (() => {\n    /**About page of the website.*/\n\n    const _createHistorySection = () => {\n        /**Returns node containing contents of Our history section of the \n         * about page.*/\n        let header = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', 'Our History');\n        header.classList.add('subHeaderText');\n\n        let text1 = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', ` Los Pollos Hermanos is a fast-growing \n            casual family restaurant founded by Gus Fring and his business \n            partner Max Arciniega. Together, the \"chicken brothers\" made a \n            name for themselves and their small-town eatery by using \n            authentic flavors and spices to make the tastiest chicken south \n            of the border.`)\n        let text2 = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', `Since then, Los Pollos Hermanos has \n            opened our doors in the United States, serving families just like \n            yours. And we look forward to continued growth!`)\n        \n        let container = document.createElement('div');\n        container.append(header, text1, text2);\n\n        return container;\n    }\n    \n    const _createCultureValuesSection = () => {\n        /**Returns node containing contents of Our Culture and Values section \n         * of the about page.*/\n        let header = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', 'Our Culture and Values');\n        header.classList.add('subHeaderText');\n\n        let text1 = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', ` Los Pollos Hermanos knows what family \n            tastes like and we bring that warmth and goodness into our food \n            every single day. We always have something delicious cooking, be \n            it our crispy fried chicken, new spicy curly fries, or delicious \n            dipping sauces.`);\n        let text2 = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', `We know how important it is to feed your \n            family right, and we hold those values near and dear to our heart. \n            Every meal we feed you will be flavorful, warm, fresh, and filled \n            with love and care. That is our promise to you.`);\n        let text3 = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', `Our motto: \"Los Pollos Hermanos! Taste \n            the Family!\" `);\n        text3.style.fontWeight = '900';\n        \n        let container = document.createElement('div');\n        container.append(header, text1, text2, text3)\n\n        return container;\n    }\n\n    const _createContactUsSection = () => {\n        /**Returns node containing contents of Contact Us of the about page.*/\n        let header = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', 'Contact Us');\n        header.classList.add('headerText');\n\n        let phoneHeader = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', 'Phone');\n        phoneHeader.classList.add('subHeaderText');\n        let phoneText = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', '146-0195')\n\n        let addressHeader = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', 'Address');\n        addressHeader.classList.add('subHeaderText');\n        let addressText = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', `12000 – 12100 Coors Rd SW, \n            Albuquerque, New Mexico 87045`)\n        \n        let container = document.createElement('div');\n        container.append(\n            header, phoneHeader, phoneText, addressHeader, addressText);\n\n        return container;\n    }\n\n    const create = () => {\n        /**Returns a div node holding contents of the about page.*/\n        let aboutPageHeader = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('h1', 'About Us');\n        aboutPageHeader.classList.add('headerText');\n\n        let aboutPageContainer = document.createElement('div');\n        aboutPageContainer.append(aboutPageHeader, _createHistorySection(),\n            _createCultureValuesSection(), _createContactUsSection());\n    \n        return aboutPageContainer;\n    } \n\n    return { create }\n})();\n\n\n\n//# sourceURL=webpack://los-pollos-hermanos/./src/pages/aboutPage.js?");

/***/ }),

/***/ "./src/pages/homePage.js":
/*!*******************************!*\
  !*** ./src/pages/homePage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers.js */ \"./src/helpers.js\");\n\n\nconst homePage = (() => {\n    /**Home page of the website.*/\n\n    const _createText = () => {\n        /**Returns a div containing the text to be displayed above the home \n         * page images.*/\n        let header = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', 'Los Pollos Hermanos');\n        header.classList.add('headerText');\n\n        let quoteText = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('h3', `\"It's the best ingredients. The \n            spiciest spices. All prepared with loving care! And always \n            delivered with a friendly smile. That's the Los Pollos Hermanos \n            promise.\"`)\n\n        let quoteSource = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('h4', '— Gus Fring, Owner & Proprietor');\n\n        let restaurantDescription = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', `Welcome to Los Pollos \n            Hermanos! We're a fast-food restaurant chain specializing in fried\n            chicken, operating across the southwestern United States. Founded \n            by Chilean nationals Gustavo Fring and Max Arciniega, we're proud \n            to hold fourteen locations throughout the region. Eat at your \n            nearest local branch now!`)\n\n        let homePageText = document.createElement('div');\n        homePageText.id = 'homePageText';\n        homePageText.append(header, quoteText, quoteSource, \n            restaurantDescription);\n\n        return homePageText;\n    }\n\n    const create = () => {\n        /**Returns a div node holding contents of the home page.*/\n        let homePageContainer = document.createElement('div');\n        homePageContainer.id = 'homePage';\n        homePageContainer.append(\n            _createText(),\n            (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createImage)('restaurantFacade1.jpeg'),\n            (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createImage)('restaurantFood.jpg'),\n            (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createImage)('restaurantFacade2.jpg'),\n            (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createImage)('restaurantMascot.jpg'),\n        );\n\n        return homePageContainer;\n    } \n\n    return { create }\n})();\n\n\n\n//# sourceURL=webpack://los-pollos-hermanos/./src/pages/homePage.js?");

/***/ }),

/***/ "./src/pages/menuPage.js":
/*!*******************************!*\
  !*** ./src/pages/menuPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPage\": () => (/* binding */ menuPage)\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers.js */ \"./src/helpers.js\");\n\n\nconst menuPage = (() => {\n    /**Page featuring food menu of Los Pollos Hermanos. */\n    \n    const _createMenuItem = (name, price, description) => {\n        /**Returns a node containing the image, price, and description of an\n         * item in the main menu.\n         * \n         * Args:\n         *  name (string): Text serving a name of the menu item.\n         *  price (string): Text serving as price to be displayed.\n         *  description (string): Text serving as description of menu item.*/\n        let menuItemContainer = document.createElement('div');\n        menuItemContainer.classList.add('menuItem');\n\n        let menuItemName = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', name);\n        menuItemName.classList.add('subHeaderText');\n\n        let menuItemPrice = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', price);\n        menuItemPrice.classList.add('menuItemPrice');\n\n        menuItemContainer.append(menuItemName, menuItemPrice, \n            (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', description));\n\n        return menuItemContainer;\n    }\n\n    const _createMenu = () => {\n        /**Returns a node containing all the items in the main menu.*/\n        let menuContainer = document.createElement('div');\n        menuContainer.append(\n            _createMenuItem(\n                'Pollos Tenders',\n                '$12.95',\n                `Crispy tenders fried to perfection in our secret batter \n                recipe, this large portion is sure to satisfy anyone's \n                appetite.`,\n            ),\n            _createMenuItem(\n                'ABQ Hot Chicken Sandwich',\n                '$12.95',\n                `A delicious Fried Chicken Sandwich smothered in spicy \n                seasoning and topped off in a Kings Hawaiian Bun.`,\n            ),\n            _createMenuItem(\n                'Herr Schulers Fry Frenzy',\n                '$12.00',\n                `Yummy seasoned curly fries with a crunch in every bite.`,\n            ),\n            _createMenuItem(\n                'Slaw Goodman',\n                '$3.00',\n                `Our tangy and flavorful slaw, good on it's own but even \n                better when paired with the ABQ Chicken Sandwich.`,\n            ),\n        )\n\n        return menuContainer;\n    }\n\n    const create = () => {\n        /**Returns a div node holding contents of the menu page.*/\n        let header = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('h1', 'Our Menu');\n        header.classList.add('headerText');\n\n        let menuPageContainer = document.createElement('div');\n        menuPageContainer.id = 'menuPage';\n        menuPageContainer.append(header, _createMenu());\n        \n        return menuPageContainer;\n    } \n\n    return { create }\n})();\n\n\n\n//# sourceURL=webpack://los-pollos-hermanos/./src/pages/menuPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;