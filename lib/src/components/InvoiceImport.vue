<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M18 20L21 22V3H3V11H12.67L10.08 8.41L11.5 7L16.5 12L11.5 17L10.08 15.58L12.67 13H3V22L6 20L9 22L12 20L15 22L18 20Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "InvoiceImport",
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