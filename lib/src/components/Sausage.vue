<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M19 5.3C20.2 5.8 21 7.1 21 8.5C21 15.4 15.4 21 8.5 21C7.1 21 5.9 20.2 5.3 19L3 20.5V14.5L5.3 16C5.9 14.8 7.1 14 8.5 14C11.5 14 14 11.5 14 8.5C14 7.1 14.8 5.9 16 5.3L14.5 3H20.5L19 5.3Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Sausage",
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