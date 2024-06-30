<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M9 19H7V5H9V19M13 5H11V19H13V5M17 5H15V19H17V5Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "TallyMark3",
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