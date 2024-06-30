<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M13.92 11H18V13H13V15H18V17H13V21H11V17H6V15H11V13H6V11H10.08L5 3H7.37L12 10.29L16.63 3H19L13.92 11Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "CurrencyJpy",
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