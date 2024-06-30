<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "PlusThick",
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