<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M5,15.5L7.5,20H2.5L5,15.5M9,19H21V17H9V19M5,9.5L7.5,14H2.5L5,9.5M9,13H21V11H9V13M5,3.5L7.5,8H2.5L5,3.5M9,7H21V5H9V7Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "FormatListBulletedTriangle",
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