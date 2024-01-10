export function useStatusBar() {
  let statusBarHeight = 0
  let navbarHeight = 0
  let menuRectTop = 0
  let menuRectWidth = 0
  let fullHeight = 0

  const windowInfo = uni.getWindowInfo()
  // #ifndef MP-WEIXIN
  statusBarHeight = windowInfo.statusBarHeight
  navbarHeight = 44
  fullHeight = statusBarHeight + navbarHeight
  // #endif
  // #ifdef MP-WEIXIN
  const { top, left, height } = uni.getMenuButtonBoundingClientRect()
  menuRectTop = top
  menuRectWidth = windowInfo.screenWidth - left
  statusBarHeight = top + height
  navbarHeight = height
  fullHeight = statusBarHeight
  // #endif

  return {
    fullHeight,
    statusBarHeight,
    menuRectTop,
    menuRectWidth,
    navbarHeight
  }
}
