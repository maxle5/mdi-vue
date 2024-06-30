<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M4 4H6V6H4V4M6 20H4V18H6V20M18 8V16H16V18H8V16H6V8H8V2H2V8H4V16H2V22H8V20H16V22H22V16H20V8H22V2H16V8H18M20 20H18V18H20V20M18 6V4H20V6H18Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "VectorSquareOpen",
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