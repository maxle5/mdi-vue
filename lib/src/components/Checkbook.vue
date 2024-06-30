<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M5,14H19V15H5V14M21,17V8H3V17H21M1,5H23V19H1V5M5,10H12V12H5V10Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Checkbook",
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