<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M11 22V6.83L2 16V13.17L13 2V17.17L22 8V10.83L11 22Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "SawtoothWave",
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