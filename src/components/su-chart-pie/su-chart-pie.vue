<script setup lang="ts">
import { getCurrentInstance, onMounted } from 'vue'

const props = withDefaults(defineProps<{ value: number }>(), { value: 0 })
const vueInstance = getCurrentInstance()

onMounted(() => {
  getCanvasElement()
})

function getCanvasElement() {
  const query = uni.createSelectorQuery()
  query.in(vueInstance).select('#canvas').boundingClientRect(createPieByCanvas).exec()
}

function createPieByCanvas(node: any) {
  const t = props.value > 0 ? props.value - 4 : props.value
  const current = ((Math.PI * 2) / 100) * t
  const startAngle = Math.PI * 1.35
  const endAngle = startAngle - current

  const x = node.width! / 2
  const y = node.height! / 2
  const r = Math.min(x, y) * 0.75

  const ctx = uni.createCanvasContext('canvas', vueInstance)

  ctx.beginPath()
  ctx.arc(x, y, r, 0, Math.PI * 2)
  ctx.setLineWidth(2)
  ctx.setStrokeStyle('#b0a4e3')
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.arc(x, y, r, startAngle, endAngle, true)
  ctx.setLineWidth(20)
  ctx.setLineCap('round')
  ctx.setStrokeStyle('#b0a4e3')
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.font = 'bold 24px 微软雅黑'
  const text1 = ctx.measureText(`${props.value}`)
  ctx.font = 'bold 14px 微软雅黑'
  ctx.setFillStyle('#b0a4e3')
  const unit = ctx.measureText('%')
  ctx.fillText('%', x + text1.width / 2 - unit.width * 0.3, y + 10)
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  ctx.font = 'bold 24px 微软雅黑'
  ctx.setFillStyle('#444')
  const title = ctx.measureText(`${props.value}`)
  ctx.fillText(`${props.value}`, x - (unit.width + title.width) / 2, y + 10)
  ctx.fill()
  ctx.closePath()

  ctx.draw()
}
</script>

<template>
  <canvas canvas-id="canvas" id="canvas" style="width: 100%; height: 100%" />
</template>

<style scoped></style>
