<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M18 5V3H7V16H5V18H7V21H9V18H13V16H9V13H17V11H9V5H18Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "CurrencyFra",
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