<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M21,4H16V20H21V4M14,9H9V20H14V9M7,14H2V20H7V14Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "SignalCellular3",
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