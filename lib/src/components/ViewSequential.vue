<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M3 5H21V9H3V5M3 10H21V14H3V10M3 15H21V19H3V15Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ViewSequential",
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