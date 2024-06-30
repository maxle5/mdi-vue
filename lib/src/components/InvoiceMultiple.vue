<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M17 2H2V17H4V4H17V2M21 22L18.5 20.32L16 22L13.5 20.32L11 22L8.5 20.32L6 22V6H21V22Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "InvoiceMultiple",
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