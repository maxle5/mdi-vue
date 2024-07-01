<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M3,21V3H21V21H3M5,5V19H19V5H5Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "BorderAllVariant",
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