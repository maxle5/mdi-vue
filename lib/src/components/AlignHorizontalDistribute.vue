<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M4 22H2V2H4V22M22 2H20V22H22V2M13.5 7H10.5V17H13.5V7Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "AlignHorizontalDistribute",
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