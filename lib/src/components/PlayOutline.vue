<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M8.5,8.64L13.77,12L8.5,15.36V8.64M6.5,5V19L17.5,12" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "PlayOutline",
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