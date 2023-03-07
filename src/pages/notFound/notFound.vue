<script setup lang="ts">
function handleGoBack() {
  uni.redirectTo({ url: '/pages/mine/mine' })
}
</script>

<template>
  <vu-app-layout>
    <view class="notFound">
      <image class="image" src="@/static/notFound.png" mode="widthFix" />
      <view class="text-box">
        <text class="title">Oh no!</text>
        <view class="subTitle">
          <text>Something went wrong,</text>
          <text>Please try again.</text>
        </view>
      </view>
      <button class="button" @click="handleGoBack">GO BACK</button>
    </view>
  </vu-app-layout>
</template>

<style scoped lang="scss">
.notFound {
  height: 100vh;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  background-color: #fff;
}

.image {
  width: 100%;
}

.text-box {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  .title {
    color: #302b49;
    font-size: 34rpx;
    font-weight: 600;
    text-align: center;
    margin-bottom: 20rpx;
  }

  .subTitle {
    color: #6e6b7c;
    font-size: 28rpx;
    font-weight: 400;
    line-height: 1.8;
    text-align: center;

    display: flex;
    flex-flow: column nowrap;
  }
}

.button {
  width: 220rpx;
  height: 80rpx;
  border: none;
  outline: none;
  margin-top: 100rpx;
  border-radius: 40rpx;

  font-size: 26rpx;
  font-weight: 500;
  line-height: 3;

  color: white;
  background-color: #70daac;
}
</style>
