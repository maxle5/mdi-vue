<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M22,4V2H2V4H11V18.17L5.5,12.67L4.08,14.08L12,22L19.92,14.08L18.5,12.67L13,18.17V4H22Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ArrowExpandDown",
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