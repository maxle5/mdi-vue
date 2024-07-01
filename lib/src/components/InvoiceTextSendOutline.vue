<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M24 18L14 23V19L18 18L14 17V13L24 18M21 14.26L19 13.26V5H5V18.26L6 17.6L9 19.6L12 17.6V20L9 22L6 20L3 22V3H21V14.26M17 7V9H7V7H17M12 13V11H7V13H12Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "InvoiceTextSendOutline",
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