<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M19,7H5V14H3V5H1V20H3V17H21V20H23V11A4,4 0 0,0 19,7" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "BedEmpty",
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