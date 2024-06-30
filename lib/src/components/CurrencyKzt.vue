<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M5,3H19V5H5V3M5,6H19V8H13V21H11V8H5V6Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "CurrencyKzt",
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