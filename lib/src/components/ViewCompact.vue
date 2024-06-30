<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M3,19H9V12H3V19M10,19H22V12H10V19M3,5V11H22V5H3Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ViewCompact",
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