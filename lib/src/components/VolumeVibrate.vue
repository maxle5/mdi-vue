<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M4 9V15H8L13 20V4L8 9H4M16.55 2.47L15.5 3.53L17.93 6L15 9L17.93 12L15 15L17.93 18L15.5 20.47L16.55 21.53L20 18L17.07 15L20 12L17.07 9L20 6L16.55 2.47Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "VolumeVibrate",
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