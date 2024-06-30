<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M19 15C19 18.87 15.87 22 12 22C8.13 22 5 18.87 5 15C5 12.21 6.64 9.8 9 8.67V5C9 4.45 9.45 4 10 4H10.5L9.5 2H14.5L13.5 4H14C14.55 4 15 4.45 15 5V8.67C17.36 9.8 19 12.21 19 15Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "FlaskRoundBottomEmpty",
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