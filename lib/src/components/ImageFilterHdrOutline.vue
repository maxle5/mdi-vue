<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M23 18H1L8.25 8.33L10.25 11L14 6L23 18M11.5 12.67L14 16L19 16L14 9.33L11.5 12.67M5 16L11.5 16L8.25 11.67L5 16Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ImageFilterHdrOutline",
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