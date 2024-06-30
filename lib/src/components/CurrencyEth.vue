<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M6,5H18V7H6M7,11H17V13H7M5.5,17H18.5V19H5.5" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "CurrencyEth",
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