<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M1.5,21L12,3.5L22.5,21H1.5M12,21L17,12H7L12,21Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Triforce",
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