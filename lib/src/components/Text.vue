<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Text",
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