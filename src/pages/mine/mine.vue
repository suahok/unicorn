<script setup lang="ts">
function changeToSettings() {
  uni.navigateTo({
    url: '/pages-user/user-settings/user-settings'
  })
}
</script>

<template>
  <vu-app-layout>
    <template #appbar>
      <vu-nav-bar background-color="#F4F9FF" />
    </template>
    <vu-scrollable-view>
      <view class="bg-[#F4F9FF] rounded-bl-2xl rounded-br-2xl top-o h-300 w-full -z-99 fixed"></view>
      <!-- 头像、昵称 -->
      <view class="flex space-x-4 h-100 px-5 items-center justify-end">
        <text class="text-2xl text-[#333333] i-heroicons-bell"></text>
        <text class="text-2xl text-[#333333] i-mingcute-settings-1-line" @click="changeToSettings"></text>
      </view>
      <view class="flex pl-md box-border items-center justify-center">
        <image
          class="rounded-full bg-[#f4f4f4] h-140 w-140"
          src="https://picsum.photos/600/600?random=10"
          mode="aspectFill"
        />
        <view class="flex-1 ml-3">
          <view class="font-bold text-lg text-[#333333]">真的灰常郝</view>
          <view class="rounded flex bg-[#FFE4B7] mt-2 py-1 w-120 gap-1 items-center justify-center">
            <image class="h-24 w-24" src="@/static/icons/member.png" mode="scaleToFill" />
            <text class="text-22 text-[#5E5E5E]">已开通</text>
          </view>
        </view>
        <view class="rounded-tl-full rounded-bl-full flex bg-[#5882EA] py-1 pr-3 pl-2 gap-1 items-center">
          <image class="h-34 w-34" src="@/static/icons/check-in.png" mode="scaleToFill" />
          <text class="text-sm text-white">签到</text>
        </view>
      </view>
      <!-- 会员信息、用户余额 -->
      <view class="bg-white rounded-lg mx-sm mt-xl overflow-hidden">
        <view class="flex py-sm bg-[#FFE7C0] px-md items-center justify-between">
          <view class="flex items-center">
            <image class="h-32 w-32" src="@/static/icons/member.png" mode="scaleToFill" />
            <text class="font-extrabold text-sm ml-2 text-[#333333]">会员用户</text>
          </view>
          <view class="flex text-[#5E5E5E] items-center">
            <text class="text-sm ml-2">查看会员特权</text>
            <text class="text-xl i-eva-arrow-right-fill"></text>
          </view>
        </view>
        <view class="flex py-xl px-lg items-center justify-between">
          <view class="flex flex-col gap-2 items-center">
            <text class="font-bold text-xl text-[#333333]">1243.23</text>
            <view class="flex gap-2 items-center">
              <text class="text-sm text-[#434343]">余额</text>
              <view class="text-sm text-[#5885EA]">充值</view>
            </view>
          </view>
          <view class="flex flex-col gap-2 items-center">
            <text class="font-bold text-xl text-[#333333]">31</text>
            <text class="text-sm text-[#434343]">优惠券</text>
          </view>
          <view class="flex flex-col gap-2 items-center">
            <text class="font-bold text-xl text-[#333333]">33412</text>
            <text class="text-sm text-[#434343]">积分</text>
          </view>
        </view>
      </view>
      <!-- 我的订单 -->
      <view class="bg-white rounded-lg mx-sm mt-xs p-md">
        <view class="flex items-center justify-between">
          <text class="font-bold text-sm text-[#333333]">我的订单</text>
          <view class="flex text-sm text-[#5E5E5E] items-center">
            <text class="ml-2">查看全部订单</text>
            <text class="i-heroicons-chevron-right"></text>
          </view>
        </view>
        <view class="flex mt-8 mb-3 items-center justify-between">
          <view class="flex flex-col items-center">
            <text class="text-[#6EA0F4] text-64 i-ic-round-payments"></text>
            <text class="mt-3 text-sm text-[#434343]">待付款</text>
          </view>
          <view class="flex flex-col items-center">
            <text class="text-[#6EA0F4] text-64 i-ic-baseline-local-shipping"></text>
            <text class="mt-3 text-sm text-[#434343]">待发货</text>
          </view>
          <view class="flex flex-col items-center">
            <text class="text-[#6EA0F4] text-64 i-bxs-calendar-check"></text>
            <text class="mt-3 text-sm text-[#434343]">待收货</text>
          </view>
          <view class="flex flex-col items-center">
            <text class="text-[#6EA0F4] text-64 i-ic-round-comment-bank"></text>
            <text class="mt-3 text-sm text-[#434343]">待评价</text>
          </view>
          <view class="flex flex-col items-center">
            <text class="text-[#6EA0F4] text-64 i-ic-baseline-party-mode"></text>
            <text class="mt-3 text-sm text-[#434343]">售后</text>
          </view>
        </view>
      </view>
      <!-- 常用功能 -->
      <view class="bg-white rounded-lg mx-sm mt-xs p-md">
        <text class="font-bold text-sm text-[#333333]">常用功能</text>
        <view class="flex mt-8 mb-3 items-center">
          <view class="flex flex-col w-1/4 items-center">
            <text class="text-[#FFA165] text-64 i-heroicons-gift-solid"></text>
            <text class="mt-3 text-sm text-[#434343]">积分兑换</text>
          </view>
          <view class="flex flex-col w-1/4 items-center">
            <text class="text-[#5687FF] text-64 i-ic-round-account-balance-wallet"></text>
            <text class="mt-3 text-sm text-[#434343]">分销中心</text>
          </view>
          <view class="flex flex-col w-1/4 items-center">
            <text class="text-[#FF5555] text-64 i-bxs-calendar-check"></text>
            <text class="mt-3 text-sm text-[#434343]">签到中心</text>
          </view>
        </view>
      </view>
      <!-- 订单功能 -->
      <view class="bg-white rounded-lg mx-sm mt-xs p-md">
        <text class="font-bold text-sm text-[#333333]">订单功能</text>
        <view class="flex mt-8 mb-3 items-center">
          <view class="flex flex-col w-1/4 items-center">
            <text class="text-[#FE68EE] text-64 i-ic-baseline-add-business"></text>
            <text class="mt-3 text-sm text-[#434343]">多商户订单</text>
          </view>
          <view class="flex flex-col w-1/4 items-center">
            <text class="text-[#6CA3FF] text-64 i-ic-baseline-energy-savings-leaf"></text>
            <text class="mt-3 text-sm text-[#434343]">砍价订单</text>
          </view>
          <view class="flex flex-col w-1/4 items-center">
            <text class="text-[#FF765D] text-64 i-ic-baseline-access-time-filled"></text>
            <text class="mt-3 text-sm text-[#434343]">秒杀订单</text>
          </view>
          <view class="flex flex-col w-1/4 items-center">
            <text class="text-[#5784FF] text-64 i-ic-round-assignment-turned-in"></text>
            <text class="mt-3 text-sm text-[#434343]">预约订单</text>
          </view>
        </view>
      </view>
    </vu-scrollable-view>
  </vu-app-layout>
</template>

<style scoped></style>
