<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M9.12,11.94V16.89H5.69V5.69H16.89V9.12H11.94L18.31,15.5L15.5,18.31L9.12,11.94Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ArrowTopLeftThick",
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