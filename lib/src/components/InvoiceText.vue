<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M3 3V22L6 20L9 22L12 20L15 22L18 20L21 22V3H3M17 7V9H7V7H17M15 11V13H7V11H15Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "InvoiceText",
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