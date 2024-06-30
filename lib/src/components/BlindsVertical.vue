<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M20 19V3H4V19H2V21H22V19H20M10 19V5H14V19H10Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "BlindsVertical",
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