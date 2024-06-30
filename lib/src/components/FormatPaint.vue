<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M18,4V3A1,1 0 0,0 17,2H5A1,1 0 0,0 4,3V7A1,1 0 0,0 5,8H17A1,1 0 0,0 18,7V6H19V10H9V21A1,1 0 0,0 10,22H12A1,1 0 0,0 13,21V12H21V4H18Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "FormatPaint",
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