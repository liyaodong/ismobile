"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var VW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

var VIEW = {
  mobile: 768,
  tablet: 992,
  medium: 1200
};

var UA = navigator.userAgent;
var mobileUA = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;

var isMobile = {
  isMobileUA: function isMobileUA() {
    return mobileUA.test(UA);
  },

  isIOS: function isIOS() {
    return (/iphone|ipad|ipod/i.test(UA)
    );
  },
  isAndroid: function isAndroid() {
    return (/android/i.test(UA)
    );
  },

  isWechat: function isWechat() {
    return (/micromessenger/i.test(UA)
    );
  },
  isWechatAndroid: function isWechatAndroid() {
    return isWechat() && isAndroid();
  },
  isWechatIOS: function isWechatIOS() {
    return isWechat() && isIOS();
  },

  isMobileView: function isMobileView() {
    return VW < VIEW.mobile;
  },
  isTabletView: function isTabletView() {
    return VW < VIEW.tablet && VW >= VIEW.mobile;
  },
  isMediumView: function isMediumView() {
    return VW < VIEW.medium && VW >= VIEW.tablet;
  },
  isLargeView: function isLargeView() {
    return VW >= VIEW.medium;
  }
};

exports["default"] = isMobile;
module.exports = exports["default"];
