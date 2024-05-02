chrome.idle.setDetectionInterval(300);



chrome.idle.onStateChanged.addListener(function (newState) {
    if (newState == "idle") {
        var url = "Input URL";
        chrome.tabs.update(undefined, { url: url });
    }
});


