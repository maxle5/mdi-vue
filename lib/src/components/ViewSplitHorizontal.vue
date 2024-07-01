<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M3,5H21V7H3V5M3,11V9H21V11H3M3,19V13H21V19H3Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ViewSplitHorizontal",
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