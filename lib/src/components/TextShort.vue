<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M4,9H20V11H4V9M4,13H14V15H4V13Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "TextShort",
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