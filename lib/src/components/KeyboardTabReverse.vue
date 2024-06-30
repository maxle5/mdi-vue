<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M4 6H2V18H4M11 6L5 12L11 18L12.41 16.58L8.83 13H23V11H8.83L12.41 7.41L11 6Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "KeyboardTabReverse",
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