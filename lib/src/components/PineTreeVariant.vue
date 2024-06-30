<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M19 12L12 2L5 12H6.86L3 18H10V22H14V18H21L17.14 12H19Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "PineTreeVariant",
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