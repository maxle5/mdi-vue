<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M17,5H14V19H17V5M12,5L1,12L12,19V5M22,5H19V19H22V5Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "StepBackward2",
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