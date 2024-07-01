<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M3,13H15V11H3M3,6V8H21V6M3,18H9V16H3V18Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "SortVariant",
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