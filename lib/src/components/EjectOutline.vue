<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M5,17H19V19H5V17M12,5L5.33,15H18.67L12,5M12,8.6L14.93,13H9.07L12,8.6Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "EjectOutline",
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