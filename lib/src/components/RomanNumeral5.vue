<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M9 7L11 17H13L15 7H13L12 12L11 7H9Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "RomanNumeral5",
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