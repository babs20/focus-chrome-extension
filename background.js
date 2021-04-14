const filter = { urls: ['<all_urls>'] };
const isBannedSite = url => {
  return (
    /(http|https):\/\/twitter.com\/.*/g.test(url) ||
    /(http|https):\/\/www.twitch.tv\/.*/g.test(url)
  );
};

const checkTime = () => {
  const currentTime = new Date().getHours();
  return currentTime < 16 && currentTime > 9;
};

const isCancelledRequest = details => {
  if (checkTime() && isBannedSite(details.url)) {
    return (blockingResponse = { cancel: true });
  }
};

chrome.webRequest.onBeforeRequest.addListener(isCancelledRequest, filter, [
  'blocking',
]);
