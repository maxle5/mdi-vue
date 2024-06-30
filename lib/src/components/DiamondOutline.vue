<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M18,2H6L2,8L12,22L22,8L18,2M4.43,8L7.07,4H16.93L19.57,8L12,18.56L4.43,8Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "DiamondOutline",
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