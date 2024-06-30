<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M2 2H4V20H22V22H2V2M17 2H20V18H17V2M6 11H9V18H6V11M13 3H16V7H13V3M10 8H13V12H10V8Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ChartWaterfall",
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