<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M19 3V21H15V3H19M14 3V21H10V3H14M9 3V21H5V3H9Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ViewParallel",
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