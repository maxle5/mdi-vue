<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Plus",
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