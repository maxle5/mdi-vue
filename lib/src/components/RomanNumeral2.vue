<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M11 7V9H10V15H11V17H7V15H8V9H7V7H11M17 7V9H16V15H17V17H13V15H14V9H13V7H17Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "RomanNumeral2",
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