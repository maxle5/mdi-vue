<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M3 11H15V13H3M3 18V16H21V18M3 6H9V8H3Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "SortReverseVariant",
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