<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M13 9H11V7H13V9M14 15V17H10V15H11V13H10V11H13V15H14Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "InformationSlabSymbol",
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