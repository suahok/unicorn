export default function () {
  let appBarHeight = $ref(0)
  let menuRectWidth = $ref(0)
  let menuRectHeight = $ref(44)

  const { statusBarHeight, windowBottom: screenWidth, windowHeight: screenHeight } = uni.getSystemInfoSync()

  // #ifdef MP
  const { top, width, height } = uni.getMenuButtonBoundingClientRect()
  menuRectHeight = (top - (statusBarHeight as number)) * 2 + height
  menuRectWidth = width
  // #endif
  appBarHeight = menuRectHeight + (statusBarHeight as number)

  return { statusBarHeight, menuRectWidth, menuRectHeight, appBarHeight, screenWidth, screenHeight }
}
