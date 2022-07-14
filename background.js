//"use strict";
chrome.runtime.onInstalled.addListener(function () {
    chrome.tabs.create({ 'url': 'chrome://extensions/?options=' + chrome.runtime.id });
    // Prevent url not being set
    chrome.storage.sync.get(function (item) {
        if (item.url == undefined)
            chrome.storage.sync.set({ url: '' });
    });
});
const openURL = function crU() {
    chrome.tabs.create({ url: "https://portal.sa.dendai.ac.jp/" }, tab => { });
}
chrome.action.onClicked.addListener(openURL);