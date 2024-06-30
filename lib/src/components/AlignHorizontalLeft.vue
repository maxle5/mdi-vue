<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M4 22H2V2H4V22M22 7H6V10H22V7M16 14H6V17H16V14Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "AlignHorizontalLeft",
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