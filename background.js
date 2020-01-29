chrome.runtime.onMessage.addListener( (request, sender, sendResponse) => {
    if(request === null || request.length === 0) return;
    var name = request[0].substring(34);
    name = name.substring(0, name.indexOf("/"));
    console.log(name);
    for(i = 0; i < request.length; i++) {
     //   setTimeout(() => {
        var filename = name + "/" + i + ".jpg";
        console.log(filename);
            chrome.downloads.download({url: request[i]});
       // }, 1000);
    }
});
