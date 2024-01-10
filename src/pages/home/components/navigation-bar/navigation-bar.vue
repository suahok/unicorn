<script setup lang="ts">
// #ifdef MP-WEIXIN
import { useStatusBar } from '@/common/status-bar'
const { menuRectWidth } = useStatusBar()
// #endif

const handleFocusSearcher = () => {
  uni.navigateTo({
    url: '/searcher/pages/index/index'
  })
}
</script>

<template>
  <su-status-bar>
    <view class="flex h-full ml-sm gap-x-xs items-center">
      <view class="flex items-center">
        <uni-icons class="mb-0.5" custom-prefix="iconfont" type="icon-place" size="18" />
        <text class="font-bold text-sm ml-0.5">昆明市</text>
      </view>
      <view
        class="rounded-32 flex bg-gray-100 flex-1 h-64 px-2_dl_5 box-border items-center"
        @click="handleFocusSearcher"
      >
        <uni-icons custom-prefix="iconfont" type="icon-seach" size="18" />
        <input
          inputmode="none"
          class="h-full text-sm w-full pl-2"
          placeholder="搜索"
          placeholder-style="font-size: 13px"
        />
      </view>
      <view class="rounded-full bg-gray-100 h-64 grid w-64 box-border place-content-center">
        <uni-icons custom-prefix="iconfont" type="icon-msg" size="20" />
      </view>
      <view class="rounded-full bg-gray-100 h-64 grid w-64 box-border place-content-center">
        <uni-icons custom-prefix="iconfont" type="icon-headset" size="18" />
      </view>
      <!-- #ifdef MP-WEIXIN -->
      <view :style="{ width: menuRectWidth + 'px' }" class="h-full"></view>
      <!-- #endif -->
      <!-- #ifndef MP-WEIXIN -->
      <view class="h-full"></view>
      <!-- #endif -->
    </view>
  </su-status-bar>
</template>

<style scoped></style>
