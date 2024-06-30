<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M6,13H18V11H6M3,6V8H21V6M10,18H14V16H10V18Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "FilterVariant",
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