<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M2,7V9H4V17H6V9H8V7H2M11,7A2,2 0 0,0 9,9V17H11V13H13V17H15V9A2,2 0 0,0 13,7H11M11,9H13V11H11V9M16,7V17H18V12L20,17H22V7H20V12L18,7H16Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "MathTan",
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