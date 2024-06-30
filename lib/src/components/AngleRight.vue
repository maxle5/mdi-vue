<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M5,4H7V11H13V17H20V19H5V4M7,17H11V13H7V17Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "AngleRight",
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