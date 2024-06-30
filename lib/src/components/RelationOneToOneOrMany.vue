<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M22 13V19H21L19 17V19H17V17H11V9H7V11H5V9H2V7H5V5H7V7H13V15H17V13H19V15L21 13Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "RelationOneToOneOrMany",
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