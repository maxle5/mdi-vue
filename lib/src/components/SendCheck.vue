<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M2 3V10L17 12L2 14V21L23 12M22 15.5L18.5 19L16.5 17L15 18.5L18.5 22L23.5 17Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "SendCheck",
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