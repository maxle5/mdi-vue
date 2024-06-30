<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M18,14.17L15.83,12L18,9.83V14.17M20,19V5L13,12M4,19H6V5H4M11,14.17L8.83,12L11,9.83V14.17M13,19V5L6,12" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "SkipBackwardOutline",
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