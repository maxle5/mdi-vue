<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M11,4V9H6V11H11V16H13V11H18V9H13V4H11M6,18V20H18V18H6Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "PlusMinus",
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