<script setup>
import { ref } from 'vue'
import { useCssVar } from '@vueuse/core'
const someEl = ref(null)
const color = useCssVar('--color', someEl, { initialValue: '#eee' })
</script>

<template>
    <div :color="color">
       <router-view> </router-view>
    </div>
</template>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
