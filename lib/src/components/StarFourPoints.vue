<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "StarFourPoints",
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