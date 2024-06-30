<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M22,12L18,8V11H3V13H18V16L22,12Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "TrendingNeutral",
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