<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M12,20L7,22L12,11L17,22L12,20M8,2H16V5H22V7H16V10H8V7H2V5H8V2M10,4V8H14V4H10Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "VectorPointSelect",
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