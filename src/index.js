const VW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

const VIEW = {
  mobile: 768,
  tablet: 992,
  medium: 1200
};

const UA = navigator.userAgent;
const mobileUA = /Android|webOS|Mobile Safari|MQQBrowser|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|micromessenger/i;

var isMobile = {
  isMobileUA: () => mobileUA.test(UA),

  isIOS: () => /iphone|ipad|ipod/i.test(UA),
  isAndroid: () => /android/i.test(UA),

  isWechat: () => /micromessenger/i.test(UA),
  isWechatAndroid: () => isWechat() && isAndroid(),
  isWechatIOS: () => isWechat() && isIOS(),

  isMobileView: () => VW < VIEW.mobile,
  isTabletView: () => VW < VIEW.tablet && VW >= VIEW.mobile,
  isMediumView: () => VW < VIEW.medium && VW >= VIEW.tablet,
  isLargeView : () => VW >= VIEW.medium,
};

export default isMobile;
