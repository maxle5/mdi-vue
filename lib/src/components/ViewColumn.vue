<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M16,5V18H21V5M4,18H9V5H4M10,18H15V5H10V18Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ViewColumn",
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