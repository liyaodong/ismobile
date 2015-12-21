const VW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

const VIEW = {
  mobile: 768,
  tablet: 992,
  medium: 1200
};

const UA = navigator.userAgent;
const mobileUA = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;

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

  isRetina: () => window.devicePixelRatio >= 2,
  isHighResolution: () => window.devicePixelRatio >= 1.5,
};

export default isMobile;
