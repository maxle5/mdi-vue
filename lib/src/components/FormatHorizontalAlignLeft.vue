<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M11,16V13H21V11H11V8L7,12L11,16M3,20H5V4H3V20Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "FormatHorizontalAlignLeft",
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