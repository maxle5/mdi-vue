<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M14.6 9L18 3.1L19.7 4.1L16.9 9H14.6M16.3 10H21V12H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V12H3V10H16.3M17 12H7V19H17V12Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "PotMixOutline",
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