<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M4 6V18H21V6H4M19 16H6V13H19V16M6 11V8H19V11H6Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ViewStreamOutline",
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