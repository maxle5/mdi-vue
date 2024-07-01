<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M21,21H3V11.25L9.45,15L13.22,12.8L21,17.29V21M3,8.94V6.75L9.45,10.5L13.22,8.3L21,12.79V15L13.22,10.5L9.45,12.67L3,8.94Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ElevationDecline",
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