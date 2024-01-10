import uiConfig from './ui-config'

const aLiSDKModule = uni.requireNativePlugin('AliCloud-NirvanaPns')
const sdkInfo =
  'M5PALtBzhvXus0tNLLX2swUxHXkiOaCKIpQEmG/9X8Ulf0L0mxiNYvM6cH7z96XTU1mNGxaznaRR8eFPCA7pBjJS+bAj8czHzg7ATLn/q2XYLQpVt25XicA5WesNYbmFyFxFbAvmh42Gyoddg9KZR8wpjgMdEb1DAgSeg8SiX+aBw+vxTzB/nwXUK3azuZhNfbvTpBlXSwlhS9s03+MIJ1tnHthFapPdJreMEIfsghELibALM8bRNvFKP3hLK/vrLGxIx/lr+ZaW2/KTliuf8wd38ctLsOYkXDkZeBnwsFDNyUln1EMifw=='
const config = uiConfig.buildFullscreen()

export function aLiSDKModuleInit() {
  aLiSDKModule.setAuthSDKInfo(sdkInfo)
  checkEnvLogin()
}

function checkEnvLogin() {
  /**
   * 1: 检查号码认证环境
   * 2: 检查一键登录环境
   */
  aLiSDKModule.checkEnvAvailable(2, (result: any) => {
    if (result.resultCode === '600000') {
      console.log('当前环境支持一键登录')
      accelerateVerify()
    } else {
      console.log('当前环境不支持一键登录,', result.msg)
    }
    console.log('checkEnvAvailableResult', JSON.stringify(result))
  })
}

function accelerateVerify() {
  aLiSDKModule.accelerateVerify(5000, (result: any) => {
    console.log(JSON.stringify(result))
    if (result.resultCode === '600000') {
      console.log('加速获取本机号码校验Token成功')
    } else {
      console.log('加速获取本机号码校验Token失败,' + result.msg)
    }
  })
}

export function oauthLoginToken() {
  aLiSDKModule.getLoginToken(
    5000,
    config,
    (tokenResult: any) => {
      if ('600001' == tokenResult.resultCode) {
        console.log('授权页拉起成功')
      } else if ('600000' == tokenResult.resultCode) {
        console.log('tokenResult=>', tokenResult)
        aLiSDKModule.quitLoginPage()
      } else {
        aLiSDKModule.quitLoginPage()
      }
    },
    (clickResult: any) => {
      console.log('clickResult=>', clickResult)
      switch (clickResult.resultCode) {
        case '700000':
          console.log('用户点击返回按钮')
          aLiSDKModule.quitLoginPage()
          break
        case '700001':
          console.log('用户切换其他登录方式')
          aLiSDKModule.quitLoginPage()
          break
        case '700002':
          console.log('用户点击登录按钮')
          if (clickResult.result.isChecked) {
            console.log('获取Token成功')
            aLiSDKModule.quitLoginPage()
          } else {
            console.log('请同意服务条款')
            uni.showToast({
              title: '请同意服务条款',
              icon: 'none',
              position: 'bottom'
            })
          }
          break
        case '700003':
          console.log('用户点击checkBox')
          break
        case '700004':
          console.log('用户点击协议')
          break
        case '700010': //调用userControlAuthPageCancel后方可使用
          console.log('用户点击返回按钮，Android专用')
          break
        case '700011': //调用userControlAuthPageCancel后方可使用
          console.log('用户使用物理返回键，Android专用')
          break
      }
    },
    (customUiResult: any) => {
      console.log('customUiResult=>', customUiResult)
      //这里回调的是自定义控件的点击事件，通过 customUiResult.widgetId 来识别自定义控件，然后做一些自己的处理
    }
  )
}
