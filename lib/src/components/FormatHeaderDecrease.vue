<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M4,4H6V10H10V4H12V18H10V12H6V18H4V4M20.42,7.41L16.83,11L20.42,14.59L19,16L14,11L19,6L20.42,7.41Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "FormatHeaderDecrease",
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