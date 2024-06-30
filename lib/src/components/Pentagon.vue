<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M12,2.5L2,9.8L5.8,21.5H18.2L22,9.8L12,2.5Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Pentagon",
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