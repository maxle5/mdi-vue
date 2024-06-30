<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M17 21H7V16H2V14H22V16H17V21M22 5V3H2V5H5V10H19V5H22Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "DistributeVerticalTop",
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