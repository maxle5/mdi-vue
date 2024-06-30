<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M6,2L10,6L7,17L12,22L17,17L14,6L18,2Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Tie",
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