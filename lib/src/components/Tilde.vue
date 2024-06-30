<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M2,15C2,15 2,9 8,9C12,9 12.5,12.5 15.5,12.5C19.5,12.5 19.5,9 19.5,9H22C22,9 22,15 16,15C12,15 10.5,11.5 8.5,11.5C4.5,11.5 4.5,15 4.5,15H2" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Tilde",
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