// EXAMPLE FROM YOUTUBE
/*
let activeTabId = 0;

chrome.tabs.onActivated.addListener(tab => {
  chrome.tabs.get(tab.tabId, currentTabInfo => {
    activeTabId = tab.tabId;
    if (/^https:\/\/www\.google/.test(currentTabInfo.url)) {
      chrome.tabs.insertCSS(null, { file: './mystyles.css' });
      chrome.tabs.executeScript(null, { file: './foreground.js' }, () => {
        console.log('i injected');
      });
    }
  });
});

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.message === 'check the storage') {
    chrome.tabs.sendMessage(activeTabId, {
      message: 'i got the message - background',
    });

    chrome.storage.local.get('password', value => console.log(value));
  }
});
*/
