<script setup lang="ts">
import { useSlots } from 'vue'
import { useScreenInfo } from '@/hooks'

type NavBarProp = {
  title: string
  subTitle?: string
  brightness: 'default' | 'light' | 'dark'
  translucent: boolean
  enableNavbar: boolean
  backgroundColor: string
}

const props = withDefaults(defineProps<NavBarProp>(), {
  title: '标题',
  brightness: 'default',
  translucent: false,
  enableNavbar: true,
  backgroundColor: 'rgba(250,250,250,1)'
})

const emit = defineEmits(['onSubTitle'])
const slots = useSlots()
const { statusBarHeight, menuRectWidth, menuRectHeight } = useScreenInfo()

let alignment = $ref<string>('justify-center')
const showLeading = $computed(() => pageLength > 1)

const pages = getCurrentPages()
const pageLength = pages.length

// 设置状态栏的主题
if (props.brightness === 'dark') {
  uni.setNavigationBarColor({
    frontColor: '#000000',
    backgroundColor: '#f4f4f4'
  })
} else if (props.brightness === 'light') {
  uni.setNavigationBarColor({
    frontColor: '#ffffff',
    backgroundColor: '#444'
  })
}

// 小程序中如果右边设置了内容就把标题靠左居中
// #ifdef MP
if (slots.actions || props.subTitle) {
  alignment = 'justify-start'
}
// #endif

function changeNavigateTo() {
  if (pageLength > 1) return uni.navigateBack()
  else uni.switchTab({ url: '/pages/home/home' })
}
</script>

<template>
  <view :style="{ 'background-color': backgroundColor }">
    <view :style="{ height: statusBarHeight + 'px' }"></view>
    <view
      v-if="enableNavbar"
      :style="{ height: menuRectHeight + 'px' }"
      :class="['nav-bar-content', `nav-bar-${brightness}`]"
    >
      <slot>
        <view class="leading-wrapper">
          <slot name="leading">
            <text v-if="showLeading" class="text" @change="changeNavigateTo"></text>
          </slot>
        </view>
        <view :style="{ height: menuRectHeight + 'px' }" :class="['title-wrapper', alignment]">
          <slot name="title">
            <text class="text">{{ title }}</text>
          </slot>
        </view>
        <view class="actions-wrapper">
          <slot name="actions">
            <text class="text" @click="emit('onSubTitle')">{{ subTitle }}</text>
          </slot>
          <!-- #ifdef MP -->
          <view :style="{ width: menuRectWidth + 'px' }"></view>
          <!-- #endif -->
        </view>
      </slot>
    </view>
  </view>
</template>

<style scoped lang="scss">
.nav-bar-content {
  padding: 0 30rpx;
  position: relative;
  display: flex;
  justify-content: space-between;

  .leading-wrapper,
  .title-wrapper {
    .text {
      font-size: 30rpx;
    }
  }

  .actions-wrapper {
    display: flex;
    align-items: center;

    .text {
      font-size: 28rpx;
    }
  }

  .title-wrapper {
    width: calc(750rpx - 30rpx * 2);
    position: absolute;
    flex-flow: row nowrap;
    display: flex;
    align-items: center;
  }

  .justify-start {
    justify-content: flex-start;
  }

  .justify-center {
    justify-content: center;
  }
}

.nav-bar-light {
  .text {
    color: #f5f7fa;
  }
}

.nav-bar-dark {
  .text {
    color: #434a54;
  }
}
</style>
