chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if(details.url.endsWith("replay-min.js"))
		{
			return { redirectUrl: chrome.extension.getURL("website/game/replay-min.js") };
		}
    },
    {urls: ["*://*.haxball.com/*.js"]},
    ["blocking"]
);