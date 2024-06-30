<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M17 5L21 9L17 13V5M16 8H13V10H16V8M12 10V8H10V10H12M3 15L7 11V19L3 15M8 16H11V14H8V16M12 14V16H14V14H12Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "SwapHorizontalHidden",
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