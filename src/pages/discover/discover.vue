<script setup lang="ts">
import { ref } from 'vue'

const paging = ref()
const dataList = ref([])

const queryList = (pageNo: number, pageSize: number) => {
  let timer = null
  if (pageNo < 3) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      paging.value?.complete([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    }, 700)
  } else {
    paging.value?.complete([])
  }
}
</script>

<template>
  <view id="discover" class="flex flex-col h-full">
    <su-nav-bar :title-center="true" title="发现"></su-nav-bar>
    <view class="flex-1">
      <z-paging
        ref="paging"
        v-model="dataList"
        :fixed="false"
        height="100%"
        refresher-threshold="100rpx"
        :loading-more-custom-style="{ 'font-size': '11px', 'letter-spacing': '0.05em' }"
        loading-more-loading-icon-type="circle"
        loading-more-no-more-text="我是有底线的"
        :loading-more-no-more-line-custom-style="{ 'background-color': '#EAEAEA' }"
        @query="queryList"
      >
        <template v-for="(v, i) in dataList" :key="i">
          <view class="h-sm mx-sm mt-md bg-orange-500 rounded-2 grid place-content-center">
            <text class="font-bold font-mono text-white">{{ v }}</text>
          </view>
        </template>
      </z-paging>
    </view>
  </view>
</template>

<style scoped></style>
