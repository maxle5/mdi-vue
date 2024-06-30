<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M5,4V6H19V4H5M5,14H9V20H15V14H19L12,7L5,14Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Publish",
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