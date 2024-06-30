<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M12,5L5.33,15H18.67M5,17H19V19H5V17Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Eject",
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