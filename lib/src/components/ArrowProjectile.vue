<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M22 2L20 7L19.03 6.03L8 17.06V19L5 22L4 20L2 19L5 16H6.94L17.97 4.97L17 4L22 2Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ArrowProjectile",
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