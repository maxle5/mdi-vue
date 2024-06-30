<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M4 2L6 22H17L19 2H4M6.2 4H16.8L15.2 20H7.8L6.2 4Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "GlassPintOutline",
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