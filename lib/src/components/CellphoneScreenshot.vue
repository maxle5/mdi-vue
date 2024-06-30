<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M7,1A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1H7M7,4H17V20H7V4M9,6V10H10.5V7.5H13V6H9M13.5,14V16.5H11V18H15V14H13.5Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "CellphoneScreenshot",
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