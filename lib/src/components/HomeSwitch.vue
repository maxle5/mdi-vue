<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M6.5 15V11H9.5V15H13V9H15L8 3L1 9H3V15H6.5M9 16V18H15V16L18 19L15 22V20H9V22L6 19L9 16M23 9H21V15H15V10H19L13.54 5.11L16 3L23 9Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "HomeSwitch",
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