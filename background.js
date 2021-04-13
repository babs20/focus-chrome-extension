chrome.tabs.onActivated.addListener(tab => {
  chrome.tabs.get(tab.tabId, currentTabInfo => {
    if (/^https:\/\/www\.google/.test(currentTabInfo.url)) {
      chrome.tabs.insertCSS(null, { file: './mystyles.css' });
      chrome.tabs.executeScript(null, { file: './foreground.js' }, () => {
        console.log('i injected');
      });
    }
  });
});
