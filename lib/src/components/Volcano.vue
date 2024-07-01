<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M18 8H11L9 13H6L2 22H22L18 8M13 1H15V5H13V1M16.12 5.47L18.95 2.64L20.36 4.05L17.54 6.88L16.12 5.47M7.64 4.05L9.05 2.64L11.88 5.46L10.47 6.88L7.64 4.05Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Volcano",
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