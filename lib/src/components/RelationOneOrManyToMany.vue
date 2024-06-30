<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M22 13V19H21L19 17H11V9H7V11H5V9L3 11H2V5H3L5 7V5H7V7H13V15H19L21 13Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "RelationOneOrManyToMany",
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