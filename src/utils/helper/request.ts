const { VITE_BASE_URL } = import.meta.env

uni.addInterceptor('request', {
  invoke(config) {
    config.url = `${VITE_BASE_URL}${config.url}`
  },
  success(res) {},
  fail(reason) {},
  complete(result) {}
})

export function request(config: UniApp.RequestOptions): Promise<any> {
  uni.showLoading({ mask: true })
  return new Promise((resolve, reject) => {
    uni.request({
      ...config,
      success(res) {
        resolve(res)
      },
      fail(reason) {
        uni.showToast({
          title: '加载失败',
          duration: 1000
        })
        reject(reason)
      },
      complete(result) {
        uni.hideLoading()
      }
    })
  })
}
