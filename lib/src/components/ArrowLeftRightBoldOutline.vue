<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M14,16V22L24,12L14,2V8H10V2L0,12L10,22V16H14M8,14V17L3,12L8,7V10H16V7L21,12L16,17V14H8Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ArrowLeftRightBoldOutline",
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