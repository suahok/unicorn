<script setup lang="ts">
// #ifdef MP-WEIXIN
import { useStatusBar } from '@/common/status-bar'
// #endif

type State = {
  title?: string
  leading?: boolean
  showTitle?: boolean
  titleCenter?: boolean

  barStyle?: 'dark-content' | 'light-content'
  bgColor?: string
  color?: string
  translucent?: boolean
  hidden?: boolean
}

withDefaults(defineProps<State>(), {
  title: '标题',
  leading: true,
  showTitle: true,
  titleCenter: false,
  barStyle: 'dark-content',
  color: '#000000',
  bgColor: '#FFFFFF',
  translucent: false,
  hidden: false
})

// #ifdef MP-WEIXIN
const { menuRectWidth } = useStatusBar()
// #endif

const pages = getCurrentPages()
</script>

<template>
  <su-status-bar :bar-style="barStyle" :bg-color="bgColor" :translucent="translucent" :hidden="hidden">
    <slot name="title">
      <view
        v-if="showTitle"
        class="flex w-full inset-y-0 absolute items-center"
        :class="[titleCenter ? 'justify-center' : 'px-sm box-border']"
      >
        <view v-if="pages.length > 1" class="w-54"></view>
        <text :style="{ color: color }" class="tracking-widest text-30">{{ title }}</text>
      </view>
    </slot>
    <slot name="leading">
      <navigator
        v-if="pages.length > 1"
        open-type="navigateBack"
        hover-class="none"
        class="h-full grid left-20 w-[32px] z-10 absolute place-content-center"
      >
        <uni-icons key="back" type="back" size="24" :color="color" />
      </navigator>
    </slot>
    <view class="flex h-full w-auto right-0 z-10 items-center justify-center absolute">
      <view class="flex mr-xs items-center justify-center">
        <slot name="actions"></slot>
      </view>
      <!-- #ifdef MP-WEIXIN -->
      <view :style="{ width: menuRectWidth + 'px' }" class="h-full"></view>
      <!-- #endif -->
    </view>
  </su-status-bar>
</template>

<style scoped></style>
