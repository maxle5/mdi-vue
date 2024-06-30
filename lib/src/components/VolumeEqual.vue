<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M3 9H7L12 4V20L7 15H3V9M14 13H22V15H14M14 9H22V11H14Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "VolumeEqual",
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