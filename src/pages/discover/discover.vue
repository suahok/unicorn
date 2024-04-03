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
  <z-paging
    ref="paging"
    v-model="dataList"
    :fixed="false"
    height="100%"
    refresher-threshold="100rpx"
    loading-more-loading-icon-type="circle"
    loading-more-no-more-text="我是有底线的"
    :loading-more-title-custom-style="{ 'font-size': '12px' }"
    :loading-more-no-more-line-custom-style="{ 'background-color': '#EAEAEA' }"
    @query="queryList"
  >
    <view
      v-for="(v, i) in dataList"
      :key="i"
      class="h-sm mx-sm mt-md bg-orange-500 rounded-2 grid place-content-center"
    >
      <text class="font-bold font-mono text-white">{{ v }}</text>
    </view>
  </z-paging>
</template>

<style scoped></style>
