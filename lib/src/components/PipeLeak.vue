<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M2,5V13H4V11H10L12,9L10,7H4V5H2M20,5V7H12L14,9L12,11H20V13H22V5H20M12,13C12,13 10,15.17 10,16.5A2,2 0 0,0 12,18.5A2,2 0 0,0 14,16.5C14,15.17 12,13 12,13Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "PipeLeak",
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