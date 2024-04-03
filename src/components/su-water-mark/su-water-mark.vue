<script setup lang="ts">
import { computed, getCurrentInstance, nextTick, reactive, ref } from 'vue'

const vueInstance = getCurrentInstance()
const waterMark = reactive({
  canvasShow: false,
  canvasWidth: 300,
  canvasHeight: 225,
  fontSize: 28
})
const previewImage = ref('')
const previewVideo = ref('')

const canvasStyle = computed(() => ({
  width: waterMark.canvasWidth + 'px',
  height: waterMark.canvasHeight + 'px'
}))

function handleAlbumImage() {
  changeChooseImage('album')
}

function handleCameraImage() {
  changeChooseImage('camera')
}

function hanldeVideocam() {
  uni.chooseVideo({
    sourceType: ['album', 'camera'],
    camera: 'back',
    compressed: false,
    success: ({ tempFilePath }) => {
      previewVideo.value = tempFilePath
    },
    fail: error => {
      console.log(error)
    }
  })
}

function handleDocumentAttach() {
  uni.chooseMessageFile({
    count: 3,
    type: 'file',
    success: ({ tempFiles }) => {
      const file = tempFiles[0]
      uni.openDocument({
        filePath: file.path,
        showMenu: true,
        success: result => {
          console.log(result)
          console.log('打开文件成功')
        },
        fail: error => {
          console.log(error)
          uni.showToast({ icon: 'none', title: '打开失败', duration: 1500 })
        }
      })
    },
    fail: error => {
      console.error(error)
    }
  })
}

function changeChooseImage(sourceType: 'album' | 'camera') {
  uni.chooseImage({
    sizeType: ['original', 'compressed'],
    sourceType: [sourceType],
    success: ({ tempFilePaths, tempFiles }) => {
      waterMark.canvasShow = true
      callAddWaterMark(tempFilePaths)
    },
    fail: error => {
      console.error(error)
    }
  })
}

function callAddWaterMark(tempFilePaths: string | string[]) {
  for (const filePath of tempFilePaths) {
    getImageInfo(filePath)
  }
}

function getImageInfo(filePath: string) {
  console.log(filePath)
  uni.getImageInfo({
    src: filePath,
    success: ({ width, height, path, type }) => {
      const size = Math.max(width, height) / Math.min(width, height)
      const fontSize = Math.floor((size / 10) * 2)
      waterMark.fontSize = Math.max(fontSize, 28)
      waterMark.canvasWidth = width
      waterMark.canvasHeight = height
      nextTick(async () => {
        const tempFilePath = await drawCanvasToFilePath(path, type)
        previewImage.value = tempFilePath
        waterMark.canvasShow = false
      })
    },
    fail: error => {
      console.log(error)
    }
  })
}

function drawCanvasToFilePath(path: string, type?: string) {
  return new Promise<string>((resolve, reject) => {
    const context = uni.createCanvasContext('waterMarkCanvas', vueInstance)
    const { canvasWidth, canvasHeight } = waterMark
    // 绘制前清空画布
    context.clearRect(0, 0, canvasWidth, canvasHeight)
    // 将图片src放到cancas内，宽高必须为图片大小
    context.drawImage(path, 0, 0, canvasWidth, canvasHeight, canvasWidth, canvasHeight)
    // 设置文字的透明度
    context.setGlobalAlpha(1)
    // 3.绘制底部的文字
    context.setTextAlign('left')
    context.setFillStyle('white')
    context.setFontSize(waterMark.fontSize)
    context.fillText('Ahok', 50, canvasHeight - 80)
    context.fillText(`${getFormatTime()}`, 50, canvasHeight - 40)
    context.draw(false, () => {
      uni.canvasToTempFilePath(
        {
          canvasId: 'waterMarkCanvas',
          fileType: type ?? 'jpeg',
          width: canvasWidth,
          height: canvasHeight,
          destWidth: canvasWidth,
          destHeight: canvasHeight,
          success: ({ tempFilePath }) => {
            console.log('绘制成功:', tempFilePath)
            resolve(tempFilePath)
          },
          fail: error => {
            console.log(error)
            reject(error)
          }
        },
        vueInstance
      )
    })
  })
}

function getFormatTime() {
  const d = new Date()
  const dates = [d.getFullYear(), d.getMonth() + 1, d.getDate()].map(s => s.toString().padStart(2, '0')).join('-')
  const times = [d.getHours(), d.getMinutes(), d.getSeconds()].map(s => s.toString().padStart(2, '0')).join(':')
  return `${dates} ${times}`
}
</script>

<template>
  <view class="gap-x-xs grid grid-cols-4">
    <view
      class="border-dashed rounded-md bg-cyan-100 border-4 border-cyan-400 grid box-border aspect-1"
      @click="handleCameraImage"
    >
      <text class="m-auto text-44 text-cyan-400 i-ion-camera-sharp"></text>
    </view>
    <view
      class="border-dashed rounded-md bg-emerald-100 border-4 border-emerald-400 grid box-border aspect-1"
      @click="handleAlbumImage"
    >
      <text class="m-auto text-44 text-emerald-400 i-ion-image-sharp"></text>
    </view>
    <view
      class="border-dashed rounded-md bg-orange-100 border-4 border-orange-400 grid box-border aspect-1"
      @click="hanldeVideocam"
    >
      <text class="m-auto text-44 text-orange-400 i-ion-videocam-sharp"></text>
    </view>
    <view
      class="border-dashed rounded-md bg-purple-100 border-4 border-purple-400 grid box-border aspect-1"
      @click="handleDocumentAttach"
    >
      <text class="m-auto text-44 text-purple-400 i-ion-document-attach-sharp"></text>
    </view>
  </view>
  <canvas v-if="waterMark.canvasShow" canvas-id="waterMarkCanvas" id="waterMarkCanvas" :style="canvasStyle" />
  <image v-if="!waterMark.canvasShow && previewImage" :src="previewImage" mode="widthFix" class="w-full" />
  <video v-if="previewVideo" :src="previewVideo" class="w-full" />
</template>

<style scoped></style>
