<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M3,22V8H7V22H3M10,22V2H14V22H10M17,22V14H21V22H17Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Poll",
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