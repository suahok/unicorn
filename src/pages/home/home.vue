<script setup lang="ts">
import NavigationBar from './components/navigation-bar/navigation-bar.vue'
</script>

<template>
  <view class="flex flex-col flex-nowrap h-full">
    <NavigationBar />
    <scroll-view scroll-y class="flex-auto overflow-hidden relative">
      <view class="h-24"></view>
      <swiper autoplay circular class="h-md w-full">
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
      <view v-for="i in 10" :key="i" class="flex h-sm mx-sm mt-xs bg-indigo-300 rounded-2">
        <text class="font-[Rubik] m-auto text-white text-36">{{ i }}</text>
      </view>
      <view class="h-24"></view>
    </scroll-view>
  </view>
</template>

<style scoped></style>
