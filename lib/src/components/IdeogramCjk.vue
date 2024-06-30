<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M11 4V6H4V10H6V8H18V10H20V6H13V4M8 10V12H13.59L11.59 14H4V16H11V18H10V20H13V16H20V14H14.21L16 12.21V10Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "IdeogramCjk",
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