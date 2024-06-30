<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M19,16V13H23V11H19V8L15,12L19,16M5,8V11H1V13H5V16L9,12L5,8M11,20H13V4H11V20Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "FormatHorizontalAlignCenter",
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