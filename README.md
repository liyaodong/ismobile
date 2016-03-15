# isMobile [![Build Status](http://img.shields.io/travis/liyaodong/mdetect.svg)](https://travis-ci.org/liyaodong/mdetect) [![Npm Status](https://img.shields.io/npm/v/mdetect.svg)](https://www.npmjs.com/package/mdetect)
---------
### Install
`npm i mdetect`

### Usage
```javascript
import { isMobileUA, isMobileView } from 'mdetect'

if(isMobileUA()) alert('Using Mobile Browser');
if(isMobileView()) alert('Mobile Viewport');
```

### Method list
* `isMobileUA`

* `isIOS`
* `isAndroid`

* `isWechat`
* `isWechatAndroid`
* `isWechatIOS`

* `isMobileView`
* `isTabletView`
* `isMediumView`
* `isLargeView `

> Viewport setting (same as bootstrap)
> mobile < 768 < tablet < 992 < medium < 1200 < large

* `isRetina`
* `isHighResolution`

### Resource
Regex was made by [detectmobilebrowsers](http://detectmobilebrowsers.com/)
