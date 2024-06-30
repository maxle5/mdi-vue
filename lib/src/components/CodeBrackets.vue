<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M15,4V6H18V18H15V20H20V4M4,4V20H9V18H6V6H9V4H4Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "CodeBrackets",
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