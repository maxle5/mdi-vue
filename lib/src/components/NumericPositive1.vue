<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M13 7V9H15V17H17V7H13M11 13H9V15H7V13H5V11H7V9H9V11H11V13Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "NumericPositive1",
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