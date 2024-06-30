<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M16,10H22L12,0L2,10H8V14H2L12,24L22,14H16V10M14,16H17L12,21L7,16H10V8H7L12,3L17,8H14V16Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ArrowUpDownBoldOutline",
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