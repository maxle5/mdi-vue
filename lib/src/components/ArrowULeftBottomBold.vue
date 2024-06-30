<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M21 10.5C21 14.64 17.64 18 13.5 18H11V22L4 16L11 10V14H13.5C15.43 14 17 12.43 17 10.5S15.43 7 13.5 7H6V3H13.5C17.64 3 21 6.36 21 10.5Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ArrowULeftBottomBold",
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