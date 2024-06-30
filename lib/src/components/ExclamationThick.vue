<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M10 3H14V14H10V3M10 21V17H14V21H10Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ExclamationThick",
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