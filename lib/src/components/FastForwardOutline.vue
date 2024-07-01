<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M15,9.9L18,12L15,14.1V9.9M6,9.9L9,12L6,14.1V9.9M13,6V18L21.5,12L13,6M4,6V18L12.5,12L4,6Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "FastForwardOutline",
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