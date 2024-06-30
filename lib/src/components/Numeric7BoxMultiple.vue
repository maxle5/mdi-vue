<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M3,5V21H19V23H3A2,2 0 0,1 1,21V5H3M13,15L17,7V5H11V7H15L11,15H13M21,1A2,2 0 0,1 23,3V17A2,2 0 0,1 21,19H7A2,2 0 0,1 5,17V3A2,2 0 0,1 7,1H21Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Numeric7BoxMultiple",
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