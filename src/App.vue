<template>
  <div>
    <RouterView></RouterView>
    <!-- pwa检测更新组件 -->
    <ReloadPrompt
      :offline-ready="offlineReady"
      :need-refresh="needRefresh"
      :update-service-worker="updateServiceWorker"
      @close="close"
    />
  </div>
</template>

<script lang="ts" setup>
import { usePwa } from './composables/usePwa'

// 初始化 PWA，只执行一次
const { offlineReady, needRefresh, updateServiceWorker, close } = usePwa()
</script>

<style></style>
