<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M6 7.24L15.53 12L6 16.76V7.24M4 4V20L20 12L4 4Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "GateBuffer",
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