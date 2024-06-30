<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M13,8V11H3V13H13V16L17,12L13,8M19,20H21V4H19V20Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "FormatHorizontalAlignRight",
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