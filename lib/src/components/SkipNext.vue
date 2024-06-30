<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M16,18H18V6H16M6,18L14.5,12L6,6V18Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "SkipNext",
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