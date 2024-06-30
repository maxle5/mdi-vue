<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M3 17H21V19H3V17M3 2H21V4H3V2M3 20H21V22H3V20M13 8H15L12 5L9 8H11V13H9L12 16L15 13H13V8Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "FormatParagraphSpacing",
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