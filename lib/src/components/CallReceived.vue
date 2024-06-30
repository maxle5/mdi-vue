<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M20,5.41L18.59,4L7,15.59V9H5V19H15V17H8.41" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "CallReceived",
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