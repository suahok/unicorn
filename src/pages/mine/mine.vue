<script setup lang="ts"></script>

<template>
  <view id="mine" class="flex flex-col h-full">
    <su-nav-bar :title-center="true" title="我的"></su-nav-bar>
    <scroll-view scroll-y class="flex-auto overflow-hidden">
      <view class="h-full w-full grid">
        <view class="w-xl h-xl m-auto bg-purple-100 rounded-6">
          <su-chart-pie :value="37" />
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<style scoped></style>
