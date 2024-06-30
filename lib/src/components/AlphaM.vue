<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M9,7A2,2 0 0,0 7,9V17H9V9H11V16H13V9H15V17H17V9A2,2 0 0,0 15,7H9Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "AlphaM",
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