<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M19,17.59L17.59,19L7,8.41V15H5V5H15V7H8.41L19,17.59Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ArrowTopLeft",
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