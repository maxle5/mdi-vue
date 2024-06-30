<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M21,18L17,14V17H5V19H17V22M9,10V15H11V4H13V15H15V4H17V2H9A4,4 0 0,0 5,6A4,4 0 0,0 9,10Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "FormatPilcrowArrowRight",
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