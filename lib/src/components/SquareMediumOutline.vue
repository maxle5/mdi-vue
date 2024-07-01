<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M14,10V14H10V10H14M16,8H8V16H16V8Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "SquareMediumOutline",
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