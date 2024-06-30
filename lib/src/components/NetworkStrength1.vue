<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M1,21H21V1M19,5.83V19H11V13.83" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "NetworkStrength1",
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