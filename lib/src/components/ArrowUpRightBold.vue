<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M3 21V17H10.5C12.43 17 14 15.43 14 13.5V11H10L16 4L22 11H18V13.5C18 17.64 14.64 21 10.5 21H3Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ArrowUpRightBold",
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