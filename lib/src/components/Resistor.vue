<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M2,11H7L10.07,15.35L13.11,4L18,11H22V13H17L13.93,8.65L10.89,20L6,13H2V11Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Resistor",
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