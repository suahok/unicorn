<script lang="ts" setup>
import { onBeforeMount, onBeforeUnmount } from 'vue'
import { useStatusBar } from '@/common/status-bar'

type Status = {
  barStyle?: 'dark-content' | 'light-content'
  bgColor?: string
  enableNavbar?: boolean
  translucent?: boolean
  // #ifdef APP-PLUS
  hidden?: boolean
  // #endif
}

const props = withDefaults(defineProps<Status>(), {
  barStyle: 'dark-content',
  bgColor: '#FFFFFF',
  enableNavbar: true,
  translucent: false,
  // #ifdef APP-PLUS
  hidden: false
  // #endif
})

const { statusBarHeight, menuRectTop, navbarHeight } = useStatusBar()
const frontColor = props.barStyle === 'dark-content' ? '#000000' : '#FFFFFF'
const navbarPaddingBottom = 7

onBeforeMount(() => {
  uni.setNavigationBarColor({
    frontColor: frontColor,
    backgroundColor: props.bgColor
  })
  // #ifdef APP-PLUS
  if (props.hidden) {
    plus.navigator.setFullscreen(true)
  }
  // #endif
})

onBeforeUnmount(() => {
  // #ifdef APP-PLUS
  plus.navigator.setFullscreen(false)
  // #endif
})
</script>

<template>
  <view class="status-bar" :style="{ background: bgColor }" :class="{ 'status-lucency': translucent }">
    <!-- #ifdef MP-WEIXIN -->
    <view :style="{ height: menuRectTop - navbarPaddingBottom + 'px' }"></view>
    <view v-if="enableNavbar" :style="{ height: navbarHeight + navbarPaddingBottom * 2 + 'px' }" class="status-content">
      <slot></slot>
    </view>
    <!-- #endif -->
    <!-- #ifndef MP-WEIXIN -->
    <view :style="{ height: statusBarHeight + 'px' }"></view>
    <view v-if="enableNavbar" :style="{ height: navbarHeight + 'px' }" class="status-content">
      <slot></slot>
    </view>
    <!-- #endif -->
  </view>
</template>

<style scoped>
.status-bar {
  width: 100%;
}

.status-lucency {
  position: fixed;
  top: 0;

  z-index: 99;
}

.status-content {
  position: relative;

  width: 100%;
}
</style>
