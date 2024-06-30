<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M17 15L18 19H21V22H3V19H6L7 15H17M15 8L16 12H8L9 8H15M13 1L14 5H10L11 1H13Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "TrafficCone",
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