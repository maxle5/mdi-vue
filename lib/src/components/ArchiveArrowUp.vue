<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M4 21H20V8H4M14 15V18H10V15H7L12 10L17 15M3 3H21V7H3" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ArchiveArrowUp",
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