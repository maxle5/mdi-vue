<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M7,5H10V11L15,5H19L13.88,10.78L19,20H15.38L11.76,13.17L10,15.15V20H7V5Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "TemperatureKelvin",
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