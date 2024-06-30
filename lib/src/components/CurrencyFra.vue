<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M18 5V3H7V16H5V18H7V21H9V18H13V16H9V13H17V11H9V5H18Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "CurrencyFra",
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