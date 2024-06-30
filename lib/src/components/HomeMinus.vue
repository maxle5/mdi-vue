<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M22 17V19H14V17H22M12 3L22 12H18C14.69 12 12 14.69 12 18C12 18.7 12.12 19.37 12.34 20H5V12H2L12 3Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "HomeMinus",
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