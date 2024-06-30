<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M10.5,2H13.5V8H19V11H13.5V22H10.5V11H5V8H10.5V2Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Cross",
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