<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M5,3A2,2 0 0,0 3,5V7H5V5H19V7H21V5A2,2 0 0,0 19,3H5M8,7V9H16V7H8M3,9V12A9,9 0 0,0 12,21A9,9 0 0,0 21,12V9H19V12A7,7 0 0,1 12,19A7,7 0 0,1 5,12V9H3M12,12A2.5,2.5 0 0,0 9.5,14.5A2.5,2.5 0 0,0 12,17A2.5,2.5 0 0,0 14.5,14.5A2.5,2.5 0 0,0 12,12Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "RobotVacuumVariant",
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