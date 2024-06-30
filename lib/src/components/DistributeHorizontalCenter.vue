<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M8 2V5H10V19H8V22H6V19H4V5H6V2H8M16 2V7H14V17H16V22H18V17H20V7H18V2H16Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "DistributeHorizontalCenter",
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