<script setup lang="ts"></script>

<template>
  <view id="journey" class="flex flex-col h-full">
    <su-nav-bar :title-center="true" title="行程" />
    <scroll-view scroll-y class="flex-auto overflow-hidden">
      <view class="grid h-xl bg-orange-100">
        <uni-icons class="m-auto" type="color-filled" color="rgb(249, 115, 22)" size="56" />
      </view>
      <view class="grid h-xl bg-teal-100">
        <uni-icons class="m-auto" type="vip-filled" color="rgb(20, 184, 166)" size="56" />
      </view>
    </scroll-view>
  </view>
</template>

<style scoped></style>
