<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M19,11H13V5H19M19,19H13V13H19M11,11H5V5H11M11,19H5V13H11M3,21H21V3H3V21Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "BorderAll",
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