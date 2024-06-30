<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M8,17V14L4,18L8,22V19H20V17M10,10V15H12V4H14V15H16V4H18V2H10A4,4 0 0,0 6,6A4,4 0 0,0 10,10Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "FormatPilcrowArrowLeft",
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