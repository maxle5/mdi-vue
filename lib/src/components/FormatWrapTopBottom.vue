<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M12,7L17,17H7L12,7M3,3H21V5H3V3M3,19H21V21H3V19Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "FormatWrapTopBottom",
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