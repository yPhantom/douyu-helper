var OK = 'OK';
var ERROR = 'ERROR';

// ================================== catch barrage ===============================
var isBlockAds = false;
var isCatchBarrage = false;

// Init the variables from chrome locally
chrome.storage.sync.get(['isBlockAds', 'isCatchBarrage'], items => {
  isBlockAds = items.isBlockAds;
  isCatchBarrage = items.isCatchBarrage;
});

// Define a timer to watch if it's need to catch barrage
setInterval(function() {
  if (isCatchBarrage) {
    sendMessageToContentScript({cmd: 'catch'}, function(response) {
      if (response === OK) {
        console.info('[background.js] Catch barrage successfully!');
      }
    });
  }
}, 8000);

// Receive the download cmd from content.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.cmd == 'download') {
    doDownload();
    sendResponse(OK);
  } else if (request.cmd == 'storage' && request.params) {
    doStorage(request.params);
    sendResponse(OK);
  }
});

/**
 * Get the time now
 * @returns the time now like 20190607-10-36
 */
function getDate() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDay();
  var hour = now.getHours();
  var min = now.getMinutes();
  var m = month < 10 ? '0' + month : month;
  var d = day < 10 ? '0' + day : day;
  var h = hour < 10 ? '0' + hour : hour;
  var mi = min < 10 ? '0' + min : min;

  return '' + year + m + d + "-" + h + "-"+ mi
}

/**
 * We call this function the download the barrages.
 * @param {[string]} array the barrage content
 */
function doDownload() {
  chrome.storage.sync.get('barrages', function(barrages) {
    alert(barrages.barrages);
    var blob = new Blob(barrages.barrages, {type: "text/plain"});
    var url = URL.createObjectURL(blob);
    var fileName = "斗鱼助手-弹幕下载" + getDate() + ".txt";
    chrome.downloads.download({
        url: url,
        filename: fileName
    });
    chrome.storage.sync.remove('barrages');
  });
}

function doStorage(params) {
  chrome.storage.sync.set({barrages: params});
}

/**
 * We wrap the chrome extension api of sending message to content.js.
 * @param {*} message 
 * @param {Function} callback 
 */
function sendMessageToContentScript(message, callback) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    if (chrome.runtime.lastError) {
      // console.warn("Whoops.. " + chrome.runtime.lastError.message);
    } else {
      chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
        if (chrome.runtime.lastError) {
          // console.warn("Whoops.. " + chrome.runtime.lastError.message);
        } else if (callback) {
          callback(response);
        }
      })
    }
  });
}


// ====================================================================