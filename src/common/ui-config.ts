const { platform } = uni.getSystemInfoSync()

function platformValue(androidVal: string, iosVal: string) {
  return 'android' == platform ? androidVal : 'ios' == platform ? iosVal : ''
}

function buildFullscreen() {
  const bodyWidth = plus.screen.resolutionWidth
  const bodyHeight = plus.screen.resolutionHeight
  const unit = bodyHeight! / 3
  const logoTop = String(unit - 40 * 2)
  const numberTop = String(unit)
  const sloganTop = String(unit + 50)
  const loginBtnTop = String(unit + 200)
  const switchTop = String(unit + 270)
  const privacyTop = String(unit + 100)

  return {
    uiConfig: {
      setStatusBarStyle: '2',
      setNavHidden: 'false',
      setSwitchHidden: 'false',
      setBackgroundUi: {
        backgroundColor: '#FFFFFF'
      },
      setNavUi: {
        bgColor: '#FFFFFF',
        text: '免密登录',
        textColor: '#6e828a',
        textSize: '16',
        returnImgHidden: 'true'
      },
      setLogoUi: {
        imgPath: '/static/logo.png',
        top: logoTop,
        width: '40',
        height: '40'
      },
      setSloganUi: {
        textColor: '#bdc3c7',
        textSize: '13',
        top: sloganTop
      },
      setNumberUi: {
        textColor: '#323643',
        textSize: '34',
        top: numberTop
      },
      setLoginBtnUi: {
        color: '#00b8a9',
        textSize: '16',
        height: '46',
        width: bodyWidth! - 80,
        top: loginBtnTop
      },
      setSwitchUi: {
        text: '切换登录方式',
        textSize: '14',
        textColor: '#6e828a',
        top: switchTop
      },
      setCheckBoxUi: {
        width: '14',
        top: 2
      },
      setAppPrivacyOne: {
        title: '用户协议',
        url: 'https://www.taobao.com'
      },
      setAppPrivacyTwo: {
        title: '隐私政策',
        url: 'https://www.pexels.com/zh-cn/'
      },
      setAppPrivacyThree: {
        title: '服务协议',
        url: 'https://vanschneider.com/colors'
      },
      setPrivacyUi: {
        vendorPrivacyPrefix: '《',
        vendorPrivacySuffix: '》',
        top: privacyTop,
        marginLR: '50',
        alignment: '1',
        expandAuthPageCheckedScope: true
      },
      setWebNavUi: {
        bgColor: '#FFFFFF',
        textColor: '#6e828a',
        textSize: '15'
      },
      widgets: [
        {
          widgetId: 'close',
          type: 'Button',
          left: '25',
          top: platformValue('0', '64'),
          width: '24',
          height: '24',
          backgroundImage: '/static/close_black.png'
        },
        {
          widgetId: 'line',
          type: 'Text',
          alignment: '1',
          textContent: '其他方式登录',
          textSize: '13',
          textColor: '#a4b0be',
          backgroundColor: '#00FFFFFF',
          left: '10',
          top: String(unit + 200),
          width: String(bodyWidth! - 20),
          height: '20'
        },
        {
          widgetId: 'alipay',
          type: 'Button',
          left: String(bodyWidth! * 0.5 - 20 - 50),
          top: String(unit + 210),
          width: '50',
          height: '50',
          backgroundImage: '/static/close_black.png'
        },
        {
          widgetId: 'taobao',
          type: 'Button',
          left: String(bodyWidth! * 0.5 + 20),
          top: String(unit + 200),
          width: '50',
          height: '50',
          backgroundImage: '/static/close_black.png'
        }
      ]
    }
  }
}

function buildAlert() {
  const bodyWidth = plus.display.resolutionWidth
  const dialogWidth = bodyWidth! * 0.8
  const dialogHeight = dialogWidth / 0.618
  const unit = dialogHeight / 10
  const logoTop = String(unit * 0.3)
  const sloganTop = String(unit * 2.5)
  const numberTop = String(unit * 3.2)
  const loginBtnTop = String(unit * 4.3)
  const switchTop = String(unit * 6.0)

  return {
    uiConfig: {
      setDialogTheme: {
        width: String(dialogWidth),
        height: String(dialogHeight)
      },
      setNavUi: {
        text: '一键登录',
        textColor: '#000000',
        bgColor: '#00FFFFFF',
        returnImgPath: 'static/close_black.png',
        returnImgWidth: '24',
        returnImgHeight: '24'
      },
      setLogoUi: {
        imgPath: 'static/logo.png',
        top: logoTop
      },
      setSloganUi: {
        top: sloganTop
      },
      setNumberUi: {
        top: numberTop,
        textSize: platformValue('23', '24')
      },
      setLoginBtnUi: {
        top: loginBtnTop
      },
      setSwitchUi: {
        textColor: '#0faeff',
        top: switchTop
      },
      setPrivacyUi: {
        expandAuthPageCheckedScope: true
      },
      setAppPrivacyOne: {
        title: '用户协议',
        url: 'https://www.taobao.com'
      },
      setAppPrivacyTwo: {
        title: '隐私政策',
        url: 'https://www.taobao.com'
      },
      setAppPrivacyThree: {
        title: '服务协议',
        url: 'https://www.taobao.com'
      }
    }
  }
}

function buildSheet() {
  const dialogHeight = 460
  const unit = dialogHeight / 10
  const logoTop = String(unit * 0.3)
  const sloganTop = String(unit * 2.5)
  const numberTop = String(unit * 3.2)
  const loginBtnTop = String(unit * 4.3)
  const switchTop = String(unit * 6.0)

  return {
    uiConfig: {
      setDialogTheme: {
        height: String(dialogHeight),
        isBottom: 'true'
      },
      setNavUi: {
        text: '一键登录',
        textColor: '#000000',
        bgColor: '#00FFFFFF',
        returnImgPath: 'static/close_black.png',
        returnImgWidth: '24',
        returnImgHeight: '24'
      },
      setLogoUi: {
        imgPath: 'static/logo.png',
        top: logoTop
      },
      setSloganUi: {
        top: sloganTop
      },
      setNumberUi: {
        top: numberTop,
        textSize: platformValue('23', '24')
      },
      setLoginBtnUi: {
        top: loginBtnTop
      },
      setSwitchUi: {
        textColor: '#0faeff',
        top: switchTop
      },
      setPrivacyUi: {
        expandAuthPageCheckedScope: true
      },
      setAppPrivacyOne: {
        title: '用户协议',
        url: 'https://www.taobao.com'
      },
      setAppPrivacyTwo: {
        title: '隐私政策',
        url: 'https://www.taobao.com'
      },
      setAppPrivacyThree: {
        title: '服务协议',
        url: 'https://www.taobao.com'
      }
    }
  }
}

export default {
  buildFullscreen,
  buildSheet,
  buildAlert
}
