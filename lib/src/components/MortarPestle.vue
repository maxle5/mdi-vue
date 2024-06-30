<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M21 7L19 13L21 19V21H3V19L5 13L3 7V5H15.7L17.2 1L19.5 1.8L18.3 5H21V7Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "MortarPestle",
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