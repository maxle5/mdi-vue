<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M16,13H13V3H11V13H8L12,17L16,13M4,19V21H20V19H4Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "FormatVerticalAlignBottom",
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