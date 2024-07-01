<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M19,12L12,22L5,12L12,2" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "CardsDiamond",
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