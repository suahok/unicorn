<script setup lang="ts">
import { onLaunch } from '@dcloudio/uni-app'

onLaunch(() => {
  console.log('App Launch')
})
</script>

<style lang="scss">
/* #ifndef H5 */
page {
  overflow: hidden;
  height: 100%;
}
/* #endif */

/* #ifdef H5 */
uni-page-body {
  overflow: hidden;
  height: 100%;
}
/* #endif */
</style>
