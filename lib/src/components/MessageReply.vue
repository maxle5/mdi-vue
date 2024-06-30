<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M22,4C22,2.89 21.1,2 20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "MessageReply",
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