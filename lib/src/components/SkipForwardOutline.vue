<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M6,9.83L8.17,12L6,14.17V9.83M4,5V19L11,12M20,5H18V19H20M13,9.83L15.17,12L13,14.17V9.83M11,5V19L18,12" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "SkipForwardOutline",
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