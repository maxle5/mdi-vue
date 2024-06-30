<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M21 1L1 21H17V19H16V8.8L19 5.8V9H21M19 11V17H21V11M19 19V21H21V19" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "NetworkStrength3Alert",
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