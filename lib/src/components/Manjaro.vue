<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M2 2V22H7.6V7.6H14.8V2H2M9.2 9.2V22H14.8V9.2H9.2M16.4 2V22H22V2H16.4Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Manjaro",
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