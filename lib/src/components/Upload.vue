<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Upload",
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