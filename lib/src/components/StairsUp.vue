<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M15 6H22V9H18V13H14V17H10V21H3V18H7V14H11V10H15V6M10.17 6.66L4.66 12.17L2.83 10.34L8.34 4.83L6.5 3H12V8.5L10.17 6.66Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "StairsUp",
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