<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M23 13H1V15H3V19H5V15H19V19H21V15H23V13Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Bench",
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