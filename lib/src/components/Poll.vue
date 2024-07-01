<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M3,22V8H7V22H3M10,22V2H14V22H10M17,22V14H21V22H17Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Poll",
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