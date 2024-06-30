<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M7,2H9V22H7V2M19,9L11,14.6V3.4L19,9Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "FlagTriangle",
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