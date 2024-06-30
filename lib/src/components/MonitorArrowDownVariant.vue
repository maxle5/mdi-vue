<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M17 14L22 9L20.6 7.6L18 10.2V3H16V10.2L13.4 7.6L12 9L17 14M23 14V16C23 17.1 22.1 18 21 18H14V20H16V22H8V20H10V18H3C1.9 18 1 17.1 1 16V4C1 2.9 1.9 2 3 2H12V4H3V16H21V14H23Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "MonitorArrowDownVariant",
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