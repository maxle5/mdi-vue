<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M19.5,14.5A7.5,7.5 0 0,1 12,22A7.5,7.5 0 0,1 4.5,14.5C4.5,10.36 7.86,2 12,2C16.14,2 19.5,10.36 19.5,14.5Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Egg",
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