<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M3 22V3H21V13.34C20.37 13.12 19.7 13 19 13C15.69 13 13 15.69 13 19C13 19.65 13.1 20.28 13.3 20.86L12 20L9 22L6 20L3 22M15 18V20H23V18H15Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "InvoiceMinus",
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