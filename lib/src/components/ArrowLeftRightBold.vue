<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M8,14V18L2,12L8,6V10H16V6L22,12L16,18V14H8Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ArrowLeftRightBold",
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