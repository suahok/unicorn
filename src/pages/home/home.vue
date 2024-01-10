<script setup lang="ts">
import { onHide } from '@dcloudio/uni-app'
import { ref, shallowRef } from 'vue'
import NavigationBar from './components/navigation-bar/navigation-bar.vue'

const popup = ref()
const animate = ref(true)
const timeout = shallowRef()

onHide(() => {
  if (timeout.value) {
    clearTimeout(timeout.value)
  }
})

const openPopup = () => {
  animate.value = false
  if (timeout.value) clearTimeout(timeout.value)
  timeout.value = setTimeout(() => {
    popup.value?.open()
  }, 30)
  uni.hideTabBar({ animation: true })
}

const cancelPopup = () => {
  if (timeout.value) clearTimeout(timeout.value)
  timeout.value = setTimeout(() => {
    animate.value = true
    uni.showTabBar({ animation: true })
  }, 100)
  popup.value?.close()
}
</script>

<template>
  <view id="home" class="flex flex-col h-full relative">
    <NavigationBar />
    <scroll-view scroll-y class="flex-1 overflow-hidden">
      <swiper autoplay circular class="h-md my-sm w-full">
        <swiper-item>
          <view class="h-full mx-sm rounded-3 overflow-hidden">
            <image src="https://image.meiye.art/pic_CBkbJbThLouYIEJlCQn_d" mode="aspectFill" class="h-full w-full" />
          </view>
        </swiper-item>
        <swiper-item>
          <view class="h-full mx-sm rounded-3 overflow-hidden">
            <image src="https://image.meiye.art/pic_AtBdyOi9K5cLBUBsxJIdD" mode="aspectFill" class="h-full w-full" />
          </view>
        </swiper-item>
        <swiper-item>
          <view class="h-full mx-sm rounded-3 overflow-hidden">
            <image src="https://image.meiye.art/pic_jHtcY4WFxcotGE2vHV0sH" mode="aspectFill" class="h-full w-full" />
          </view>
        </swiper-item>
        <swiper-item>
          <view class="h-full mx-sm rounded-3 overflow-hidden">
            <image src="https://image.meiye.art/pic_TVVLwbj9NZdi7Trbcgf9k" mode="aspectFill" class="h-full w-full" />
          </view>
        </swiper-item>
      </swiper>
    </scroll-view>
    <uni-transition
      :show="animate"
      :mode-class="['slide-bottom', 'zoom-in', 'fade']"
      custom-class="overflow-hidden absolute bottom-xl right-md rounded-full shadow-lg shadow-gray-300"
      @click="openPopup"
    >
      <view class="p-sm bg-[#ff2d51] h-110 w-110 box-border">
        <image src="/static/record.png" mode="widthFix" class="w-full block" />
      </view>
    </uni-transition>
  </view>
  <uni-popup ref="popup" type="bottom" :safe-area="false" :is-mask-click="false" @mask-click="cancelPopup">
    <view class="bg-white flex flex-col rounded-t-8 h-8xl overflow-hidden">
      <view class="h-72 w-full self-center"></view>
      <button
        class="flex mx-md bg-[#48c0a3] rounded-2 h-96 leading-normal items-center justify-center after:border-none"
        @click="cancelPopup"
      >
        <text class="text-white tracking-wider text-32">结束</text>
      </button>
    </view>
  </uni-popup>
</template>

<style scoped></style>
