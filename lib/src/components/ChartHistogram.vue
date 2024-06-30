<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M3,3H5V13H9V7H13V11H17V15H21V21H3V3Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ChartHistogram",
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