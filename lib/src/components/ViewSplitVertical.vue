<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M13,5H21V19H13V5M3,5H11V7H3V5M3,11V9H11V11H3M3,19V17H11V19H3M3,15V13H11V15H3Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ViewSplitVertical",
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