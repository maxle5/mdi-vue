<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M12 2A10 10 0 1 1 2 12A10 10 0 0 1 12 2Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "MoonFull",
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