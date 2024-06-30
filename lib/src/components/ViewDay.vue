<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M2,3V6H21V3M20,8H3A1,1 0 0,0 2,9V15A1,1 0 0,0 3,16H20A1,1 0 0,0 21,15V9A1,1 0 0,0 20,8M2,21H21V18H2V21Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ViewDay",
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