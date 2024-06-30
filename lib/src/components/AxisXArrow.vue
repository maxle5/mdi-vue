<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M1.5,20.5L3,15.03L4.46,17.6L11,13.82V3H13V13.82L22.39,19.25L21.39,21L12,15.56L5.46,19.33L7,21.96L1.5,20.5Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "AxisXArrow",
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