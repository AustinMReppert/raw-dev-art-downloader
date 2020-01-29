let pageImgExpression = /https:\/\/image.rawdevart\.com\/comic\/.+?\/chapters\/.+?\/.+?\.jpg/g;

const downloadPage = () => {
    let bodyText = document.body.textContent;
    var images = bodyText.match(pageImgExpression);
    chrome.runtime.sendMessage(images, () => {}, );
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    downloadPage();
});