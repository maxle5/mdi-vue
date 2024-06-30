<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M12 2V22A10 10 0 0 0 12 2Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "MoonFirstQuarter",
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