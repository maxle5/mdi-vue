<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M12,2.6L9,12.4L2,19.9L12,17.6L22,20L15,12.5L12,2.6Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "StarThreePoints",
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