<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ChartBar",
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