<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M21 22L18 20L15 22L12 20L9 22L6 20L3 22V3H21V22M19 18.26V5H5V18.26L6 17.6L9 19.6L12 17.6L15 19.6L18 17.6L19 18.26Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "InvoiceOutline",
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