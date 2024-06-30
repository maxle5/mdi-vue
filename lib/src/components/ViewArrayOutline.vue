<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M15 7V16H10V7H15M21 5H18V18H21V5M17 5H8V18H17V5M7 5H4V18H7V5Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ViewArrayOutline",
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