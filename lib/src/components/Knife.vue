<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M20.62,2C23.97,7.61 12.47,20.15 12.47,20.15L9.6,17.28L4.91,22L2.77,19.86L20.62,2Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Knife",
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