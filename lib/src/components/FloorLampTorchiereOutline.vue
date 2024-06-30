<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M14 4L12.7 7H11.3L10 4H14M17 2H7L10 9H14L17 2M13 20H16V22H8V20H11V10H13V20Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "FloorLampTorchiereOutline",
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