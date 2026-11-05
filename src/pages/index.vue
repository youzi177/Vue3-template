<template>
  <div class="text-3xl font-bold underline" ref="target">这是自动路由index</div>
  {{ title }}
  X：{{ x }} Y：{{ y }} 是否在元素外：{{ isOutside }}
  <HelloWorld></HelloWorld>
  <div class="button-row">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>
  <!-- A basic anchor icon from Phosphor icons -->
  <div class="i-ph-anchor-simple-thin" />
  <!-- An orange alarm from Material Design Icons -->
  <div class="i-mdi-alarm text-orange-400" />
  <!-- A large Vue logo -->
  <div class="i-logos-vue text-3xl" />
  <!-- Sun in light mode, Moon in dark mode, from Carbon -->
  <button class="i-carbon-sun dark:i-carbon-moon" />
  <!-- Twemoji of laugh, turns to tear on hovering -->
  <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
  <div class="i-line-md:account w-10 h-10 text-blue-500"></div>
</template>

<script lang="ts" setup>
const title = ref('这是自动路由index')

const target = useTemplateRef('target')

const { x, y, isOutside } = useMouseInElement(target)
</script>

<style></style>
<route lang="yaml">
meta:
  layout: default
</route>
