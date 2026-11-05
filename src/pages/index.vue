<template>
  <div class="text-3xl font-bold underline" ref="target">这是自动路由index</div>
  {{ title }}
  X：{{ x }} Y：{{ y }} 是否在元素外：{{ isOutside }}
</template>

<script lang="ts" setup>
const title = ref('这是自动路由index')

const target = useTemplateRef('target')

const { x, y, isOutside } = useMouseInElement(target)
</script>

<style></style>
