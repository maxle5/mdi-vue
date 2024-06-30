<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M8 4V6H14L13 10.81L15 11.2L16 6.1V4M10 9V12C10 14.86 9.34 17.29 8.08 18.61L9.5 20C11.35 18.08 12 15.15 12 12V9Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "SyllabaryKatakanaHalfwidth",
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