<script setup lang="ts">
import { throttled } from '@/utils'

let triggered = $ref(false)
let counter = $ref(10)

function onRefresherrefresh() {
  counter = 10
  setTimeout(() => {
    triggered = false
  }, 2000)
}

const onScrolltolower = throttled((evt: any) => {
  counter += 10
}, 300)
</script>

<template>
  <vu-app-layout>
    <template #appbar>
      <vu-nav-bar title="首页"> </vu-nav-bar>
    </template>
    <view class="home">
      <vu-scrollable-view
        v-model="triggered"
        refresher-enabled
        @refresherrefresh="onRefresherrefresh"
        @scrolltolower="onScrolltolower"
      >
        <view v-for="i in counter" :key="i" class="box">
          <text>{{ i }}</text>
        </view>
      </vu-scrollable-view>
    </view>
  </vu-app-layout>
</template>

<style scoped lang="scss">
.box {
  height: 250rpx;
  margin: 20rpx 20rpx 0;
  border-radius: 12rpx;

  color: white;
  background-color: #a0cecb;

  font-size: medium;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
