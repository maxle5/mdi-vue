<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M2 4H18V7H2V4M3 8H17V20H3V8M7.5 11C7.22 11 7 11.22 7 11.5V13H13V11.5C13 11.22 12.78 11 12.5 11H7.5M20 13V7H22V13H20M20 17V15H22V17H20Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ArchiveAlert",
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