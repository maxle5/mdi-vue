<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M19 17H21V11H19M19 21H21V19H19M1 21H17V9H21V1" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "NetworkStrength4Alert",
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