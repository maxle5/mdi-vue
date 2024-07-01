<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M15,20H9V12H4.16L12,4.16L19.84,12H15V20Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ArrowUpBold",
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