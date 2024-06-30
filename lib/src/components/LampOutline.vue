<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M14.56 4L17.23 12H6.78L9.44 4H14.56M16 2H8L4 14H20L16 2M11 15H13V20H18V22H6V20H11V15Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "LampOutline",
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