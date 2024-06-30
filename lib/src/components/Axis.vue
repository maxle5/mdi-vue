<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M2.61,21L1.61,19.27L11,13.85V3H13V13.85L22.39,19.27L21.39,21L12,15.58L2.61,21Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Axis",
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