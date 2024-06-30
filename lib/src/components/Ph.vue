<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M13 7V17H15V13H17V17H19V7H17V11H15V7H13M11 15V13C11 11.9 10.11 11 9 11H5V21H7V17H9C10.11 17 11 16.11 11 15M9 15H7V13H9V15Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Ph",
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