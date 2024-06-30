<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M10,8H6L12,2L18,8H14V16H18L12,22L6,16H10V8Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ArrowUpDownBold",
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