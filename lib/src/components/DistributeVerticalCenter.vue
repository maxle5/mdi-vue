<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M2 16H5V14H19V16H22V18H19V20H5V18H2V16M2 8H7V10H17V8H22V6H17V4H7V6H2V8Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "DistributeVerticalCenter",
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