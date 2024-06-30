<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M21,8H3V6H21M9,13H21V11H9M9,18H21V16H9" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Segment",
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