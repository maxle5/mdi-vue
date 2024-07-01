<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M20 2C21.11 2 22 2.9 22 4V16C22 17.11 21.11 18 20 18H6L2 22V4C2 2.89 2.9 2 4 2H20M8 9V11H16V9H8Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "MessageMinus",
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