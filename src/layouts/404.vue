<template>
  <div>
    <h1>404</h1>
    <RouterView></RouterView>
    <button @click="router.back()">返回</button>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
</script>

<style></style>
