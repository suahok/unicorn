<script setup lang="ts">
import { useScreenInfo } from '@/hooks'

type ScrollableProp = {
  upperThreshold?: number
  lowerThreshold?: number
  refresherThreshold?: number
  refresherDefaultStyle?: 'black' | 'white' | 'none'
  refresherBackground?: string
  refresherEnabled?: boolean
  modelValue?: boolean
  fullHeight?: boolean
  bgColor?: string
}

const props = withDefaults(defineProps<ScrollableProp>(), {
  upperThreshold: 45,
  lowerThreshold: 45,
  refresherThreshold: 65,
  refresherDefaultStyle: 'black',
  refresherBackground: '#fff',
  refresherEnabled: false,
  modelValue: false,
  fullHeight: false,
  bgColor: 'transparent'
})
const emits = defineEmits(['update:modelValue', 'refresherrefresh', 'scrolltolower'])

const { appBarHeight, screenHeight } = useScreenInfo()
const scrollZonesHeight = screenHeight - appBarHeight
const heightType = props.fullHeight ? 'height' : 'max-height'

let triggered = $computed({
  get() {
    return props.modelValue
  },
  set(newValue: boolean) {
    emits('update:modelValue', newValue)
  }
})

function onRefresherpulling(evt: any) {
  if (evt.detail.dy < 0) return
  triggered = true
}

function onRefresherrefresh(evt: any) {
  emits('refresherrefresh', evt)
}

function onRefresherrestore() {
  triggered = false
}

function onScrolltolower(evt: any) {
  emits('scrolltolower', evt)
}
</script>

<template>
  <scroll-view
    :style="{ [heightType]: scrollZonesHeight + 'px', 'background-color': bgColor }"
    class="scrollable"
    :scroll-y="true"
    :scroll-with-animation="true"
    :refresher-enabled="refresherEnabled"
    :refresher-triggered="triggered"
    :upper-threshold="upperThreshold"
    :lower-threshold="lowerThreshold"
    :refresher-default-style="refresherDefaultStyle"
    :refresher-background="refresherBackground"
    :refresher-threshold="refresherThreshold"
    @refresherpulling="onRefresherpulling"
    @refresherrefresh="onRefresherrefresh"
    @refresherrestore="onRefresherrestore"
    @scrolltolower="onScrolltolower"
  >
    <slot></slot>
    <view class="space"></view>
  </scroll-view>
</template>

<style scoped lang="scss">
.scrollable {
  box-sizing: border-box;

  .space {
    height: 0.875rem;
  }
}
</style>
