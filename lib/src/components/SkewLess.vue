<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M17.5,11L15.41,20H10.5L12.59,11H17.5M20,9H11L8,22H17L20,9M4,6L8,2V5H16V7H8V10L4,6Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "SkewLess",
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