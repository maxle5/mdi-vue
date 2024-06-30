<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M8,18H17V5H8M18,5V18H21V5M4,18H7V5H4V18Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ViewArray",
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