<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M10,20H14V4H10V20M4,20H8V12H4V20M16,9V20H20V9H16Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Equalizer",
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