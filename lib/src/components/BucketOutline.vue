<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M3 4H21V7H20L17.5 21H6.5L4 7H3V4M17.97 7H6.03L8.15 19H15.85L17.97 7Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "BucketOutline",
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