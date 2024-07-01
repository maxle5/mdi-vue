<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M7,21H5V3H7V21M17,3V11H9V13H17V21H19V3H17Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "FormatTextWrappingClip",
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