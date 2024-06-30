<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M5,13H19V11H5M3,17H17V15H3M7,7V9H21V7" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "NotificationClearAll",
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