<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M13.5,5V16L12,22L10.5,16V5H13.5M17,2H7V4H17V2Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Nail",
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