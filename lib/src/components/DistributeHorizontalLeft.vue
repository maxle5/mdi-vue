<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M21 7V17H16V22H14V2H16V7H21M5 2H3V22H5V19H10V5H5V2Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "DistributeHorizontalLeft",
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