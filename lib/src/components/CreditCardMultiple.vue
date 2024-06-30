<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M21 9V6H7V9H21M21 3A2 2 0 0 1 23 5V15A2 2 0 0 1 21 17H7A2 2 0 0 1 5 15V5A2 2 0 0 1 7 3H21M3 19H18V21H3A2 2 0 0 1 1 19V8H3Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "CreditCardMultiple",
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