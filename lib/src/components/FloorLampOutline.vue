<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M15 2L17 9H7L9 2M13.6 4H10.4L9.55 7H14.45M11 10H13V20H16V22H8V20H11Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "FloorLampOutline",
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