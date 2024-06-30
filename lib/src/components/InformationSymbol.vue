<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M11 9H13V7H11V9M11 17H13V11H11V17Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "InformationSymbol",
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