<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M9.5 14.5V9.5H21V21H15.5V14.5H9.5M3 3H21L21 8.5H8.5V15.5H14.5V21H3V3Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "FacebookGaming",
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