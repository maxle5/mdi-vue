<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M6.5 9L10 5.5L13.5 9H11V13H9V9H6.5M17.5 15L14 18.5L10.5 15H13V11H15V15H17.5Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "SwapVerticalCircle",
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