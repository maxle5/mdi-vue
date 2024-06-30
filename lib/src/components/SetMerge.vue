<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M2 7V9H7V7H2M12 9V11H9V13H12V15L15 12L12 9M17 9V15H22V9H17M2 11V13H7V11H2M2 15V17H7V15H2Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "SetMerge",
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