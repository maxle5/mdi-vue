<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M21,16H19V8H21V16M17,16H15V8H17V16M13,16H11V8H13V16M9,5V19L2,12L9,5Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "TransferLeft",
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