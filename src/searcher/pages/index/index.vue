<script setup lang="ts">
import { ref } from 'vue'

const search = ref()

const cancel = () => {
  uni.navigateBack({ delta: 1 })
}
</script>

<template>
  <su-nav-bar title="搜索" title-center />
  <view class="m-sm">
    <view class="flex h-80 items-center">
      <view class="rounded-40 flex h-full bg-gray-100 px-xs flex-1 items-center">
        <uni-icons custom-prefix="iconfont" type="icon-seach" size="18" />
        <input
          v-model="search"
          :focus="true"
          class="flex-1 text-sm pl-2 text-gray-600"
          placeholder="搜索内容"
          placeholder-style="font-size: 28rpx"
        />
      </view>
      <text class="ml-xs text-sm tracking-wider text-gray-600" @click="cancel">取消</text>
    </view>
  </view>
</template>

<style scoped></style>
