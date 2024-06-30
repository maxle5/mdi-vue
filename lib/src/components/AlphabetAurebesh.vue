<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M3 4V11H14.23L22 4H19L13.46 9H5V4H3M3 13V20H5V15H13.46L19 20H22L14.23 13H3Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "AlphabetAurebesh",
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