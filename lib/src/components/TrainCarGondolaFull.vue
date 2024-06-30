<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M21 10C19.04 8.19 15.74 7 12 7S4.96 8.19 3 10H1V17H2C2 18.11 2.9 19 4 19S6 18.11 6 17H18C18 18.11 18.9 19 20 19S22 18.11 22 17H23V10H21M21 15H19V13H17V15H15V13H13V15H11V13H9V15H7V13H5V15H3V12H21V15Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "TrainCarGondolaFull",
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