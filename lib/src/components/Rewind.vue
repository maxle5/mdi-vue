<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Rewind",
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