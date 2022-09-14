chrome.idle.setDetectionInterval(300);



chrome.idle.onStateChanged.addListener(function (newState) {
    if (newState == "idle") {
        var url = "https://www.scs.ch/projekte/";
        chrome.tabs.update(undefined, { url: url });
    }
});


