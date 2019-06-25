// ============================= Router =========================================

var tabRouterFlag = 'home';
// ==============================================================================
var OK = 'OK';
var ERROR = 'ERROR';

var isBlockAds = false;

chrome.browserAction.onClicked.addListener(function (tab) {

  var width = 800;
  var height = 550;
  var left = Math.round((screen.width / 2) - (width / 2));
  var top = Math.round((screen.height / 2) - (height / 2));

  chrome.windows.create({
    url : 'dist/angular/index.html',
    width : width,
    height : height,
    focused : true,
    'left' : left,
    'top' : top,
    type : 'popup'
  });
});
// Init the variables from chrome locally
chrome.storage.sync.get(['isBlockAds'], items => {
  isBlockAds = items.isBlockAds;
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.cmd === 'notifyFriendBarrage') {
    var barrage = request.params;
    chrome.notifications.create(null, {
      type: 'basic',
      iconUrl: 'icon.png',
      title: barrage.nickName,
      message: barrage.content
    });
    sendResponse(OK);
  }
});
