<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M14.76 11L16.76 15H7.24L9.24 11H14.76M13 4H11V9H8L4 17H20L16 9H13V4M14 18H10C10 19.11 10.9 20 12 20S14 19.11 14 18Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "CeilingLightOutline",
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