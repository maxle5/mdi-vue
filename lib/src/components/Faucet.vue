<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M19 14V16H16V14.28L19 14M19 13C19 11.9 18 11 16.8 11H10V10H5V21H10V13.91L19 13M5 9H10V7L15.36 5.21C15.74 5.09 16 4.73 16 4.33C16 3.68 15.36 3.23 14.75 3.45L5 7V9Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Faucet",
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