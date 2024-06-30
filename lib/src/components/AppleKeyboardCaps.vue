<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M15,14V8H17.17L12,2.83L6.83,8H9V14H15M12,0L22,10H17V16H7V10H2L12,0M7,18H17V24H7V18M15,20H9V22H15V20Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "AppleKeyboardCaps",
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