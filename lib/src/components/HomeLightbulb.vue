<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M12 3L2 12H5V20H19V12H22M13 18H11V17H13M13.5 14.58V16H10.5V14.58A3 3 0 1 1 13.5 14.58Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "HomeLightbulb",
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