<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M4,4H6V10H10V4H12V18H10V12H6V18H4V4M14.59,7.41L18.17,11L14.59,14.59L16,16L21,11L16,6L14.59,7.41Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "FormatHeaderIncrease",
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