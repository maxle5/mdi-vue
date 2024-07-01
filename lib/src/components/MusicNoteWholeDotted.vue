<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M10 15A2 2 0 1 1 8 17A2 2 0 0 1 10 15M10 13A4 4 0 1 0 14 17A4 4 0 0 0 10 13M16.5 17A1.5 1.5 0 1 1 15 18.5A1.5 1.5 0 0 1 16.5 17Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "MusicNoteWholeDotted",
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