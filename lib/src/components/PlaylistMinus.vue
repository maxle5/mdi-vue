<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M3 16H10V14H3M12 14V16H22V14M14 6H3V8H14M14 10H3V12H14V10Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "PlaylistMinus",
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