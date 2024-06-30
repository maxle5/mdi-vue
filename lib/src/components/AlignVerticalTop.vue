<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M22 2V4H2V2H22M7 22H10V6H7V22M14 16H17V6H14V16Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "AlignVerticalTop",
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