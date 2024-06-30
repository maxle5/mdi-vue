<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M14,6H22V22H14V6M2,4H22V2H2V4M2,8H12V6H2V8M9,22H12V10H9V22M2,22H7V10H2V22Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ChartTree",
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