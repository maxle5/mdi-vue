<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M9,7V17H11V13H13A2,2 0 0,0 15,11V9A2,2 0 0,0 13,7H9M11,9H13V11H11V9Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "AlphaP",
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