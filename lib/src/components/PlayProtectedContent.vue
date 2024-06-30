<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M2,5V18H11V16H4V7H17V11H19V5H2M9,9V14L12.5,11.5L9,9M21.04,11.67L16.09,16.62L13.96,14.5L12.55,15.91L16.09,19.45L22.45,13.09L21.04,11.67Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "PlayProtectedContent",
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