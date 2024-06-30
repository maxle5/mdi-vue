<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M22 13V19H21L19 17V19H17V17H11V9H8V11H6V9H5V11H3V9H2V7H3V5H5V7H6V5H8V7H13V15H17V13H19V15L21 13Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "RelationOnlyOneToOneOrMany",
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