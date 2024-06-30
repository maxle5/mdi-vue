<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M8,21V19H16V21H8M8,17V15H16V17H8M8,13V11H16V13H8M19,9H5L12,2L19,9Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "TransferUp",
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