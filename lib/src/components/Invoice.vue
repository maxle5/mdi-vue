<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M21 22L18 20L15 22L12 20L9 22L6 20L3 22V3H21V22Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Invoice",
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