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

<style lang="scss">
/* #ifndef H5 */
page {
  height: 100%;
  background-color: #f4f4f4;
}
/* #endif */
/* #ifdef H5 */
body {
  height: 100%;
  background-color: #f4f4f4;
}
/* #endif */
</style>
