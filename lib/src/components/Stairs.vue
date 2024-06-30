<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M15,5V9H11V13H7V17H3V20H10V16H14V12H18V8H22V5H15Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Stairs",
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