<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M3 5V19H21V5H3M19 7V9H5V7H19M19 11V13H5V11H19M5 17V15H19V17H5Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ViewSequentialOutline",
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