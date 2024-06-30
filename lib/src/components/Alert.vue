<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Alert",
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