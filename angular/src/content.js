var OK = 'OK';
var ERROR = 'ERROR';

var ID = 'id';
var TITLE = 'title';

// ================================== catch barrage ===============================
var DY_BARRAGE_LIST_CLASS = 'Barrage-list';

var DY_BARRAGE_FANSNAME_CLASS = 'FansMedal-name';
var DY_BARRAGE_DEFAULT_FANSNAME = '精神股东';

var DY_BARRAGE_USER_LEVEL_CLASS = 'UserLevel'
var DY_BARRAGE_DEFAULT_USER_LEVEL = '低级选手';

var DY_BARRAGE_NICK_NAME_CLASS = 'Barrage-nickName';
var DY_BARRAGE_DEFAULT_NICK_NAME = '神秘人';

var DY_BARRAGE_CONTENT_CLASS = 'Barrage-content';
var DY_BARRAGE_DEFAULT_CONTENT = '******';

var barrageIdSet = new Set();
var wrapperBarrages = [];
var updateBarrageTimer = null;


// If user turn on the catch barrage switcher, then background will send catch message to content.js.
// By adding this listener to handle it.
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.cmd === 'catch') {
    updateBarrageTimer = setInterval(updateBarrage, 10);
    // go to catch barrage
    catchBarrage();
    sendResponse(OK);
  } else if (request.cmd === 'cancelCatch') {
    clearInterval(updateBarrageTimer);
  } else if (request.cmd === 'download') {
    sendDownloadMsg();
  }
});

// browser.runtime.connect().onDisconnect.addListener(function() {
//   clearInterval(updateBarrageTimer);
// })

function updateBarrage () {
  chrome.runtime.sendMessage({cmd: 'updateBarrage', params: wrapperBarrages.length}, function(response) {
    if (chrome.runtime.lastError) {
      // console.warn('Whoops.. ' + chrome.runtime.lastError.message);
    } else if(response = OK) {
      console.info('[conten.js] updateBarrage successfully');
    }
  });
}


function catchBarrage() {
  // Get html element of barrage list. It's the father node of all barrages.
  var barrageList = window.document.getElementsByClassName(DY_BARRAGE_LIST_CLASS);
  if (barrageList.length <= 0 || !barrageList[0].children) {
      return;
  }
  var barrages = barrageList[0].children;

  var barrageIdArray = getBarragesId(barrages);
  var storageIdArray = Array.from(barrageIdSet);
  dropBarrage(storageIdArray, barrageIdArray);
  // We transfer the origin html to a array consist of readable barrage.
  // We will fill wrapperBarrages with the barrage we need.
  wrapBarrage(barrages);
  if (wrapperBarrages.length > 40) {
    sendStorageMsg();

    // sendDownloadMsg();
  }
}

/**
 * Send download msg to background. Because content.js cann't access to download api.
 */
function sendDownloadMsg() {
  chrome.runtime.sendMessage({cmd:'download'}, function(response) {
    if (chrome.runtime.lastError) {
      // console.warn('Whoops.. ' + chrome.runtime.lastError.message);
    } else if(response = OK) {
      console.info('[conten.js] Download successfully');
    }
  });
}

function sendStorageMsg() {
  chrome.runtime.sendMessage({cmd:'storage', params: wrapperBarrages}, function(response) {
    if (chrome.runtime.lastError) {
      // console.warn('Whoops.. ' + chrome.runtime.lastError.message);
    } else if(response = OK) {
      console.info('[conten.js] Storage successfully');
      wrapperBarrages.splice(0, wrapperBarrages.length);
    }
  });
}

/**
 * Convert html to barrage
 * @param {Array} barrages 
 */  
function wrapBarrage(barrages) {
  var len = barrages.length;
  for (var i = 0; i < len; i++) {
    var currentNode = barrages[i];

    var id = currentNode.getAttribute(ID); // getAttribute will not return undefined
    if (!id || barrageIdSet.has(id)) {
      continue;
    }
    barrageIdSet.add(id);

    // get fans name. such as 小僵尸
    var fansNameElement = currentNode.getElementsByClassName(DY_BARRAGE_FANSNAME_CLASS);
    var fansName = getInnerTextFromElement(fansNameElement, DY_BARRAGE_DEFAULT_FANSNAME);
    
    // get user level. such as 用户等级: 10
    var userLevelElement = currentNode.getElementsByClassName(DY_BARRAGE_USER_LEVEL_CLASS);
    var userLevel = getAttributeFromElement(userLevelElement, TITLE, DY_BARRAGE_DEFAULT_USER_LEVEL);

    // get nick name. such as 梅子酒青木马牛
    var nickNameElement = currentNode.getElementsByClassName(DY_BARRAGE_NICK_NAME_CLASS);
    var nickName = getInnerTextFromElement(nickNameElement, DY_BARRAGE_DEFAULT_NICK_NAME);

    // get barrage content. such as 测试
    var contentElement = currentNode.getElementsByClassName(DY_BARRAGE_CONTENT_CLASS);
    var content = getInnerTextFromElement(contentElement, DY_BARRAGE_DEFAULT_CONTENT);

    var now = new Date();
    var barrage = now.toLocaleString() + ' ' + userLevel + ' [' + fansName + ' ' + nickName + '] ' + ': ' + content + '\n';
    wrapperBarrages.push(barrage);
  }
}

/**
 * get element's innerText
 * @param {html} element 
 * @param {string} defaultText 
 */
function getInnerTextFromElement(element, defaultText) {
  var text = defaultText;
  if (element && element.length > 0 && element[0].innerText) {
    text = element[0].innerText;
  }
  return text;
}

/**
 * 
 * @param {*} element 
 * @param {*} attribute 
 * @param {*} defaultAttribute 
 */
function getAttributeFromElement(element, attribute, defaultAttribute) {
  var value = defaultAttribute;
  if (element && element.length > 0 && element[0].getAttribute(attribute)) {
    value = element[0].getAttribute(attribute);
  }
  return value;
}

function getBarragesId(barrageList) {
  var idArray = [];
  var len = barrageList.length;
  for (var i = 0; i < len; i ++) {
    idArray.push(barrageList[i].getAttribute(ID));
  }
  return idArray;
}

function differId(array1, array2) {
  return array1.concat(array2).filter(function(v, i ,arr) {
    return arr.indexOf(v) === arr.lastIndexOf(v);
  });
}

function dropBarrage(storageIdArray, barrageIdArray) {
  var differArray = differId(storageIdArray, barrageIdArray);
  var len = differArray.length;
  for (var i = 0; i < len; i++) {
    if (barrageIdSet.has(differArray[i])) {
      barrageIdSet.delete(differArray[i]);
    }
  }
}

// ====================================================================