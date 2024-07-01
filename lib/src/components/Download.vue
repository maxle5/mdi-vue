<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Download",
    props: {
        size: { 
            type: Number, 
            default: 24 
        },
        viewbox: {
            type: String, 
            default: "0 0 24 24" 
        },
    },
})
</script>