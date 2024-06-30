<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M20.84 22.73L19.11 21H3V4.89L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M21 3H6.2L21 17.8V3Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "SquareOff",
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