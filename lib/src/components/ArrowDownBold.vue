<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M9,4H15V12H19.84L12,19.84L4.16,12H9V4Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ArrowDownBold",
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