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


/**
 * Convert html to barrage
 * @param {Array} barrages
 */
function wrapBarrage(currentNode) {
  // get fans name. such as 小僵尸
  var fansNameElement = currentNode.getElementsByClassName(DY_BARRAGE_FANSNAME_CLASS);
  var fansName = getInnerTextFromElement(fansNameElement, DY_BARRAGE_DEFAULT_FANSNAME);

  // get user level. such as 用户等级: 10
  var userLevelElement = currentNode.getElementsByClassName(DY_BARRAGE_USER_LEVEL_CLASS);
  var userLevel = getAttributeFromElement(userLevelElement, TITLE, DY_BARRAGE_DEFAULT_USER_LEVEL);

  // get nick name. such as 梅子酒青木马牛
  var nickNameElement = currentNode.getElementsByClassName(DY_BARRAGE_NICK_NAME_CLASS);
  var nickName = getInnerTextFromElement(nickNameElement, DY_BARRAGE_DEFAULT_NICK_NAME);
  nickName = nickName.substr(0, nickName.length - 1);

  // get barrage content. such as 测试
  var contentElement = currentNode.getElementsByClassName(DY_BARRAGE_CONTENT_CLASS);
  var content = getInnerTextFromElement(contentElement, DY_BARRAGE_DEFAULT_CONTENT);

  var now = new Date();
  return {
    date: now.toLocaleString(),
    level: userLevel,
    fansName: fansName,
    nickName: nickName,
    content: content
  };
}

/**
 * get element's innerText
 * @param {*} element
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


var timer = setInterval(function () {
  var barrages = document.getElementById('js-barrage-list');
  if (barrages) {
    clearInterval(timer);
    barrages.addEventListener('DOMNodeInserted', function (e) {
      var barrage = wrapBarrage(e.target);
      window.postMessage({barrage: barrage}, '*');
    });
  }
},1000);
