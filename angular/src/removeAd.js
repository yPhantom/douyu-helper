// ==UserScript==
// @name         斗鱼网页版精简模式
// @namespace    https://github.com/dokill/simple_douyu
// @version      0.2
// @description  去掉乱七八糟的广告弹窗，只留下视频播放窗口和顶部导航栏
// @author       dokill
// @match        https://www.douyu.com/*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

(function() {
  let videoRealWidth = $(".layout-Player-video").outerWidth();

  let windowWidth = $(window).width();
  let leftWidth = 100 + videoRealWidth;

  let subtitleBoxWidth = windowWidth-leftWidth-190;

  let cssText = `#js-bottom,.HeaderNav{display:none!important;height:0!important}`;
  cssText += `.Header-menu-link a,.public-DropMenu-link{color:#fff!important;}`;
  cssText += `.Header-broadcast-wrap,.Header-download-wrap{display:none!important}`;
  cssText += `.layout-Player-chat{display:none!important;height:0!important}`;
  cssText += `#js-bottom{display:none!important;height:0!important}`;
  cssText += `#guess-main-panel,#js-player-guessgame{display:none!important;height:0!important}`;
  cssText += `#js-aside{display:none!important;height:0!important}`;
  cssText += `#js-player-title{display:none!important;height:0!important}`;
  cssText += `#js-player-toolbar{height:0!important;overflow:hidden!important}`;
  cssText += `#js-room-activity{display:none!important;}`;
  cssText += `.LotteryContainer{display:none!important;}`;
  cssText += `.UPlayerLotteryEnter{display:none!important;}`;
  cssText += `.layout-Player-announce{display:none!important;}`;
  cssText += `.ChatRank{display:none!important;}`;
  cssText += `#js-player-barrage{top:0!important;}`;
  cssText += `.Barrage-listItem > div {display:none!important}`;
  cssText += `.Barrage-listItem > div.Barrage-notice--normalBarrage{display:block!important}`;
  cssText += `.layout-Main{padding:0!important;margin:0!important;}`;
  cssText += `.layout-Player-aside{top:-1px!important;width:${subtitleBoxWidth}px!important}`;
  cssText += `.layout-Player-asideMain{position:static!important}`;
  cssText += `.Barrage{border-color:#rgba(255,255,255,0.3)!important}`;
  cssText += `.layout-Player-asideMainTop{bottom:0!important;}`;
  cssText += `.layout-Player-rankAll{display:none!important;}`;
  cssText += `.layout-Player-effect{display:none!important;}`;
  cssText += `.Barrage-content{color:#16a085!important;}`;
  cssText += `.Barrage-icon,.UserLevel,.Motor,.Barrage-hiIcon,.FansMedal,.AnchorLevel,.ActLoveDay-medal,.Barrage-userEnter{display:none!important;}`;
  cssText += `.layout-Player-rank{display:none!important;}`;
  cssText += `.Header-wrap{background:#2c3e50!important;}`;
  cssText += `.GiftEffect-box{background:#2c3e50!important;}`;
  cssText += `div[class*=" host-"]{display:none!important}`;
  cssText += `div[class^="closeBg"] , div[class^="watermark"]{display:none}`;

  $("head").append(`<style type='text/css'>${cssText}</style>`)

  $("#js-header li:last").click(function(){
    $(".layout-Player-videoSub").fadeToggle( "fast" )
  })

})();
