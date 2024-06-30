<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M4,4H20V20H4V4M6,8V18H18V8H6Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "WindowMaximize",
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