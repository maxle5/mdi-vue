<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M20 19V3H4V19H2V21H22V19H20M13 5H14.5V19H13V5M11 19H9.5V5H11V19M6 5H7.5V19H6V5M16.5 19V5H18V19H16.5Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "BlindsVerticalClosed",
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