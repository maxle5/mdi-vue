<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M22 15V17H19V19H17V17H11V9H5L3 11H2V5H3L5 7H13V15H17V13H19V15Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "RelationManyToOne",
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