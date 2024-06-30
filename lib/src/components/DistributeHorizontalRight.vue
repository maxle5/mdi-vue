<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M3 17V7H8V2H10V22H8V17H3M19 22H21V2H19V5H14V19H19V22Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "DistributeHorizontalRight",
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