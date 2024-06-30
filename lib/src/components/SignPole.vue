<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M11 3L12 2L13 3V20C14.11 20 15 20.9 15 22H9C9 20.9 9.9 20 11 20V3Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "SignPole",
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