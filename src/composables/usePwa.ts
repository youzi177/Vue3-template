// src/composables/usePwa.ts
import { onBeforeUnmount } from 'vue'
import { useRegisterSW } from 'virtual:pwa-register/vue'

export function usePwa() {
  const intervalMS = 5 * 60 * 1000

  let timer: ReturnType<typeof setInterval> | undefined

  const {
    offlineReady,
    needRefresh,
    updateServiceWorker
  } = useRegisterSW({
    immediate: true,

    onRegisteredSW(swUrl, registration) {
      if (!registration) return

      // 防止重复创建定时器
      if (timer) clearInterval(timer)

      timer = setInterval(async () => {
        // 正在安装时不重复检查
        if (registration.installing) return

        // 离线时不检查
        if (!navigator.onLine) return

        try {
          const response = await fetch(swUrl, {
            cache: 'no-store',
            headers: {
              'cache-control': 'no-cache'
            }
          })

          if (response.ok) {
            await registration.update()
          }
        } catch {
          // 网络异常时忽略，等待下次检查
        }
      }, intervalMS)
    }
  })

  function close() {
    offlineReady.value = false
    needRefresh.value = false
  }

  // 组件卸载时清理定时器
  onBeforeUnmount(() => {
    if (timer) clearInterval(timer)
  })

  return {
    offlineReady,
    needRefresh,
    updateServiceWorker,
    close
  }
}
