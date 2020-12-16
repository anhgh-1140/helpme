chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  fetch('https://divine-disk-8d02.anhgh.workers.dev/')
    .then(response => response.json())
    .then(sendResponse);
});
