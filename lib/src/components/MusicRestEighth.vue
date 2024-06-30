<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M14 6A5.56 5.56 0 0 1 10.95 7.86A1.5 1.5 0 1 0 9.5 9H9.74A6.32 6.32 0 0 0 13.25 7.93L10 18H12L16 6Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "MusicRestEighth",
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