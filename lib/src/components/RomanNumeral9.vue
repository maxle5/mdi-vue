<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M11 7V9H10V15H11V17H7V15H8V9H7V7H11M12 7L14 12L12 17H14L15 14.5L16 17H18L16 12L18 7H16L15 9.5L14 7H12Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "RomanNumeral9",
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