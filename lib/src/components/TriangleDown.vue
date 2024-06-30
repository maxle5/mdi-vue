<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M1 3H23L12 22" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "TriangleDown",
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