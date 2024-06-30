<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M9,7V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V7H13V15H11V7H9Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "AlphaU",
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