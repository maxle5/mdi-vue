<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M3,5V19H22V5H3M5,7H20V11H5V7M5,17V13H9V17H5M11,17V13H20V17H11Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ViewCompactOutline",
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