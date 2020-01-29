const downloadImage = (images, imageNum) => {
    var name = images[0].substring(34);
    name = name.substring(0, name.indexOf("/"));
    var filename = name + "/" + imageNum + ".jpg";
    chrome.downloads.download({ url: images[imageNum], filename: filename });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request === null || request.length === 0) return;
    for (i = 0; i < request.length; i++)
        downloadImage.bind(request, i);
});
