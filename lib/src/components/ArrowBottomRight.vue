<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M5,6.41L6.41,5L17,15.59V9H19V19H9V17H15.59L5,6.41Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ArrowBottomRight",
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