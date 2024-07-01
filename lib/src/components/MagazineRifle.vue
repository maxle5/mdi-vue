<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M7 1V3H8V13L5 19L14 23L18 13V3H19V1M10 3H16V5H11.88V13.45L9.6 18.14L8 17.5L10 13.5Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "MagazineRifle",
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