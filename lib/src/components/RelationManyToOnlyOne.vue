<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M22 15V17H21V19H19V17H18V19H16V17H11V9H5L3 11H2V5H3L5 7H13V15H16V13H18V15H19V13H21V15Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "RelationManyToOnlyOne",
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