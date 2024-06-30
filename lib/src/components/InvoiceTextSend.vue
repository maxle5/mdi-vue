<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M3 3V22L6 20L9 22L12 20V13H7V11H14.47L21 14.26V3H3M17 9H7V7H17V9M14 23V19L18 18L14 17V13L24 18L14 23Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "InvoiceTextSend",
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