<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M19 2H5C3.89 2 3 2.89 3 4V16C3 17.11 3.9 18 5 18H10V20H8V22H16V20H14V18H19C20.11 18 21 17.11 21 16V4C21 2.89 20.1 2 19 2M19 16H5V4H19V16Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "MonitorSmall",
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