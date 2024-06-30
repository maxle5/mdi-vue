<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M6 7L8 17H10L12 7H10L9 12L8 7H6M17 7V9H16V15H17V17H13V15H14V9H13V7H17Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "RomanNumeral6",
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
}
</script>

<style scoped>
    path {
        fill: currentColor;
    }
</style>