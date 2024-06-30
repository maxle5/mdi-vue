<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M15.73,3H8.27L3,8.27V15.73L8.27,21H15.73L21,15.73V8.27" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Octagon",
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