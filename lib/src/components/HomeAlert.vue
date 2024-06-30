<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M12 3L2 12H5V20H19V12H22L12 3M13 18H11V16H13V18M13 14H11V8H13V14Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "HomeAlert",
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