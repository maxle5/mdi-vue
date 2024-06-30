<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M18 14H14V18H10V14H6V10H10V6H14V10H18" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Hospital",
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