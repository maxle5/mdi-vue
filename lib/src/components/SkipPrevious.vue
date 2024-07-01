<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "SkipPrevious",
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