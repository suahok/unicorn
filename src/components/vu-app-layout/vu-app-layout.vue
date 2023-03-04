<script setup lang="ts"></script>

<template>
  <view class="app-layout">
    <slot name="appbar"></slot>
    <view class="content">
      <slot></slot>
      <slot name="content"></slot>
    </view>
  </view>
</template>

<style scoped lang="scss">
.app-layout {
  display: flex;
  flex-direction: column;
  align-items: stretch;

  .content {
    height: auto;
    box-sizing: border-box;
  }
}
</style>
