<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M3 13.5C3 9.36 6.36 6 10.5 6H13V2L20 8L13 14V10H10.5C8.57 10 7 11.57 7 13.5V21H3V13.5Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ArrowRightTopBold",
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