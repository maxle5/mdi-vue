<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M12.07 19L9.24 16.18L19 6.42L17.58 5L7.82 14.76L5 11.94V19Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ArrowBottomLeftThin",
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