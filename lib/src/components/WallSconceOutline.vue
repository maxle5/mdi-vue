<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M13.7 6L15.92 11H10.08L12.3 6H13.7M15 4H11L7 13H19L15 4M4 14V22H6V19H14V14H12V17H6V14H4Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "WallSconceOutline",
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