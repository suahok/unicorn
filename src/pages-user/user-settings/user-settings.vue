<script setup lang="ts">
import VuListCell from '@/pages-user/components/vu-list-cell/vu-list-cell.vue'

function changeBack() {
  uni.navigateBack()
}
</script>

<template>
  <vu-app-layout>
    <template #appbar>
      <vu-nav-bar title="设置">
        <template #leading>
          <view class="flex h-full items-center" @click="changeBack">
            <text class="text-2xl text-[#333333] i-eva-arrow-ios-back-fill"></text>
          </view>
        </template>
      </vu-nav-bar>
    </template>
    <vu-scrollable-view full-height>
      <view class="bg-white flex h-full w-full -z-9 fixed justify-center items-end">
        <image class="mb-24 opacity-10" src="@/static/bg-mine.png" mode="widthFix" />
      </view>
      <view class="h-26 w-full z-10"></view>
      <vu-list-cell prefixIcon="i-heroicons-identification" title="个人资料"></vu-list-cell>
      <vu-list-cell prefixIcon="i-mingcute-location-3-line" title="地址管理"></vu-list-cell>
      <vu-list-cell prefixIcon="i-ic-sharp-security" title="账户安全"></vu-list-cell>
      <vu-list-cell prefixIcon="i-ic-outline-account-balance-wallet" title="收款账户"></vu-list-cell>
      <view class="h-26 w-full"></view>
      <view class="h-26 w-full"></view>
      <vu-list-cell prefixIcon="i-la-envelope-open-text" title="意见反馈"></vu-list-cell>
      <vu-list-cell prefixIcon="i-la-comments-solid" title="联系客服"></vu-list-cell>
      <view class="h-26 w-full"></view>
      <view class="h-26 w-full"></view>
      <vu-list-cell prefixIcon="i-eva-message-square-outline" title="消息设置"></vu-list-cell>
      <vu-list-cell prefixIcon="i-eva-lock-outline" title="隐私设置"></vu-list-cell>
      <vu-list-cell prefixIcon="i-ic-outline-delete-forever" title="缓存清理" value="10.5 M"></vu-list-cell>
      <vu-list-cell prefixIcon="i-eva-info-outline" title="关于软件"></vu-list-cell>
      <view class="h-26 w-full"></view>
      <view class="py-md">
        <button class="bg-white mx-lg py-xs text-sm tracking-wider text-[#A4A3A9] after:border-[#C4C4CE]">
          退出登陆
        </button>
      </view>
    </vu-scrollable-view>
  </vu-app-layout>
</template>

<style scoped></style>
