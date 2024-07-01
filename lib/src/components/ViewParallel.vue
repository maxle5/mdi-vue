<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M19 3V21H15V3H19M14 3V21H10V3H14M9 3V21H5V3H9Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ViewParallel",
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