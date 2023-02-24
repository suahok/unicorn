<script setup lang="ts">
let currentSwiper = $ref<number>(1)

function onSwiperChange(evt: any) {
  currentSwiper = evt.detail.current + 1
}
</script>

<template>
  <vu-app-layout>
    <template #appbar>
      <vu-nav-bar title="社区"></vu-nav-bar>
    </template>
    <swiper
      class="swiper"
      indicator-dots
      circular
      autoplay
      indicator-color="#F5F7FA"
      indicator-active-color="#ED5565"
      previous-margin="50rpx"
      next-margin="50rpx"
      @change="onSwiperChange"
    >
      <swiper-item v-for="i in 5" :key="i">
        <view :class="['swiper-item', currentSwiper === i && 'swiper-item-active']">
          <image
            lazy-load
            :class="['image', currentSwiper === i && 'image-active']"
            :src="`https://picsum.photos/750/375?random=${i}`"
            mode="aspectFill"
          />
        </view>
      </swiper-item>
    </swiper>
  </vu-app-layout>
</template>

<style scoped lang="scss">
.swiper {
  height: 300rpx;

  /* #ifdef MP-WEIXIN */
  ::v-deep(.wx-swiper-dots) {
    .wx-swiper-dot {
      width: 30rpx;
      height: 5rpx;
      border-radius: 5rpx;
    }
  }
  /* #endif */
  /* #ifndef MP-WEIXIN */
  ::v-deep(.uni-swiper-dots) {
    .uni-swiper-dot {
      width: 30rpx;
      height: 5rpx;
      border-radius: 5rpx;
    }
  }
  /* #endif */

  .swiper-item {
    height: 100%;
    margin: 0 15rpx;
    border-radius: 12rpx;
    background-color: whitesmoke;
    overflow: hidden;
    transform: scale3d(1, 0.85, 1);
    transition: transform 500ms ease-out;

    .image {
      width: 100%;
      height: 100%;
      transform: scale3d(1.4, 1.3, 1);
      transition: transform 500ms ease-out;
    }

    .image-active {
      transform: scale3d(1, 1, 1);
    }
  }

  .swiper-item-active {
    transform: scale3d(1, 1, 1);
  }
}
</style>
