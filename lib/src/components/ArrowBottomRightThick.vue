<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M14.89,12.06V7.11H18.31V18.31H7.11V14.89H12.06L5.69,8.5L8.5,5.69L14.89,12.06Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ArrowBottomRightThick",
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