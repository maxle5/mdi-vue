<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M13.28 12H18V14H13V21H11V14H6V12H10.72L5 3H7.37L12 10.29L16.63 3H19L13.28 12Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "CurrencyCny",
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