<script setup lang="ts">
import { onLaunch, onPageNotFound } from '@dcloudio/uni-app'

onLaunch(() => {
  console.log('App Launch')
})

onPageNotFound(() => {
  uni.navigateTo({
    url: `/pages/notFound/notFound`
  })
})
</script>

<style lang="scss"></style>
