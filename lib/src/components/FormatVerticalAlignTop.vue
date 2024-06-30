<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M8,11H11V21H13V11H16L12,7L8,11M4,3V5H20V3H4Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "FormatVerticalAlignTop",
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