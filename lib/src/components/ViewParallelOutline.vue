<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M19 3H5V21H19V3M17 19H15V5H17V19M13 19H11V5H13V19M7 5H9V19H7V5Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ViewParallelOutline",
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