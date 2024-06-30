<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M14 1V3H10V1H8V22H10V20H14V22H16V1H14M14 5V8H10V5H14M14 10V13H10V10H14M10 18V15H14V18H10Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Ladder",
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