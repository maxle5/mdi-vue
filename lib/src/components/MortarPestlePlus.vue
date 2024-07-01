<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M16,14H13V17H11V14H8V12H11V9H13V12H16M21,5H18.35L19.5,1.85L17.15,1L15.69,5H3V7L5,13L3,19V21H21V19L19,13L21,7V5Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "MortarPestlePlus",
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