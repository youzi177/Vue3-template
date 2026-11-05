<template>
  <div v-if="offlineReady || needRefresh" class="pwa-toast" role="alert">
    <div class="message">
      <span v-if="offlineReady"> 应用已可以离线使用 </span>
      <span v-else> 发现新版本，是否立即更新？ </span>
    </div>
    <button v-if="needRefresh" @click="updateServiceWorker(true)">立即更新</button>
    <button @click="close">稍后</button>
  </div>
</template>
<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue'
const intervalMS = 5 * 60 * 1000 // 每 5 分钟检查一次
const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
  immediate: true,
  onRegisteredSW(swUrl, registration) {
    if (!registration) return

    setInterval(async () => {
      // 正在安装时不重复检查
      if (registration.installing) return
      // 离线时不检查
      if (!navigator.onLine) return
      try {
        const response = await fetch(swUrl, {
          cache: 'no-store',
          headers: {
            'cache-control': 'no-cache',
          },
        })
        if (response.ok) {
          await registration.update()
        }
      } catch {
        // 网络异常时忽略，等下一次检查
      }
    }, intervalMS)
  },
})

function close() {
  offlineReady.value = false
  needRefresh.value = false
}
</script>
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
