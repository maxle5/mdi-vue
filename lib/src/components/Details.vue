<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M6.38,6H17.63L12,16L6.38,6M3,4L12,20L21,4H3Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Details",
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