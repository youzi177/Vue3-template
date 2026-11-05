<template>
  <div v-if="offlineReady || needRefresh" class="pwa-toast" role="alert">
    <div class="message">
      <span v-if="offlineReady">应用已可以离线使用</span>
      <span v-else>发现新版本，是否立即更新？</span>
    </div>

    <button v-if="needRefresh" @click="updateServiceWorker(true)">立即更新</button>

    <button @click="emit('close')" v-if="!offlineReady">稍后</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  offlineReady: boolean
  needRefresh: boolean
  updateServiceWorker: (reloadPage?: boolean) => Promise<void>
}>()

const emit = defineEmits<{
  close: []
}>()
</script>
<style>
/* 原来的 CSS 保持不变 */
</style>
<style>
.pwa-toast {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 16px;
  padding: 12px;
  border: 1px solid #8885;
  border-radius: 4px;
  z-index: 1;
  text-align: left;
  box-shadow: 3px 4px 5px 0 #8885;
  background-color: white;
}

.pwa-toast .message {
  margin-bottom: 8px;
}

.pwa-toast button {
  border: 1px solid #8885;
  outline: none;
  margin-right: 5px;
  border-radius: 2px;
  padding: 3px 10px;
}
</style>
