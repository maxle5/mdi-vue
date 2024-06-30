<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M22 15C22 18.9 18.9 22 15 22H9C5.1 22 2 18.9 2 15V12H22V15Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Bowl",
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