<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M9,6H10.5L16.5,12L10.5,18H9V6M13.67,12L11,9.33V14.67L13.67,12Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "MenuRightOutline",
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