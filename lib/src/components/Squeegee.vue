<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M22,2V5H2V2H22M2,8H7L9,10H10V20A2,2 0 0,0 12,22A2,2 0 0,0 14,20V10H15L17,8H22V6H2V8Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Squeegee",
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