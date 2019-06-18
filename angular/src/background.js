// ============================= Router =========================================

var isLoadCustom = false;
// ==============================================================================
var OK = 'OK';
var ERROR = 'ERROR';

var isBlockAds = false;

// Init the variables from chrome locally
chrome.storage.sync.get(['isBlockAds'], items => {
  isBlockAds = items.isBlockAds;
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.cmd === 'notifyFriendBarrage') {
    var barrage = request.params;
    alert('ffff');
    chrome.notifications.create(null, {
      type: 'basic',
      iconUrl: 'icon.png',
      title: barrage.nickName,
      message: barrage.content
    });
    sendResponse(OK);
  }
});
