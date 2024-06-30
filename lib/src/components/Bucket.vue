<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M3 4H21V7H20L17.5 21H6.5L4 7H3V4Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Bucket",
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