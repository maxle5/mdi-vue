<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M23 12L19 8V11H14.82C14.4 9.84 13.3 9 12 9S9.6 9.84 9.18 11H5L2 8V16L5 13H9.18C9.6 14.16 10.7 15 12 15S14.4 14.16 14.82 13H19V16L23 12Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Middleware",
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