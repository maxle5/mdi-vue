<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M6 7H12V9H8V11H11V13H8V17H6V7M14 7H18V17H16V9H14V7Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "KeyboardF1",
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