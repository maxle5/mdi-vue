<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M12,6L7,11H17L12,6M7,13L12,18L17,13H7Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "MenuSwap",
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