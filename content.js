let pageImgExpression = /https:\/\/image.rawdevart\.com\/comic\/.+?\/chapters\/.+?\/.+?\.jpg/g;

window.addEventListener("load", () => {
    let bodyText = document.body.textContent;
    var images = bodyText.match(pageImgExpression);
    chrome.runtime.sendMessage(images, () => {}, );
});
