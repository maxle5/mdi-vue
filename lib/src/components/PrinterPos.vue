<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M18 10H6A2 2 0 0 0 4 12V19H20V12A2 2 0 0 0 18 10M18 14H14V12H18M17 9H7V4H17Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "PrinterPos",
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