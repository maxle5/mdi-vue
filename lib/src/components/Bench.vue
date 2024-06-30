<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M23 13H1V15H3V19H5V15H19V19H21V15H23V13Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Bench",
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