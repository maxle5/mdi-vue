<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M9 7V9H8V15H9V17H5V15H6V9H5V7H9M14 7V9H13V15H14V17H10V15H11V9H10V7H14M19 7V9H18V15H19V17H15V15H16V9H15V7H19Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "RomanNumeral3",
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