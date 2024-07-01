<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M4 5V18H21V5H4M6 16V7H9V16H6M11 16V12.5H14V16H11M19 16H16V12.5H19V16M11 10.5V7H19V10.5H11Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ViewQuiltOutline",
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