<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M2 12C2 17.5 6.5 22 12 22S22 17.5 22 12 17.5 2 12 2 2 6.5 2 12M5 11L10 6V9C15.06 9.73 17.28 13.33 18 17C16.19 14.43 13.61 13 10 13V16L5 11Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ReplyCircle",
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