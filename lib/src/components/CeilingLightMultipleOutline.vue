<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M16.76 13L18.76 17H9.24L11.24 13H16.76M15 6H13V11H10L6 19H22L18 11H15V6M16 20C16 21.11 15.11 22 14 22S12 21.11 12 20H16M8.21 10.11L8.76 9H11V2H9V7H6L2 15H5.76L8.21 10.11Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "CeilingLightMultipleOutline",
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