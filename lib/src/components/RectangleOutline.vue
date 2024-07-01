<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M4,6V19H20V6H4M18,17H6V8H18V17Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "RectangleOutline",
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