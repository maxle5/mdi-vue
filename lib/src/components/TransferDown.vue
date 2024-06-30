<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M16,3V5H8V3H16M16,7V9H8V7H16M16,11V13H8V11H16M5,15H19L12,22L5,15Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "TransferDown",
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