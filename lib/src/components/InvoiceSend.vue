<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M3 22V3H21V14.26L12 9.76V20L9 22L6 20L3 22M24 18L14 23V19L18 18L14 17V13L24 18Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "InvoiceSend",
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