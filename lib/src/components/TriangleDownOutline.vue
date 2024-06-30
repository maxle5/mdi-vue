<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M12 22L1 3H23M12 18L19.53 5H4.47" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "TriangleDownOutline",
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