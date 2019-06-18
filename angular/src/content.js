var OK = 'OK';
var ERROR = 'ERROR';

var ID = 'id';
var TITLE = 'title';

injectCustomJs();
window.addEventListener('message', function (e) {
  console.log(e.data);
  if (e.data.barrage && e.data.barrage.nickName) {
    var barrage = e.data.barrage;
    if (barrage.nickName === '梅子酒青木马牛') {
      console.log('enter print');
      chrome.runtime.sendMessage({cmd: 'notifyFriendBarrage', params: barrage}, function (response) {
        if (chrome.runtime.lastError) {
          // console.warn('Whoops.. ' + chrome.runtime.lastError.message);
        } else if(response === OK) {
          console.info('[conten.js] updateBarrage successfully');
        }
      });
    }
  }
});

function injectCustomJs(jsPath)
{
  jsPath = jsPath || 'inject.js';
  var temp = document.createElement('script');
  temp.setAttribute('type', 'text/javascript');
  // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
  temp.src = chrome.extension.getURL(jsPath);
  temp.onload = function() {
    // 放在页面不好看，执行完后移除掉
    this.parentNode.removeChild(this);
  };
  var timer = setInterval(function () {
    if (document && document.head) {
      document.head.appendChild(temp);
      window.clearInterval(timer);
    }
  },1000);
}
// ====================================================================
