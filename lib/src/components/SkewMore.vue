<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M12.5,11L10.41,20H5.5L7.59,11H12.5M15,9H6L3,22H12L15,9M21,6L17,2V5H9V7H17V10L21,6Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "SkewMore",
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