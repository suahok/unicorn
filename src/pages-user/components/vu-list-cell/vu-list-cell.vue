<script setup lang="ts">
type Prop = {
  prefixIcon?: string
  suffixIcon?: string
  title?: string
  value?: string
}

const props = withDefaults(defineProps<Prop>(), { suffixIcon: 'i-la-angle-right', border: true })
const emits = defineEmits(['changeCell'])
</script>

<template>
  <view class="flex mx-md py-4 box-border items-center" @click="emits('changeCell')">
    <view class="text-2xl text-[#333333]" :class="[prefixIcon]"></view>
    <view class="mx-sm">
      <text class="font-sans text-md text-[#333333]">{{ title }}</text>
    </view>
    <slot name="value">
      <view class="flex-1 mx-2 text-right">
        <text class="text-sm text-[#8A8992]">{{ value }}</text>
      </view>
    </slot>
    <view class="text-32 text-[#8A8992]" :class="[suffixIcon]"></view>
  </view>
</template>

<style scoped></style>
