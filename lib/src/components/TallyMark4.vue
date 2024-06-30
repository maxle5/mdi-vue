<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M7 19H5V5H7V19M11 5H9V19H11V5M15 5H13V19H15V5M19 5H17V19H19V5Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "TallyMark4",
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