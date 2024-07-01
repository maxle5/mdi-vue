<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M3,19H9V12H3V19M10,19H22V12H10V19M3,5V11H22V5H3Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ViewCompact",
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