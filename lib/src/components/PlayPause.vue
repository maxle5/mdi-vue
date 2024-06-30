<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M3,5V19L11,12M13,19H16V5H13M18,5V19H21V5" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "PlayPause",
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