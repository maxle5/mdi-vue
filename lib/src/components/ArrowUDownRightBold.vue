<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M10.5 3C14.64 3 18 6.36 18 10.5V13H22L16 20L10 13H14V10.5C14 8.57 12.43 7 10.5 7S7 8.57 7 10.5V18H3V10.5C3 6.36 6.36 3 10.5 3Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ArrowUDownRightBold",
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