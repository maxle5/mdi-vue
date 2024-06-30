<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M20,5V19L13,12M6,5V19H4V5M13,5V19L6,12" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "SkipBackward",
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