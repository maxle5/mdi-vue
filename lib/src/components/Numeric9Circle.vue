<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M13,17A2,2 0 0,0 15,15V9A2,2 0 0,0 13,7H11A2,2 0 0,0 9,9V11A2,2 0 0,0 11,13H13V15H9V17H13M13,11H11V9H13V11Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Numeric9Circle",
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