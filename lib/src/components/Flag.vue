<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Flag",
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